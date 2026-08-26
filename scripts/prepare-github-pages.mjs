import { cp, mkdir, readdir } from "node:fs/promises";
import { basename, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const outputDirectory = fileURLToPath(new URL("../out/", import.meta.url));
const excludedRouteFiles = new Set(["index.html", "404.html", "_not-found.html"]);

async function findRouteHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = join(directory, entry.name);

      if (entry.isDirectory()) {
        return entry.name === "_next" ? [] : findRouteHtmlFiles(entryPath);
      }

      return entry.isFile() && entry.name.endsWith(".html")
        ? [entryPath]
        : [];
    }),
  );

  return files.flat();
}

const routeHtmlFiles = (await findRouteHtmlFiles(outputDirectory)).filter(
  (filePath) => !excludedRouteFiles.has(basename(filePath)),
);

await Promise.all(
  routeHtmlFiles.map(async (filePath) => {
    const routePath = relative(outputDirectory, filePath).replace(/\.html$/, "");
    const routeDirectory = join(outputDirectory, routePath);

    await mkdir(routeDirectory, { recursive: true });
    await cp(filePath, join(routeDirectory, "index.html"));
  }),
);

console.log(`Prepared ${routeHtmlFiles.length} GitHub Pages clean-route index files.`);
