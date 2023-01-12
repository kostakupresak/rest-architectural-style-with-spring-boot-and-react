import ItemRow from "./ItemRow";
import {Item} from "../models/Item";

interface ItemsTableProps {
  items: Item[]
  rerenderItem: (item: Item) => void
  unrenderItem: (item: Item) => void
}

function ItemsTable({items, rerenderItem, unrenderItem}: ItemsTableProps): JSX.Element {
  function ItemRows(): JSX.Element {
    return (
      <>
        {
          items.map(item =>
            <ItemRow key={`item-${item.id}`} item={item} rerenderItem={rerenderItem} unrenderItem={unrenderItem}/>)
        }
      </>
    );
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
