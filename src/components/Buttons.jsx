export default function Buttons({ categories, onSelect, active }) {
  return (
    <div className="listOfButtons">
      {categories.map(categorie => (
        <div
          key={categorie}
          className="Buttons"
          style={{
            backgroundColor: active === categorie ? "red" : "#04f076",
            color: active === categorie ? "white" : "rgb(43,106,173)"
          }}
          onClick={() => onSelect(categorie)}
        >
          {categorie}
        </div>
      ))}
    </div>
  );
}