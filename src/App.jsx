import { useEffect, useState } from "react";
import { fetchContacts } from "./api";
import Buttons from "./components/Buttons";
import Contacts from "./components/Contacts";
import { IoIosSearch } from "react-icons/io";

function App() {
  const [data, setData] = useState({});
  const [active, setActive] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchContacts().then(res => {
      setData(res);
    });
  }, []);

  const handleSelect = (category) => {
    const input = prompt(`Enter password for ${category}`, ' ');
    if (input === '') {
      setActive(category);
      setSearch("")
    } else {
      alert("❌ Wrong Password");
    }
  };

  const filtered =
    data[active]?.filter(item =>
      item.join(" ").toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <div className="app-shell">
      <Buttons
        categories={Object.keys(data)}
        active={active}
        onSelect={handleSelect}
      />

      {active && (
        <>
          <div className="searchBox">
            <IoIosSearch className="searchIcon" />
            <input placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="Search_contact_data"
              id="searchInput"
            />
          </div>
          <Contacts data={filtered} />
        </>
      )}

      <footer className="site-footer">
        <p>JGK © 2026 Contact Manager</p>
        <a 
          style={{fontSize:"10px"}} 
          href="https://docs.google.com/spreadsheets/d/1UTHNIOHsOLwXO0gtwHSaoM-u3Ga2VV0ejHwTXW66-f0"
          target="blank"
        >_data</a>
      </footer>
    </div>
  );
}

export default App;