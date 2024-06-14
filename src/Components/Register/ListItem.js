import "../../Pages/RegisterEvent/RegisterEvent.css";


const ListItem = (props) => {
  const { id, firstname, lastname, age, gender, country, mail, event } = props.data;

  return (
      <tbody>
      <tr>
        <td className="list">{firstname}</td>
        <td className="list">{lastname}</td>
        <td className="list">{age}</td>
        <td className="list">{gender}</td>
        <td className="list">{country}</td>
        <td className="list">{mail}</td>
        <td className="list">{event}</td>
        <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}
        >
          <button className="Inputbtn">Hapus</button>
        </td>
      </tr>
    </tbody>
  );
};
export default ListItem;
