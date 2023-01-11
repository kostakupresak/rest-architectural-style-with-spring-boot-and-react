package rs.kostakupresak.todo.contracts.repositories;

import rs.kostakupresak.todo.entities.Item;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepositoryContract extends JpaRepository<Item, Integer> {
}
