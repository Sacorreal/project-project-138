#!/usr/bin/env node

import program from "commander";

import download from "../index.js";

program
  .description("some description")
  .version("0.0.1")

  .option("-o --output [dir]", "output dir", process.cwd())
  .arguments("<url>")
  .action((url) => {
    download(url, program.opts().output)
      .then(({ filepath }) => {
        console.log(`Page was successfully downloaded into '${filepath}'`);
      })

      .catch((error) => {
        console.error(error.message);

        process.exit(1);
      });
  });

program.parse(process.argv);
