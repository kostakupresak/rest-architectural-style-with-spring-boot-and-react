import {Item} from "../models/Item";

import itemService from "../services/itemService";

interface ItemRowProps {
  item: Item
  rerenderItem: (item: Item) => void
  unrenderItem: (item: Item) => void
}

function ItemRow({item, rerenderItem, unrenderItem}: ItemRowProps): JSX.Element {
  const itemStatusText: string = item.isToggled ? 'Done' : 'Pending';
  const itemStatusClass: string = item.isToggled ? 'badge bg-success' : 'badge bg-warning';

  async function handleDelete(): Promise<void> {
    const deletedItem: Item = await itemService.delete(item.id);
    unrenderItem(deletedItem);
  }

  async function handleToggle(): Promise<void> {
    const updatedItem: Item = await itemService.toggle(item.id);
    rerenderItem(updatedItem);
  }

  function ItemToggleButton(): JSX.Element {
    if (item.isToggled) {
      return (
        <span data-mdb-toggle="tooltip" title="Undo" onClick={handleToggle}>
          <img src="images/undo.png" alt="Undo" className="action-icon"/>
        </span>
      );
    }

    return (
      <span data-mdb-toggle="tooltip" title="Done" onClick={handleToggle}>
        <img src="images/done.png" alt="Done" className="action-icon"/>
      </span>
    );
  }

  return (
    <tr className="fw-normal">
      <td className="align-middle">
        <span>{item.text}</span>
      </td>
      <td className="align-middle">
        <h6 className="mb-0"><span className={itemStatusClass}>{itemStatusText}</span></h6>
      </td>
      <td className="align-middle">
        <ItemToggleButton/>
        <span data-mdb-toggle="tooltip" title="Remove" onClick={handleDelete}>
          <img src="images/delete.png" alt="Delete" className="action-icon"/>
        </span>
      </td>
    </tr>
  );
}

export default ItemRow;
