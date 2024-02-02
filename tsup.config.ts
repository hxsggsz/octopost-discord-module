import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  minify: false,
  sourcemap: false,
  treeshake: true,
  splitting: true,
  clean: true,
  outDir: "dist",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
});
