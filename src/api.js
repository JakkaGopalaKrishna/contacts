const SHEET_ID = import.meta.env.VITE_SHEET_ID;

const URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

export async function fetchContacts() {
  try {

    const res = await fetch(URL);

    const text = await res.text();

    // ✅ FIXED PARSER (handles script response)
    const match = text.match(
      /google\.visualization\.Query\.setResponse\(([\s\S]*?)\);/
    );

    if (!match) {
      throw new Error("Invalid Google Sheets response format");
    }

    const json = JSON.parse(match[1]);

    const headers = json.table.cols.map(col => col.label.trim());

    const rows = json.table.rows.map(r =>
      r.c.map(c => (c ? c.v : ""))
    );

    const data = transformData(headers, rows);

    // ✅ Save cache for offline
    localStorage.setItem("contacts_cache", JSON.stringify(data));


    return data;

  } catch (err) {

    // ✅ Offline fallback
    const cached = localStorage.getItem("contacts_cache");

    if (!cached) {
      return {};
    }


    return JSON.parse(cached);
  }
}


// 🔥 Transform Function (Group by Category)
function transformData(headers, rows) {
  const categoryIndex = headers.indexOf("Category");
  const idIndex = headers.indexOf("ID/Symbol");
  const nameIndex = headers.indexOf("Name");
  const phoneIndex = headers.indexOf("Phone");

  const grouped = {};

  rows.forEach(row => {
    const category = row[categoryIndex] || "Unknown";

    const cleanRow = [
      row[idIndex] || "",
      row[nameIndex] || "",
      row[phoneIndex] || ""
    ];

    if (!grouped[category]) grouped[category] = [];

    grouped[category].push(cleanRow);
  });

  return grouped;
}