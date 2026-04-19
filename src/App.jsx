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
    } else {
      alert("❌ Wrong Password");
    }
  };

  const filtered =
    data[active]?.filter(item =>
      item.join(" ").toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <>
      <Buttons
        categories={Object.keys(data)}
        active={active}
        onSelect={handleSelect}
      />

      {active && (
        <>
          {/* <Contacts data={filtered} /> */}
          <div className="searchBox">
            <IoIosSearch className="searchIcon" />
            <input placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="Search_contact_data" 
              id="searchInput"
            />
          </div>
          {/* <input
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="Search_contact_data" id="searchInput"
          /> */}
          <Contacts data={filtered} />
        </>
      )}
    </>
  );
}

export default App;