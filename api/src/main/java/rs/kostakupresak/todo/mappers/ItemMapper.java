package rs.kostakupresak.todo.mappers;

import rs.kostakupresak.todo.contracts.mappers.ItemMapperContract;
import rs.kostakupresak.todo.entities.Item;
import rs.kostakupresak.todo.payloads.RequestPayload;
import rs.kostakupresak.todo.payloads.ResponsePayload;

import org.springframework.stereotype.Component;

@Component
public class ItemMapper implements ItemMapperContract {
    public ResponsePayload map(Item item) {
        return new ResponsePayload(item.getId(), item.getText(), item.getIsToggled());
    }

    public Item map(RequestPayload requestPayload) {
        return new Item(null, requestPayload.getText(), false);
    }
}
