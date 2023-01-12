import {Item} from "../models/Item";

interface ItemRowProps {
  item: Item
}

function ItemRow({item}: ItemRowProps): JSX.Element {
  const itemStatusText: string = item.isToggled ? 'Done' : 'Pending';
  const itemStatusClass: string = item.isToggled ? 'badge bg-success' : 'badge bg-warning';

  function ItemToggleButton(): JSX.Element {
    if (item.isToggled) {
      return (
        <span data-mdb-toggle="tooltip" title="Undo">
          <img src="images/undo.png" alt="Undo" className="action-icon"/>
        </span>
      );
    }

    return (
      <span data-mdb-toggle="tooltip" title="Done">
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
        <span data-mdb-toggle="tooltip" title="Remove">
          <img src="images/delete.png" alt="Delete" className="action-icon"/>
        </span>
      </td>
    </tr>
  );
}

export default ItemRow;
