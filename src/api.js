const SHEET_ID = import.meta.env.VITE_SHEET_ID;

const URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

export async function fetchContacts() {
  const res = await fetch(URL);
  const text = await res.text();

  const json = JSON.parse(text.substring(47).slice(0, -2));

  const headers = json.table.cols.map(col => col.label.trim());
  const rows = json.table.rows.map(r =>
    r.c.map(c => (c ? c.v : ""))
  );

  return transformData(headers, rows);
}

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