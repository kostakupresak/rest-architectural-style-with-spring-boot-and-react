import Header from "./Header";
import ItemsTable from "./ItemsTable";

function Card(): JSX.Element {
  return (
    <div className="card card-gradient">
      <div className="card-body p-4">
        <Header/>
        <ItemsTable/>
      </div>
    </div>
  );
}

export default Card;
