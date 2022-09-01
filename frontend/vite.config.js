//vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins:[vue()],
    resolve: {
        "@": path.resolve(__dirname, "./src")
    }
})