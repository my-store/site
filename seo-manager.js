const { readFileSync, writeFileSync } = require("fs");

async function readPackageJSON() {
  const publicURL = await readFileSync("./package.json", "utf-8");
  return JSON.parse(publicURL);
}

async function replacePublicURL(data) {
  const { homepage } = await readPackageJSON();
  return data.replace(/%PUBLIC_URL%/g, homepage);
}

async function load() {
  const indexPath = "./public/index.html";
  const data = await readFileSync(indexPath, "utf-8");
  await writeFileSync(indexPath, await replacePublicURL(data), "utf-8");
}

load();
