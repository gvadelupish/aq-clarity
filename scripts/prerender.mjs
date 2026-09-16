import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

const routes = ["/", "/about", "/book", "/privacy-policy"];

const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");
const { render } = await import(url.pathToFileURL(path.join(dist, "server", "entry-server.js")).href);

for (const route of routes) {
  const { html, head } = render(route);

  let page = template.replace("<!--app-html-->", html);

  if (head) {
    // Drop static head tags that the page's own metadata replaces.
    page = page.replace(/\n\s*<title>[\s\S]*?<\/title>/, "");
    page = page.replace(/\n\s*<meta name="description"[\s\S]*?\/>/, "");
    page = page.replace(/\n\s*<link rel="canonical"[\s\S]*?\/>/, "");
    page = page.replace(/\n\s*<meta property="og:title"[\s\S]*?\/>/, "");
    page = page.replace(/\n\s*<meta property="og:description"[\s\S]*?\/>/, "");
    page = page.replace(/\n\s*<meta property="og:url"[\s\S]*?\/>/, "");
    page = page.replace(/\n\s*<meta property="og:type"[\s\S]*?\/>/, "");
    page = page.replace(/\n\s*<meta name="twitter:card"[\s\S]*?\/>/, "");
    page = page.replace(/\n\s*<meta name="twitter:title"[\s\S]*?\/>/, "");
    page = page.replace(/\n\s*<meta name="twitter:description"[\s\S]*?\/>/, "");
    page = page.replace("</head>", `  ${head}\n  </head>`);
  }

  const outDir = route === "/" ? dist : path.join(dist, route.slice(1));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), page);
  console.log(`prerendered ${route}`);
}

fs.rmSync(path.join(dist, "server"), { recursive: true, force: true });
