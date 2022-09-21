package Study.BookMyMaid.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Study.BookMyMaid.Entity.services;

@Repository
public interface Services_Repository extends JpaRepository<services, Integer> {
	
	public services findByServicesName(String serviceName);
}
