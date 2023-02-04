import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pkg from 'vite-plugin-linter';
const { EsLinter, linterPlugin } = pkg;
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePluginFonts } from 'vite-plugin-fonts';
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
    plugins: [
        react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
        tsconfigPaths(),
        linterPlugin({
            include: ['./src/**/*.ts', './src/**/*.tsx'],
            linters: [new EsLinter({ configEnv })],
        }),
        VitePluginFonts({
            google: {
                families: ['Unica One', 'Quicksand'],
            },
        }),
    ],
}));
