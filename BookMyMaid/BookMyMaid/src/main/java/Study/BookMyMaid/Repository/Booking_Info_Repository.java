package Study.BookMyMaid.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Study.BookMyMaid.Entity.booking_info;
import Study.BookMyMaid.Entity.maid;
import Study.BookMyMaid.Entity.user;

@Repository
public interface Booking_Info_Repository extends JpaRepository<booking_info, Integer> {

//	@Query("select u from booking_info u where u.Userbooking.userId=?1")
//	public List<booking_info> findByUser_id(int userId);

	public List<booking_info> findByUserId(user userId);
	
	public List<booking_info> findByMaidId(maid maidId);

}
