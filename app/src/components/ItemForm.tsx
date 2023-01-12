import {ChangeEvent, KeyboardEvent, useState} from "react";

import {RequestPayload} from "../models/RequestPayload";
import {Item} from "../models/Item";

import itemService from "../services/itemService";

const DEFAULT_NEW_ITEM: RequestPayload = {text: ''};
const ENTER_KEY: string = 'Enter';

interface ItemFormProps {
  renderItem: (item: Item) => void
}

function ItemForm({renderItem}: ItemFormProps): JSX.Element {
  const [newItem, setNewItem] = useState<RequestPayload>(DEFAULT_NEW_ITEM);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setNewItem(prevState => ({
      ...prevState,
      text: event.target.value
    }));
  }

  async function handleAdd(): Promise<void> {
    const savedItem: Item = await itemService.add(newItem);
    renderItem(savedItem);
    setNewItem(DEFAULT_NEW_ITEM);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key !== ENTER_KEY) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    void handleAdd();
  }

  return (
    <div className="card-footer text-end p-3">
      <div className="row justify-content-start">
        <div className="col-6 col-sm-6 col-md-8 col-lg-10 col-xl-10 col-xxl-10">
          <div className="form-outline">
            <input type="text"
                   id="new-item-input"
                   className="form-control"
                   value={newItem?.text}
                   onChange={handleChange}
                   onKeyDown={handleKeyDown}
            />
            <label className="form-label" htmlFor="new-item-input">What do you want to do?</label>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
          <button className="btn btn-add" onClick={handleAdd}>Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default ItemForm;
