import resolve from "@rollup/plugin-node-resolve";
import pkg from "../package.json";

export default [
  // browser-friendly UMD build
  {
    input: "dist/es5/index.js",
    output: {
      name: "widl",
      file: pkg.browser,
      format: "umd",
      sourcemap: true,
    },
    plugins: [
      resolve(),
    ],
  },
];
