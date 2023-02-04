import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pkg from 'vite-plugin-linter';
const { EsLinter, linterPlugin, TypeScriptLinter } = pkg;
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
    plugins: [
        react(),
        tsconfigPaths(),
        linterPlugin({
            include: ['./src/**/*.ts', './src/**/*.tsx'],
            linters: [new EsLinter({ configEnv }), new TypeScriptLinter()],
        }),
    ],
}));
