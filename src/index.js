#!/usr/bin/env node
/*  
    max-ts-bundler
    version 1.0.0
    by Rayce Stipanovich

    Usage:  enabvles the bundleing and watching of TypeScript/ES2022+ code
            down to es5 JavaScript code with polyfills for most things for the
            JavaScript enviornment in max/msp
*/
const program = require("commander");
const logo = require("./logo");
const logger = require("./logger");
const { builder } = require("./builder");
const { watcher } = require("./watcher");

//setup the cli interface
program.name("ts-4-max-bundler").configureOutput({
  writeOut: (str) => logger.logStd(str),
  writeErr: (str) => logger.logError(str),
});

// Add the commands
program
  .command("build")
  .alias("b")
  .description("Build and bundle a [js] or [jsui] script from a TypeScript project.")
  .action(async () => await builder());

program
  .command("watch")
  .alias("w")
  .description(
    "Watch a project and bundle a [js] or [jsui] script from a TypeScript project, whener a source file changes. (Use with 'autowatch=1' in your script)"
  )
  .action(async () => await watcher());

//parse the cli
const main = async () => {
  // start things up
  logo.showLogo();

  //show version
  logger.logStd(`Starting ts-4-live version: 0.2.0...`);

  // allow commander to parse `process.argv`
  program.parse(process.argv);
};

main().finally(() => logger.logStd("Cosing: Byeeeeeeeeeeee..."));
