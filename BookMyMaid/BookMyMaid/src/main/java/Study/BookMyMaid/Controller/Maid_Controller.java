package Study.BookMyMaid.Controller;

import java.sql.Blob;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Study.BookMyMaid.Entity.maid;
import Study.BookMyMaid.Entity.user;
import Study.BookMyMaid.Repository.Maid_Repository;
import Study.BookMyMaid.Repository.Services_Repository;

@CrossOrigin
@RestController
@Controller
@RequestMapping(path = "/maid")
public class Maid_Controller {

	@Autowired
	Maid_Repository repo;

	@Autowired
	Services_Repository serviceRepo;

	@GetMapping("/maidlist")
	public List<maid> showList() {
		List<maid> list = repo.findAll();
		System.out.println("List delivered................");
		return list;
	}

	@PostMapping("/maidinsert")
	public String addMaid(@RequestBody maid c) {
		maid m1 = new maid(c.getMaidId(), c.getMaidName(), c.getMaidUsername(), c.getMaidPassword(), c.getMaidAge(),
				c.getMaidMobileNo(), c.getMaidEmailId(), c.getMaidAddress(), c.getMaidCity(), c.getMaidPincode(),
				c.getMaidAdharCard(), c.getMaidPoliceVerificationCertificate(), c.getMaidExtraChargePerRoom(),
				c.getMaidExtraChargePerMember(), c.getMaidExperience(), c.getMaidImages(), c.getMaid_review());
		repo.save(m1);
		return "Successfully Inserted..";
	}

	@GetMapping("/maidfind/{id}")
	public maid MaidFind(@PathVariable int id) {
		maid p = repo.findById(id).get();
		System.out.println("Specific Maid................");
		return p;
	}

	@GetMapping("/maidfindbyname/{name}")
	public List<maid> f3(@PathVariable("name") String maidname) {
		List<maid> list = repo.findByMaidname(maidname);
		return list;

	}

//	@GetMapping("/getAllMaidsByCategory/{name}")
//	public List<maid> getAllMaids(@PathVariable("name") String serviceName) {
//		services s = serviceRepo.getByServicesName(serviceName);
//		System.out.println(s);
//		List<maid> list = repo.getByServices(s.getServices_id());
//  	return list;
//	}

	@PutMapping("/maidupdate/{id}/{maidUsername}/{maidAge}/{mobileNo}/{maidEmailId}/{address}/{city}/{pincode}/{images}")
	public String UpdateMaid(@PathVariable int id, @PathVariable String maidUsername, @PathVariable int maidAge,
			@PathVariable String maidMobileNo, @PathVariable String maidEmailId, @PathVariable String maidAddress,
			@PathVariable String maidCity, @PathVariable String maidPincode, @PathVariable Blob images) {
		maid m = repo.findById(id).get();
		m.setMaidUsername(maidUsername);
		m.setMaidAge(maidAge);
		m.setMaidMobileNo(maidMobileNo);
		m.setMaidEmailId(maidEmailId);
		m.setMaidAddress(maidAddress);
		m.setMaidCity(maidCity);
		m.setMaidPincode(maidPincode);
		m.setMaidImages(images);
		repo.save(m);
		return "Updated record...";
	}

	@PostMapping("/maidupdate")
	public maid updateMaid(@RequestBody maid c) {
		return repo.checkLoginmaiid(c.getMaidId(), c.getMaidUsername(), c.getMaidAge(), c.getMaidMobileNo(),
				c.getMaidEmailId(), c.getMaidAddress(), c.getMaidCity(), c.getMaidPincode(), c.getMaidImages());
	}

	@PutMapping("/maidupdatename/{id}/{name}")
	public String updateMaidName(@PathVariable int id, @PathVariable String name) {
		maid p = repo.findById(id).get();
		p.setMaidName(name);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/maidupdateusername/{id}/{username}")
	public String updateMaid_User_Name(@PathVariable int id, @PathVariable String username) {
		maid p = repo.findById(id).get();
		p.setMaidUsername(username);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/maidupdatepassword/{id}/{password}")
	public String updateMaid_Password(@PathVariable int id, @PathVariable String password) {
		maid p = repo.findById(id).get();
		p.setMaidPassword(password);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/maidupdatemobileno/{id}/{mobileNo}")
	public String updateMaid_Mobile_No(@PathVariable int id, @PathVariable String mobileNo) {
		maid p = repo.findById(id).get();
		p.setMaidMobileNo(mobileNo);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/maidupdateemailid/{id}/{emailid}")
	public String updateMaid_Email_Id(@PathVariable int id, @PathVariable String emailId) {
		maid p = repo.findById(id).get();
		p.setMaidEmailId(emailId);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/maidupdateaddress/{id}/{address}")
	public String updateMaid_Address(@PathVariable int id, @PathVariable String address) {
		maid p = repo.findById(id).get();
		p.setMaidAddress(address);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/maidupdatecity/{id}/{city}")
	public String updateMaid_City(@PathVariable int id, @PathVariable String city) {
		maid p = repo.findById(id).get();
		p.setMaidCity(city);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/maidupdatepincode/{id}/{pincode}")
	public String updateMaid_Pincode(@PathVariable int id, @PathVariable String pincode) {
		maid p = repo.findById(id).get();
		p.setMaidPincode(pincode);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/maidupdateExtraChargePerRoom/{id}/{maidExtraChargePerRoom}")
	public String updateMaid_extra_charge_per_room(@PathVariable int id, @PathVariable int maidExtraChargePerRoom) {
		maid p = repo.findById(id).get();
		p.setMaidExtraChargePerRoom(maidExtraChargePerRoom);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/maidupdateExtraChargePerMember/{id}/{maidExtraChargePerMember}")
	public String updateMaid_extra_charge_per_member(@PathVariable int id, @PathVariable int maidExtraChargePerMember) {
		maid p = repo.findById(id).get();
		p.setMaidExtraChargePerMember(maidExtraChargePerMember);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/maidupdate_experience/{id}/{experience}")
	public String updateMaid_experience(@PathVariable int id, @PathVariable int experience) {
		maid p = repo.findById(id).get();
		p.setMaidExperience(experience);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/maidupdate_Images/{id}/{images}")
	public String updateMaid_experience(@PathVariable int id, @PathVariable Blob images) {
		maid p = repo.findById(id).get();
		p.setMaidImages(images);
		repo.save(p);
		return "Updated record...";
	}

	@DeleteMapping("/maiddelete/{id}")
	public String deleteMaid(@PathVariable int id) {
		repo.deleteById(id);
		return id + "Deleted";
	}

//	@GetMapping("/checkloginformaid/{maidEmailId}/{maidPassword}")
//	public maid checkLogin(String maidEmailId, String maidPassword) {
//		maid c = repo.checkLoginMaid(maidEmailId, maidPassword);
//		return c;
//
//	}

	@PostMapping("/CheckLogin")
	public maid checklog(@RequestBody maid c) {
		return repo.checkLoginMaid(c.getMaidEmailId(), c.getMaidPassword());
	}

	@PutMapping("/changepassword/{id}/{pass}")
	public String MaidFind(@PathVariable int id, @PathVariable String pass) {
		try {
			if (id == repo.findById(id).get().getMaidId()) {
				maid p = repo.findById(id).get();
				p.setMaidPassword(pass);
				System.out.println("Password changed successfully to " + pass);
				return "Password changed successfully to " + pass;
			}

		} catch (Exception e) {
			System.out.println("plz enter valid credentials");
		}
		return "plz enter valid credentials";

	}

	@PutMapping("/forgotpassword/{id}/{pass1}/{pass2}")
	public String MaidFind2(@PathVariable int id, @PathVariable String pass1, @PathVariable String pass2) {
		try {
			if (id == repo.findById(id).get().getMaidId() && pass1.equals(repo.findById(id).get().getMaidPassword())) {
				maid p = repo.findById(id).get();
				p.setMaidPassword(pass2);
				System.out.println("Password changed successfully to " + pass2);
				return "Password changed successfully to " + pass2;
			}

		} catch (Exception e) {
			System.out.println("plz enter valid credentials");
		}
		return "plz enter valid credentials..........";

	}

}
