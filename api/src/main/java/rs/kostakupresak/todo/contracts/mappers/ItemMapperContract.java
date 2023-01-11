package rs.kostakupresak.todo.contracts.mappers;

import rs.kostakupresak.todo.entities.Item;
import rs.kostakupresak.todo.payloads.RequestPayload;
import rs.kostakupresak.todo.payloads.ResponsePayload;

public interface ItemMapperContract {
    ResponsePayload map(Item item);

    Item map(RequestPayload requestPayload);
}
