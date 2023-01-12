import {useEffect, useState} from "react";
import {Item} from "../models/Item";
import itemService from "../services/itemService";
import ItemRow from "./ItemRow";

function ItemsTable(): JSX.Element {
  const [items, setItems] = useState<Item[]>([]);

  async function loadItems(): Promise<void> {
    const response = await itemService.getAll();
    setItems(response);
  }

  useEffect(() => {
    void loadItems();
  }, []);

  function ItemRows(): JSX.Element {
    return <>{items.map(item => <ItemRow key={`item-${item.id}`} item={item}/>)}</>;
  }

  return (
    <table className="table mb-0">
      <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col">Status</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <ItemRows/>
      </tbody>
    </table>
  );
}

export default ItemsTable;
