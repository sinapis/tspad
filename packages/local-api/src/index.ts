import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import path from "path";
import { createCellsRouter } from "./routes/cell";

export const serve = (
  port: number,
  filename: string,
  dir: string,
  useProxy: boolean
) => {
  const app = express();

  app.use(createCellsRouter(filename, dir));

  if (useProxy) {
    app.use(
      createProxyMiddleware({
        target: "http://localhost:3000",
        ws: true,
        logLevel: "silent",
      })
    );
  } else {
    // using runtime require to avoid warning from esbuild bundling process
    const runtimeRequire = eval("require");
    // express does not work with symlinked directories. this is the reason we resolve the path to a file and then take the directory
    const packagePath = runtimeRequire.resolve(
      "@tspad/local-client/dist/index.html"
    );
    app.use(express.static(path.dirname(packagePath)));
  }

  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on("error", reject);
  });
};
