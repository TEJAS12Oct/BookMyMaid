package Study.BookMyMaid.Repository;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import Study.BookMyMaid.Entity.maid;
import Study.BookMyMaid.Entity.services;

@Repository
public interface Maid_Repository extends JpaRepository<maid, Integer> {

	@Query("select u from maid u where u.maidName=?1")
	public List<maid> findByMaidname(String maidname);

	@Query("select c from maid c where c.maidEmailId like %?1 and c.maidPassword like %?2")
	public maid checkLoginMaid(String maidEmailId, String maidPassword);

	@Modifying
	@Query(value = "update maid c set c.maidUsername=?1 , c.maidAge=?2, c.maidMobileNo=?3 ,c.maidEmailId=?4, c.maidAddress=?5,c.maidCity=?6, c.maidPincode=?7  where c.maidId=?8")
	public maid checkLoginmaiid(int maidId, String maidUsername, int maidAge, String maidMobileNo, String maidEmailId,
			String maidAddress, String maidCity, String maidPincode);

	// @Query("select u from maid u where u.services =?1")
	public List<maid> findByServicesId(services service);

	@Modifying
	@Query(value = "update maid c set c.maidName=?1,c.maidUsername=?2 , c.maidPassword=?3, c.maidAge=?4, c.maidMobileNo=?5 ,c.maidEmailId=?6, c.maidAddress=?7,c.maidCity=?8, c.maidPincode=?9,c.maidAdharCard=?10,c.maidPoliceVerificationCertificate=?11,c.monthCharges=?12,c.maidExperience=?13  where c.maidId=?14")
	public maid updatemaid(int maidId, String maidName, String maidUsername, String maidPassword, int maidAge,
			String maidMobileNo, String maidEmailId, String maidAddress, String maidCity, String maidPincode,
			String maidAdharCard, String maidPoliceVerificationCertificate, int monthCharges, int maidExperience);

	@Modifying
	@Query(value = "update maid c set c.maidName=?1,c.maidUsername=?2 , c.maidPassword=?3, c.maidAge=?4, c.maidMobileNo=?5 ,c.maidEmailId=?6, c.maidAddress=?7,c.maidCity=?8, c.maidPincode=?9,c.maidAdharCard=?10,c.maidPoliceVerificationCertificate=?11,c.monthCharges=?12,c.maidExperience=?13  where c.maidId=?14")
	public maid checkLoginmaiid(int maidId, String maidName, String maidUsername, String maidPassword, int maidAge,
			String maidMobileNo, String maidEmailId, String maidAddress, String maidCity, String maidPincode,
			String maidAdharCard, String maidPoliceVerificationCertificate, int monthCharges, int maidExperience);

}
