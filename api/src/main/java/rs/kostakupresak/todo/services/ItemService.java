package rs.kostakupresak.todo.services;

import rs.kostakupresak.todo.contracts.mappers.ItemMapperContract;
import rs.kostakupresak.todo.contracts.repositories.ItemRepositoryContract;
import rs.kostakupresak.todo.contracts.services.ItemServiceContract;
import rs.kostakupresak.todo.entities.Item;
import rs.kostakupresak.todo.exceptions.ItemNotFoundException;
import rs.kostakupresak.todo.payloads.RequestPayload;
import rs.kostakupresak.todo.payloads.ResponsePayload;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ItemService implements ItemServiceContract {
    private final ItemRepositoryContract itemRepository;
    private final ItemMapperContract itemMapper;

    public ItemService(ItemRepositoryContract itemRepository, ItemMapperContract itemMapper) {
        this.itemRepository = itemRepository;
        this.itemMapper = itemMapper;
    }

    @Override
    public List<ResponsePayload> findAll() {
        return this.itemRepository
                .findAll()
                .stream()
                .map(this.itemMapper::map)
                .collect(Collectors.toList());
    }

    @Override
    public ResponsePayload findById(Integer id) {
        Item foundItem = this.itemRepository.findById(id).orElse(null);

        if (foundItem == null) {
            throw new ItemNotFoundException();
        }

        return this.itemMapper.map(foundItem);
    }

    @Override
    public ResponsePayload add(RequestPayload requestPayload) {
        Item item = this.itemMapper.map(requestPayload);
        Item savedItem = this.itemRepository.save(item);

        return this.itemMapper.map(savedItem);
    }

    @Override
    public ResponsePayload toggle(Integer id) {
        Item item = this.itemRepository.findById(id).orElse(null);

        if (item == null) {
            throw new ItemNotFoundException();
        }

        item.setIsToggled(!item.getIsToggled());
        Item toggledItem = this.itemRepository.save(item);

        return this.itemMapper.map(toggledItem);
    }

    @Override
    public ResponsePayload delete(Integer id) {
        Item item = this.itemRepository.findById(id).orElse(null);

        if (item == null) {
            throw new ItemNotFoundException();
        }

        this.itemRepository.delete(item);

        return this.itemMapper.map(item);
    }
}
