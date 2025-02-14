import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  return {
    plugins: [react()],
    base: isBuild ? '/wp-content/themes/team31-theme/js/' : '',
    build: {
      outDir: path.resolve(__dirname, "../js"), // WordPressの `js/` フォルダに出力
      emptyOutDir: true,
      assetsDir: "", // `assets/` を作らず `js/` に直接出力
      manifest: true, // `manifest.json` を生成
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "src/index.tsx"), // Reactのエントリーポイント
        },
      },
    },
    server: {
      port: 5173,
      strictPort: true,
      fs: {
        allow: ['..'],
      },
    },
  };
});
