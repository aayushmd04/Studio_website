export type SheetRow = Record<string, string | number>;

/**
 * Fetches a Google Sheet published or shared publicly using the gviz endpoint and returns an array of objects.
 * Usage: publish your sheet (File → Share → Anyone with the link) or Publish to web, then pass the sheetId and optional sheet name.
 * Expected first row to be header names (will be used as object keys).
 */
export default async function fetchGoogleSheet(sheetId: string, sheetName = "Sheet1"): Promise<SheetRow[]> {
  if (!sheetId) return [];

  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(
    sheetName,
  )}`;

  // Debug logs to help locate the network request in the browser console
  try {
    // eslint-disable-next-line no-console
    console.log("[fetchGoogleSheet] fetching gviz URL:", url);
  } catch (e) {
    // noop when running outside browser env
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch sheet: ${res.status}`);

  const text = await res.text();

  // Try to extract the JSON payload from the google.visualization wrapper robustly
  let data: any = null;
  try {
    const wrapperMatch = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*?)\);?/);
    if (wrapperMatch && wrapperMatch[1]) {
      data = JSON.parse(wrapperMatch[1]);
    } else {
      // Fallback: slice from first { to last } — this handles variants of the wrapper
      const first = text.indexOf("{");
      const last = text.lastIndexOf("}");
      if (first !== -1 && last !== -1 && last > first) {
        const possible = text.slice(first, last + 1);
        data = JSON.parse(possible);
      } else {
        throw new Error("Unable to locate JSON payload in gviz response");
      }
    }
  } catch (err) {
    // Log the raw response for easier debugging in the browser console
    try {
      // eslint-disable-next-line no-console
      console.error("[fetchGoogleSheet] failed to parse gviz response, raw text:", text.slice(0, 400));
    } catch (e) {
      // noop
    }
    throw err;
  }

  const table = data.table;
  const cols = table.cols.map((c: any) => (c.label || c.id || "").toString());
  const rows = table.rows.map((r: any) => {
    const obj: Record<string, string | number> = {};
    r.c.forEach((cell: any, i: number) => {
      const key = cols[i] || `col_${i}`;
      if (!cell || cell.v === null || cell.v === undefined) {
        obj[key] = "";
      } else {
        obj[key] = cell.v;
      }
    });
    return obj;
  });

  try {
    // eslint-disable-next-line no-console
    console.log("[fetchGoogleSheet] parsed rows:", rows);
  } catch (e) {
    // noop
  }

  return rows;
}
