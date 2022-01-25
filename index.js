#! /usr/bin/env node

const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");

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

console.log(`
SIYA BANODHA

IT'24 • You can always find me reading books when I'm not getting my laptop burnt with an infinite while loop | ABVIIT Gwalior
mern | currently doing dsa + trying open source♫

😎 github   - https://github.com/sia162
🤗 twitter  - https://twitter.com/hexcodesiya
📧 mail     - siyabanodha@gmail.com`);
