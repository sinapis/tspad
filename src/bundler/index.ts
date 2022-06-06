import * as esbuild from "esbuild-wasm";
import { fetchPlugin } from "../plugins/fetch-plugin";
import { unpkPathPlugin } from "../plugins/unpk-path-plugin";

let initialized = false;

export default async (code: string) => {
  if (!initialized) {
    await esbuild.initialize({
      worker: true,
      wasmURL: "https://www.unpkg.com/esbuild-wasm/esbuild.wasm",
    });

    initialized = true;
  }

  const result = await esbuild.build({
    entryPoints: ["index.js"],
    bundle: true,
    write: false,
    plugins: [unpkPathPlugin(), fetchPlugin(code)],
    define: {
      global: "windows",
    },
  });

  return result.outputFiles[0].text;
};
