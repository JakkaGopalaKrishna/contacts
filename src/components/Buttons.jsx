export default function Buttons({ categories, onSelect, active }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "5px" }}>
      <select
        className="Buttons"
        value={active}
        onChange={(e) => onSelect(e.target.value)}
        aria-label="Select contact category"
      >
        <option value="" disabled>
          Select a category
        </option>
        {categories.map((categorie) => (
          <option key={categorie} value={categorie}>
            {categorie}
          </option>
        ))}
      </select>
      <button className="Buttons" onClick={() =>
        window.open(
          "https://forms.gle/PRQnZSP8w7AygTbM6",
          "_blank",
          "noopener,noreferrer"
        )
      }>Add Contact +</button>
    </div>
  );
}