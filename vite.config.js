import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Vite가 구동할 때 D3plus 최신 Scope 모듈들을 미리 번들링하여 호환성 에러 예방
    include: ["@d3plus/react", "@d3plus/core", "d3-selection"],
  },
  // 빌드 타임 패키지 참조 에러 사전 예방
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
