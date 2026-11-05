#!/usr/bin/env node
/**
 * Minimal static server for the `next build` output in ./out.
 * Used by `npm run preview` because `next start` does not support
 * `output: "export"`.
 */
import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(process.cwd(), "out");
const port = Number(process.env.PORT ?? 3000);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

async function resolveFile(urlPath) {
  const clean = normalize(decodeURIComponent(urlPath.split("?")[0]));
  let target = join(root, clean);

  if (!target.startsWith(root)) return null;

  try {
    const info = await stat(target);
    if (info.isDirectory()) {
      target = join(target, "index.html");
      const index = await stat(target);
      if (index.isFile()) return target;
    } else {
      return target;
    }
  } catch {
    // fall through to .html / index.html lookups
  }

  const candidates = [`${target}.html`, join(target, "index.html")];

  for (const candidate of candidates) {
    try {
      const info = await stat(candidate);
      if (info.isFile()) return candidate;
    } catch {
      // keep looking
    }
  }

  return null;
}

createServer(async (req, res) => {
  const file = await resolveFile(req.url ?? "/");

  if (!file) {
    try {
      const notFound = await readFile(join(root, "404.html"));
      res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
      res.end(notFound);
      return;
    } catch {
      res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
      res.end("<h1>404 — Not found</h1>");
      return;
    }
  }

  res.writeHead(200, {
    "content-type": mimeTypes[extname(file)] ?? "application/octet-stream",
    "cache-control": "no-cache",
  });
  createReadStream(file).pipe(res);
}).listen(port, () => {
  console.log(`Preview running at http://localhost:${port}`);
});
