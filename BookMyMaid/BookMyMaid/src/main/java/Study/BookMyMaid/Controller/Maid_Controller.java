package Study.BookMyMaid.Controller;

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
import Study.BookMyMaid.Entity.services;
import Study.BookMyMaid.Repository.Maid_Repository;
import Study.BookMyMaid.Repository.Services_Repository;

@CrossOrigin
@RestController
@Controller
@RequestMapping(path = "/maid") // Maps HTTP Requests To Handler Methods Of REST Controllers
public class Maid_Controller {

	@Autowired // Right Dependency Is Assigned By The Spring Container.
	Maid_Repository repo;

	@Autowired
	Services_Repository serviceRepo;

	@GetMapping("/maidlist") // List Of All Maids
	public List<maid> showList() 
	{
		List<maid> list = repo.findAll();
		System.out.println("List delivered...!!!");
		return list;
	}

	@PostMapping("/maidinsert") // Insert Maid
	public String addMaid(@RequestBody maid c)
	{
		String s="";
		try {
			maid m1 = new maid(c.getMaidName(), c.getMaidUsername(), c.getMaidPassword(), c.getMaidAge(),
					c.getMaidMobileNo(), c.getMaidEmailId(), c.getMaidAddress(), c.getMaidCity(), c.getMaidPincode(),
					c.getMaidAdharCard(), c.getMaidPoliceVerificationCertificate(), c.getMonthCharges(),
					c.getMaidExperience());
			repo.save(m1);
			s= "Successfully Inserted...!!!";
		}
		catch(Exception e)
		{
			s="Something wrong happened..."+e;
		}
		return s;		
	}

	@PostMapping("/maidinsert/{servicesId}") // Insert Maid
	public String addMaid1(@RequestBody maid c, @PathVariable int servicesId) {
		services s = serviceRepo.findById(servicesId).get();
		c.setServicesId(s);
		repo.save(c);
		return "Successfully Inserted...!!!";
	}

	@GetMapping("/maidfind/{id}") // Find Maid By ID
	public maid MaidFind(@PathVariable int id) {
		maid p = repo.findById(id).get();
		System.out.println("Specific Maid...!!!");
		return p;
	}

	@GetMapping("/maidfindbyname/{name}") // Find Maid By Name
	public List<maid> f3(@PathVariable("name") String maidname) {
		List<maid> list = repo.findByMaidname(maidname);
		return list;

	}

	@GetMapping("/getAllMaidsByCategory/{name}") // Find Maid By Using Services
	public List<maid> getAllMaids(@PathVariable("name") String serviceName) {
		services s = serviceRepo.findByServicesName(serviceName);
		System.out.println(serviceRepo.findByServicesName(serviceName));
		List<maid> list = repo.findByServicesId(s);
		return list;
	}

	@PostMapping("/maidupdate/{maidId}") // Update Maid
	public maid updatemaid(@RequestBody maid c, @PathVariable int maidId) {
		maid m = repo.findById(maidId).get();
		m.setMaidName(c.getMaidName());
		m.setMaidUsername(c.getMaidUsername());
		m.setMaidPassword(c.getMaidPassword());
		m.setMaidAge(c.getMaidAge());
		m.setMaidMobileNo(c.getMaidMobileNo());
		m.setMaidEmailId(c.getMaidEmailId());
		m.setMaidAddress(c.getMaidAddress());
		m.setMaidCity(c.getMaidCity());
		m.setMaidPincode(c.getMaidPincode());
		m.setMaidAdharCard(c.getMaidAdharCard());
		m.setMaidPoliceVerificationCertificate(c.getMaidPoliceVerificationCertificate());
		m.setMonthCharges(c.getMonthCharges());
		m.setMaidExperience(c.getMaidExperience());
		repo.save(m);
		return null;
	}

	@PostMapping("/maidupdate") // Update Maid
	public maid updateMaid(@RequestBody maid c) {
		return repo.checkLoginmaiid(c.getMaidId(), c.getMaidName(), c.getMaidUsername(), c.getMaidPassword(),
				c.getMaidAge(), c.getMaidMobileNo(), c.getMaidEmailId(), c.getMaidAddress(), c.getMaidCity(),
				c.getMaidPincode(), c.getMaidAdharCard(), c.getMaidPoliceVerificationCertificate(), c.getMonthCharges(),
				c.getMaidExperience());
	}

	@PutMapping("/maidupdatename/{id}/{name}") // Update MaidName
	public String updateMaidName(@PathVariable int id, @PathVariable String name) {
		maid p = repo.findById(id).get();
		p.setMaidName(name);
		repo.save(p);
		return "Updated record...!!!";
	}

	@PutMapping("/maidupdateusername/{id}/{username}") // Update MaidUserName
	public String updateMaid_User_Name(@PathVariable int id, @PathVariable String username) {
		maid p = repo.findById(id).get();
		p.setMaidUsername(username);
		repo.save(p);
		return "Updated record......!!!";
	}

	@PutMapping("/maidupdatepassword/{id}/{password}") // Update MaidPassWord
	public String updateMaid_Password(@PathVariable int id, @PathVariable String password) {
		maid p = repo.findById(id).get();
		p.setMaidPassword(password);
		repo.save(p);
		return "Updated record...!!!";
	}

	@PutMapping("/maidupdatemobileno/{id}/{mobileNo}") // Update MaidMobile No
	public String updateMaid_Mobile_No(@PathVariable int id, @PathVariable String mobileNo) {
		maid p = repo.findById(id).get();
		p.setMaidMobileNo(mobileNo);
		repo.save(p);
		return "Updated record...!!!";
	}

	@PutMapping("/maidupdateemailid/{id}/{emailid}") // Update MaidEmail ID
	public String updateMaid_Email_Id(@PathVariable int id, @PathVariable String emailId) {
		maid p = repo.findById(id).get();
		p.setMaidEmailId(emailId);
		repo.save(p);
		return "Updated record...!!!";
	}

	@PutMapping("/maidupdateaddress/{id}/{address}") // Update MaidAddress
	public String updateMaid_Address(@PathVariable int id, @PathVariable String address) {
		maid p = repo.findById(id).get();
		p.setMaidAddress(address);
		repo.save(p);
		return "Updated record...!!!";
	}

	@PutMapping("/maidupdatecity/{id}/{city}") // Update MaidCity
	public String updateMaid_City(@PathVariable int id, @PathVariable String city) {
		maid p = repo.findById(id).get();
		p.setMaidCity(city);
		repo.save(p);
		return "Updated record...!!!";
	}

	@PutMapping("/maidupdatepincode/{id}/{pincode}") // // Update MaidPincode
	public String updateMaid_Pincode(@PathVariable int id, @PathVariable String pincode) {
		maid p = repo.findById(id).get();
		p.setMaidPincode(pincode);
		repo.save(p);
		return "Updated record...!!!";
	}

	@PutMapping("/maidupdatemonthCharges/{id}/{monthCharges}") // Update MaidMonthCharges
	public String updateMaid_extra_charge_per_room(@PathVariable int id, @PathVariable int monthCharges) {
		maid p = repo.findById(id).get();
		p.setMonthCharges(monthCharges);
		repo.save(p);
		return "Updated record...!!!";
	}

	@PutMapping("/maidupdate_experience/{id}/{experience}") // Update MaidExperience
	public String updateMaid_experience(@PathVariable int id, @PathVariable int experience) {
		maid p = repo.findById(id).get();
		p.setMaidExperience(experience);
		repo.save(p);
		return "Updated record...!!!";
	}

	@DeleteMapping("/maiddelete/{id}") // Delete Maid Using ID
	public String deleteMaid(@PathVariable int id) {
		repo.deleteById(id);
		return id + "Deleted";
	}

	@PostMapping("/CheckLogin") // Maid Log In
	public maid checklog(@RequestBody maid c) {
		try {
			return repo.checkLoginMaid(c.getMaidEmailId(), c.getMaidPassword());
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@PutMapping("/changepassword/{id}/{pass}") // Change PassWord
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
		return "plz enter valid credentials...!!!";

	}

	@PutMapping("/forgotpassword/{id}/{pass1}/{pass2}") // Forget PassWord
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
		return "plz enter valid credentials...!!!";

	}

}
