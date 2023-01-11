package rs.kostakupresak.todo.contracts.services;

import rs.kostakupresak.todo.payloads.RequestPayload;
import rs.kostakupresak.todo.payloads.ResponsePayload;

import java.util.List;

public interface ItemServiceContract {
    List<ResponsePayload> findAll();

    ResponsePayload findById(Integer id);

    ResponsePayload add(RequestPayload requestPayload);

    ResponsePayload toggle(Integer id);

    ResponsePayload delete(Integer id);
}
