package Study.BookMyMaid.Repository;

import java.sql.Blob;
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
	@Query(value = "update user c set c.userUsername=?1 , c.userFamilyMembers=?2, c.userRooms=?3 ,c.userMobileNo=?4, c.userEmailId=?5,c.userAddress=?6, c.userCity=?7, c.userPincode=?8 ,c.userImages=?9 where c.userId=?10")
	public user checkLoginUser(int userId, String userUsername, int userFamilyMembers, int userRooms,
			String userMobileNo, String userEmailId, String userAddress, String userCity, String userPincode,
			Blob userImages);

}