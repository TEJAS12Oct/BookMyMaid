package Study.BookMyMaid.Repository;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import Study.BookMyMaid.Entity.user;

@Repository
public interface User_Repository extends JpaRepository<user, Integer> {

	@Query("select u from user u where u.userName=?1")
	public List<user> findByUsername(String username);

	@Query("select c from user c where c.userEmailId like %?1 and c.userPassword like %?2")
	public user checkLoginUser(String userEmailId, String userPassword);

	@Modifying
	@Query(value = "update user c set c.userName=?1 ,c.userUsername=?2,c.userPassword=?3 ,c.userFamilyMembers=?4, c.userRooms=?5 ,c.userMobileNo=?6, c.userEmailId=?7,c.userAddress=?8, c.userCity=?9, c.userPincode=?10 where c.userId=?11")
	public user checkLoginUser(int userId, String userName, String userUsername, String userPassword,
			int userFamilyMembers, int userRooms, String userMobileNo, String userEmailId, String userAddress,
			String userCity, String userPincode);

}
