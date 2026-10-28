import {defineConfig,loadEnv} from 'vite';
import {aiMiddleware} from './server/ai-service.js';
export default defineConfig(({mode})=>{const env=loadEnv(mode,process.cwd(),''),config={apiKey:env.GROQ_API_KEY||process.env.GROQ_API_KEY,model:env.GROQ_MODEL||process.env.GROQ_MODEL||'openai/gpt-oss-20b'};return {base:'/',plugins:[{name:'interior-ai-api',configureServer(server){server.middlewares.use(aiMiddleware(config));},configurePreviewServer(server){server.middlewares.use(aiMiddleware(config));}}]};});
