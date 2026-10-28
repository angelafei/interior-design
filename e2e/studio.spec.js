import {test, expect} from '@playwright/test';
import {activeCatalog} from '../src/models.js';

test.beforeEach(async ({page}) => {
  await page.addInitScript(() => localStorage.setItem('forma-onboarding-v1', 'done'));
  await page.goto('/');
  await expect(page.locator('#scene canvas')).toBeVisible();
});

test('searches and adds furniture, then supports undo and view switching', async ({page}, testInfo) => {
  const countText = await page.locator('#object-count').textContent();
  const initial = Number(countText.match(/\d+/)[0]);
  if (testInfo.project.name.includes('mobile')) {
    await page.getByRole('button', {name: '寵物', exact: true}).click();
    await expect(page.locator('#result-count')).toHaveText('10 件傢具');
  } else {
    await page.getByLabel('搜尋傢具').fill('森階');
    await expect(page.locator('#result-count')).toHaveText('1 件傢具');
  }
  await page.getByTitle(/加入.*森階 實木攀爬塔/).click();
  await expect(page.locator('#object-count')).toHaveText(`${initial + 1} 個物件`);
  await expect(page.getByRole('status')).toContainText('已加入空間');
  await page.locator('#undo').click();
  await expect(page.locator('#object-count')).toHaveText(`${initial} 個物件`);
  await page.locator('#view-2d').click();
  await expect(page.locator('#view-2d')).toHaveClass(/active/);
  await page.locator('#view-3d').click();
  await expect(page.locator('#view-3d')).toHaveClass(/active/);
  if (testInfo.project.name.includes('mobile')) {
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  }
});

test('opens AI assistant and applies the explicit offline demo', async ({page}) => {
  await page.locator('#open-ai').click();
  await expect(page.locator('#ai-panel')).toBeVisible();
  await expect(page.locator('#ai-connection')).toContainText(/尚未設定|後端未連線/);
  await page.locator('#ai-demo').click();
  await expect(page.locator('#ai-messages')).toContainText('已套用');
  await expect(page.locator('#ai-comparison')).toBeVisible();
});

test('fixed-color cat furniture disables color controls', async ({page}) => {
  await page.getByTitle(/加入.*森階 實木攀爬塔/).click();
  await expect(page.locator('#color-status')).toHaveText('不可換色');
  await expect(page.locator('#fixed-color-notice')).toBeVisible();
  await expect(page.locator('.color-palettes')).toBeHidden();
  await expect(page.locator('.custom-color')).toBeHidden();
  await expect(page.locator('#custom-color')).toBeDisabled();
  await expect(page.locator('[data-finish]').first()).toBeDisabled();
});

test('adds every available catalog item through the UI', async ({page}, testInfo) => {
  test.skip(testInfo.project.name.includes('mobile'), '完整素材庫逐款測試由桌面版執行；手機版另有核心加入流程。');
  test.setTimeout(180_000);

  const countText = await page.locator('#object-count').textContent();
  const initial = Number(countText.match(/\d+/)[0]);
  const search = page.getByLabel('搜尋傢具');

  for (const item of activeCatalog) {
    await test.step(`加入 ${item.name}`, async () => {
      await search.fill(item.name);
      await expect(page.locator('#result-count')).toHaveText('1 件傢具');
      await page.getByTitle(`加入 ${item.name}`).click();
      await expect(page.locator('#selected-name')).toHaveText(item.name);
      await expect(page.locator('#object-count')).toHaveText(`${initial + 1} 個物件`);
      await page.locator('#undo').click();
      await expect(page.locator('#object-count')).toHaveText(`${initial} 個物件`);
    });
  }
});
