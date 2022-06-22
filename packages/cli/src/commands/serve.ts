import path from "path";
import { Command } from "commander";
import { serve } from "@ts-note/local-api";

const isProduction = process.env.NODE_ENV === "production";

export const serveCommand = new Command()
  .command("serve [filename]")
  .description("Open a file for editing")
  .option("-p, --port <number>", "Port to run server on", "4005")
  .action(async (filename = "notebook.js", options: { port: string }) => {
    const port = parseInt(options.port);
    const dir = path.join(process.cwd(), path.dirname(filename));
    try {
      await serve(port, path.basename(filename), dir, !isProduction);
      console.log(
        `Opened ${filename}. Navigate to http://localhost:${options.port} to edit the file.`
      );
    } catch (err: any) {
      if ("code" in err && err.code === "EADDRINUSE") {
        console.log(
          `Port ${port} is already in use. Try using a different port.`
        );
      } else {
        console.error("An error has occurred:", (err as Error).message);
      }
      process.exit(1);
    }
  });
