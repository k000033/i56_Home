// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/Users/Jones_Zhong/Desktop/Vue%E5%B0%88%E6%A1%88/vite/udi.All_Site_Device/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Users/Jones_Zhong/Desktop/Vue%E5%B0%88%E6%A1%88/vite/udi.All_Site_Device/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///D:/Users/Jones_Zhong/Desktop/Vue%E5%B0%88%E6%A1%88/vite/udi.All_Site_Device/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import AutoImport from "file:///D:/Users/Jones_Zhong/Desktop/Vue%E5%B0%88%E6%A1%88/vite/udi.All_Site_Device/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/Users/Jones_Zhong/Desktop/Vue%E5%B0%88%E6%A1%88/vite/udi.All_Site_Device/node_modules/unplugin-vue-components/dist/vite.js";
import Pages from "file:///D:/Users/Jones_Zhong/Desktop/Vue%E5%B0%88%E6%A1%88/vite/udi.All_Site_Device/node_modules/vite-plugin-pages/dist/index.js";
import Layouts from "file:///D:/Users/Jones_Zhong/Desktop/Vue%E5%B0%88%E6%A1%88/vite/udi.All_Site_Device/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///D:/Users/Jones_Zhong/Desktop/Vue%E5%B0%88%E6%A1%88/vite/udi.All_Site_Device/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
var __vite_injected_original_import_meta_url = "file:///D:/Users/Jones_Zhong/Desktop/Vue%E5%B0%88%E6%A1%88/vite/udi.All_Site_Device/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n"],
      dts: "src/auto-imports.js"
    }),
    Components({
      // 從 `./src/components/` 路徑查找
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/auto-components.js"
    }),
    Pages(),
    Layouts(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      symbolId: "[dir]/[name]"
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxVc2Vyc1xcXFxKb25lc19aaG9uZ1xcXFxEZXNrdG9wXFxcXFZ1ZVx1NUMwOFx1Njg0OFxcXFx2aXRlXFxcXHVkaS5BbGxfU2l0ZV9EZXZpY2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFVzZXJzXFxcXEpvbmVzX1pob25nXFxcXERlc2t0b3BcXFxcVnVlXHU1QzA4XHU2ODQ4XFxcXHZpdGVcXFxcdWRpLkFsbF9TaXRlX0RldmljZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovVXNlcnMvSm9uZXNfWmhvbmcvRGVza3RvcC9WdWUlRTUlQjAlODglRTYlQTElODgvdml0ZS91ZGkuQWxsX1NpdGVfRGV2aWNlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnO1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcyc7XG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cyc7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZURldlRvb2xzKCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbJ3Z1ZScsICd2dWUtcm91dGVyJywgJ3Z1ZS1pMThuJ10sXG4gICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmpzJ1xuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgLy8gXHU1RjlFIGAuL3NyYy9jb21wb25lbnRzL2AgXHU4REVGXHU1RjkxXHU2N0U1XHU2MjdFXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZSddLFxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS9dLFxuICAgICAgZHRzOiAnc3JjL2F1dG8tY29tcG9uZW50cy5qcydcbiAgICB9KSxcbiAgICBQYWdlcygpLFxuICAgIExheW91dHMoKSxcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2Fzc2V0cy9zdmcnKV0sXG4gICAgICBzeW1ib2xJZDogJ1tkaXJdL1tuYW1lXSdcbiAgICB9KVxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVksU0FBUyxlQUFlLFdBQVc7QUFFcGEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sV0FBVztBQUNsQixPQUFPLGFBQWE7QUFDcEIsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxVQUFVO0FBVjBOLElBQU0sMkNBQTJDO0FBWTVSLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQSxNQUNULFNBQVMsQ0FBQyxPQUFPLGNBQWMsVUFBVTtBQUFBLE1BQ3pDLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQTtBQUFBLE1BRVQsWUFBWSxDQUFDLEtBQUs7QUFBQSxNQUNsQixTQUFTLENBQUMsVUFBVSxZQUFZO0FBQUEsTUFDaEMsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IscUJBQXFCO0FBQUEsTUFDbkIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztBQUFBLE1BQ3hELFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
