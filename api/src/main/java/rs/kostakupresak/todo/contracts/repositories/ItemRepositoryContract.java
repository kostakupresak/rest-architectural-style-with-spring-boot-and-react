package rs.kostakupresak.todo.contracts.repositories;

import rs.kostakupresak.todo.entities.Item;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepositoryContract extends JpaRepository<Item, Integer> {
    public List<Item> findAllByOrderByIdAsc();
}
