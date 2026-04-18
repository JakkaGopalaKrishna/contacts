import { FiPhone  } from "react-icons/fi";
import { MdMessage } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";


export default function Contacts({ data }) {
  return (
    <div className="contact-section">
      {data.map(([id, name, phone], i) => (
        <div
          key={i}
          className="person"
          style={{
            backgroundColor: i % 2 === 0 ? "#98ebeb" : "rgb(255,199,96)"
          }}
        >
          <div className="Info">
            <div className="RollNumber">{id}</div>
            <div>{name.toUpperCase()}</div>
          </div>

          <div className="Cont">
            <a href={`tel:+91${phone}`}>
              <FiPhone  className="icon phone" />
            </a>

            <a href={`sms:+91${phone}`}>
              <MdMessage className="icon message" />
            </a>

            <a href={`https://wa.me/91${phone}`} target="_blank">
              <FaWhatsapp className="icon whatsapp" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}