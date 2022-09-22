package Study.BookMyMaid.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Study.BookMyMaid.Entity.maid_review;

@Repository
public interface Maid_Review_Repository extends JpaRepository<maid_review, Integer> {

}

