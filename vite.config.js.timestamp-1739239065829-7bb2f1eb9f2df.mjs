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
import { ElementPlusResolver } from "file:///D:/Users/Jones_Zhong/Desktop/Vue%E5%B0%88%E6%A1%88/vite/udi.All_Site_Device/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///D:/Users/Jones_Zhong/Desktop/Vue%E5%B0%88%E6%A1%88/vite/udi.All_Site_Device/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n"],
      dts: "src/auto-imports.js",
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      // 從 `./src/components/` 路徑查找
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/auto-components.js",
      resolvers: [ElementPlusResolver()]
    }),
    Pages(),
    Layouts(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      symbolId: "[dir]/[name]"
    })
  ],
  base: process.env.NODE_ENV === "production" ? "./" : "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxVc2Vyc1xcXFxKb25lc19aaG9uZ1xcXFxEZXNrdG9wXFxcXFZ1ZVx1NUMwOFx1Njg0OFxcXFx2aXRlXFxcXHVkaS5BbGxfU2l0ZV9EZXZpY2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFVzZXJzXFxcXEpvbmVzX1pob25nXFxcXERlc2t0b3BcXFxcVnVlXHU1QzA4XHU2ODQ4XFxcXHZpdGVcXFxcdWRpLkFsbF9TaXRlX0RldmljZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovVXNlcnMvSm9uZXNfWmhvbmcvRGVza3RvcC9WdWUlRTUlQjAlODglRTYlQTElODgvdml0ZS91ZGkuQWxsX1NpdGVfRGV2aWNlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnO1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcyc7XG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cyc7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdnVlRGV2VG9vbHMoKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInLCAndnVlLWkxOG4nXSxcbiAgICAgIGR0czogJ3NyYy9hdXRvLWltcG9ydHMuanMnLFxuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXVxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgLy8gXHU1RjlFIGAuL3NyYy9jb21wb25lbnRzL2AgXHU4REVGXHU1RjkxXHU2N0U1XHU2MjdFXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZSddLFxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS9dLFxuICAgICAgZHRzOiAnc3JjL2F1dG8tY29tcG9uZW50cy5qcycsXG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXG4gICAgfSksXG4gICAgUGFnZXMoKSxcbiAgICBMYXlvdXRzKCksXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMvc3ZnJyldLFxuICAgICAgc3ltYm9sSWQ6ICdbZGlyXS9bbmFtZV0nXG4gICAgfSlcbiAgXSxcbiAgYmFzZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICcuLycgOiAnLycsXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpWSxTQUFTLGVBQWUsV0FBVztBQUVwYSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sYUFBYTtBQUNwQixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFVBQVU7QUFDakIsU0FBUywyQkFBMkI7QUFYdU0sSUFBTSwyQ0FBMkM7QUFhNVIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osWUFBWTtBQUFBLElBQ1osV0FBVztBQUFBLE1BQ1QsU0FBUyxDQUFDLE9BQU8sY0FBYyxVQUFVO0FBQUEsTUFDekMsS0FBSztBQUFBLE1BQ0wsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBO0FBQUEsTUFFVCxZQUFZLENBQUMsS0FBSztBQUFBLE1BQ2xCLFNBQVMsQ0FBQyxVQUFVLFlBQVk7QUFBQSxNQUNoQyxLQUFLO0FBQUEsTUFDTCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixxQkFBcUI7QUFBQSxNQUNuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGdCQUFnQixDQUFDO0FBQUEsTUFDeEQsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE1BQU0sUUFBUSxJQUFJLGFBQWEsZUFBZSxPQUFPO0FBQUEsRUFDckQsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
