import ListItem from "./ListItem";


const ListPassenger = (props) => {
  return (
    <div>
      <table className="listPassenger">
        {props.data?.map((item) => (
          <ListItem
            key={item.id}
            data={item}
            hapusPengunjung={props.hapusPengunjung}
          />
        ))}
      </table>
    </div>
  );
};
export default ListPassenger;
