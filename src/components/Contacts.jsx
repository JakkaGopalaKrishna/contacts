import { FiPhone } from "react-icons/fi";
import { MdMessage } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

// const colors1 = [
//   "rgba(0, 212, 255, 0.08)",
//   "rgba(0, 212, 255, 0.15)",
//   "rgba(0, 150, 255, 0.12)",
//   "rgba(0, 255, 200, 0.10)",
//   "rgba(0, 180, 255, 0.18)",
//   "rgba(0, 255, 255, 0.12)"
// ];
// const colors = [
//   "red",
//   "green",
//   "blue",
//   "yellow",
//   "pink",
//   "brown"
// ];
// const gradients = [
//   "linear-gradient(135deg, rgba(0,212,255,0.08), rgba(0,78,146,0.25))",
//   "linear-gradient(135deg, rgba(0,150,255,0.12), rgba(0,78,146,0.3))",
//   "linear-gradient(135deg, rgba(0,255,200,0.10), rgba(0,78,146,0.28))",
//   "linear-gradient(135deg, rgba(0,180,255,0.15), rgba(0,78,146,0.35))",
//   "linear-gradient(135deg, rgba(0,255,255,0.12), rgba(0,78,146,0.3))"
// ];
export default function Contacts({ data }) {
  return (
    <div className="contact-section">
      {data.map(([id, name, phone], i) => (
        <div
          key={i}
          className="person"
          style={{
            // backgroundColor: i % 2 === 0 ? "#1a0000" : "#001a00"
            // backgroundColor: i % 2 === 0 ? "#003300" : "#004e92"
            // backgroundColor: i % 2 === 0 ? "#003300" : "#1a0000"
            // backgroundColor: i % 2 === 0 ? "#003300" : "#1a0000"
            // backgroundColor: i % 2 === 0 ? "#004e92" : "#6d0d9aff"
            // backgroundColor: i % 2 === 0 ? "#004e92" : "#f0f0f0"
            // backgroundColor: i % 2 === 0 ? "#004080" : "#003d66"
            // backgroundColor: colors[i % colors.length]
            // background: gradients[i % gradients.length]   
            // background:"white"      
              background:"black"      
          }}
        >
          <div className="Info">
            <div className="RollNumber">{id}</div>
            <div>{name.toUpperCase()}</div>
          </div>

          <div className="Cont">
            <a href={`tel:+91${phone}`}>
              <FiPhone className="icon phone" />
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