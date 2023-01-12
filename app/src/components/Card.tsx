import {useEffect, useState} from "react";

import Header from "./Header";
import ItemsTable from "./ItemsTable";
import ItemForm from "./ItemForm";
import {Item} from "../models/Item";

import itemService from "../services/itemService";

function Card(): JSX.Element {
  const [items, setItems] = useState<Item[]>([]);

  async function loadItems(): Promise<void> {
    const items: Item[] = await itemService.getAll();
    setItems(items);
  }

  useEffect(() => {
    void loadItems();
  }, []);

  function renderItem(item: Item): void {
    const updatedItems: Item[] = [...items, item];
    setItems(updatedItems);
  }

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

  return (
    <div className="card card-gradient">
      <div className="card-body p-4">
        <Header/>
        <ItemsTable items={items} rerenderItem={rerenderItem} unrenderItem={unrenderItem}/>
      </div>
      <ItemForm renderItem={renderItem}/>
    </div>
  );
}

export default Card;
