import {useEffect, useState} from "react";

import {Item} from "../models/Item";
import ItemRow from "./ItemRow";

import itemService from "../services/itemService";

function ItemsTable(): JSX.Element {
  const [items, setItems] = useState<Item[]>([]);

  async function loadItems(): Promise<void> {
    const items: Item[] = await itemService.getAll();
    setItems(items);
  }

  useEffect(() => {
    void loadItems();
  }, []);

  function rerenderItem(item: Item): void {
    const foundIndex: number = items.findIndex(i => i.id === item.id);

    if (foundIndex < 0) {
      return;
    }

    const updatedItems: Item[] = [...items];
    updatedItems[foundIndex] = item;
    setItems(updatedItems);
  }

  function unrenderItem(item: Item): void {
    const updatedItems: Item[] = items.filter(i => i.id !== item.id);
    setItems(updatedItems);
  }

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
