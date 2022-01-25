#! /usr/bin/env node
import chalk from "chalk";
import welcome from "cli-welcome";
import sym from "log-symbols";
// import * as fs from "fs";
// const pkgJSON = JSON.parse(fs.readFileSync("./package.json"));

import { readFile } from "fs/promises";
const pkgJSON = JSON.parse(
  await readFile(new URL("./package.json", import.meta.url))
);

//variables
const log = console.log;
const githubClr = chalk.hex(`#f5f5f5`).bold.inverse;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const mailClr = chalk.hex(`#FF69B4`).bold.inverse;
const nameClr = chalk.hex(`#FADC00`).bold;
const infoClr = chalk.hex("#FFA500");
const successClr = chalk.green;
const links = chalk.italic.bgGray;

welcome({
  title: pkgJSON.name,
  tagLine: `Hey, how's life?`,
  version: pkgJSON.version,
  description: pkgJSON.description,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

log(`
${nameClr(`- SIYA BANODHA -`)}

${chalk.dim(`IT'24 • You can always find me reading books when I'm not getting my laptop burnt with an infinite while loop | ABVIIT Gwalior
mern | currently doing dsa + trying open source♫`)}

${githubClr(` Github `)}   - ${links(`https://github.com/sia162`)}
${twitterClr(` Twitter `)}  - ${links(`https://twitter.com/hexcodesiya`)}
${mailClr(` Mail `)}     - ${links(`siyabanodha@gmail.com`)}`);

console.log(`
${sym.success} ${successClr(` SUCCESS `)}: Thanks for checking out my CLI!);
${sym.info} ${infoClr(` INFO `)}: I'm working on more CLIs. Drop a follow!
`);
