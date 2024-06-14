import {useState } from "react";
import "../../Pages/RegisterEvent/RegisterEvent.css";

function PassengerInput(props) {
  const [state, setState] = useState({
    firstname: "",
    lastname:"",
    age: "",
    gender: "Male",
    country: "",
    mail: "",
    event: "",
  });
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    if (state.firstname.trim() && state.lastname && state.age && state.gender && state.country && state.mail && state.event) {
      const age = state.age;
      if (age >= 65 || age <= 17) {
        alert("age tidak sesuai");
      } else {
        const newData = {
          firstname: state.firstname,
          lastname: state.lastname,
          age: state.age,
          gender: state.gender,
          country: state.country,
          mail: state.mail,
          event: state.event
        };
        props.tambahPengunjung(newData);
        setState({
          ...state,
          firstname: "",
          lastname:"",
          age: "",
          gender: "Male",
          country: "",
          mail: "",
          event: ""
        });
      }
    } else {
      alert("Isi Data");
    }
  };

  return (
    <div>
      <div onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="First Name..."
          value={state.firstname}
          name="firstname"
          onChange={onChange}
        />
        <input
          type="text"
          className="input-text"
          placeholder="Last Name..."
          value={state.lastname}
          name="lastname"
          onChange={onChange}
        />
        <input
          type="number"
          className="input-text"
          placeholder="Age..."
          value={state.age}
          name="age"
          onChange={onChange}
        />
        <select onChange={onChange} name="gender" className="event-select">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          className="input-text"
          placeholder="Country..."
          value={state.country}
          name="country"
          onChange={onChange}
        />
        <input
          type="text"
          className="input-text"
          placeholder="Mail..."
          value={state.mail}
          name="mail"
          onChange={onChange}
        />
        <select onChange={onChange} name="event" className="event-select" required>
          <option disabled selected value>Event</option>
          <option value="Prambanan JAZZ">Prambanan JAZZ</option>
          <option value="Lampion Waisak Nasional 2022">Lampion Waisak Nasional 2022</option>
          <option value="Bakpia Teras Malioboro">Bakpia Teras Malioboro</option>
          <option value="East Java Fashion Harmony">East Java Fashion Harmony</option>
          <option value="International Indonesia Seafood and Meat">International Indonesia Seafood and Meat</option>
          <option value="Wayang Jogja Night Carnival">Wayang Jogja Night Carnival</option>
        </select>
        <p></p>
        <button onClick={handleSubmit} className="buttonInput">Submit</button>
      </div>
    </div>
  );
}
export default PassengerInput;
