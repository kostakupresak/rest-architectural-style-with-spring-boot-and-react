package rs.kostakupresak.todo.payloads;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ResponsePayload {
    private Integer id;
    private String text;
    private Boolean isToggled;
}
