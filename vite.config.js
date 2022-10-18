import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

import {resolve} from 'path'

export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [VantResolver()],
        }),],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "component": resolve(__dirname, "src/components/components"),
            "layout": resolve(__dirname, "src/components/layout"),
        }
    }
})