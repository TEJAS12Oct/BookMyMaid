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

import Study.BookMyMaid.Entity.user;
import Study.BookMyMaid.Repository.User_Repository;

@CrossOrigin
@RestController
@Controller
@RequestMapping(path = "/user")
public class User_Controller {

	@Autowired
	User_Repository repo;

//  Need for admin	
	@GetMapping("/userlist")
	public List<user> showList() {
		List<user> list = repo.findAll();
		System.out.println("List delivered................");
		return list;
	}

	@PostMapping("/userinsert")
	public String addUser(@RequestBody user c) {
		user u1 = new user(c.getUserId(), c.getUserName(), c.getUserUsername(), c.getUserPassword(), c.getUserGender(),
				c.getUserFamilyMembers(), c.getUserRooms(), c.getUserMobileNo(), c.getUserEmailId(), c.getUserAddress(),
				c.getUserCity(), c.getUserPincode(), c.getUserAdharCard(), c.getUserImages());
		repo.save(u1);
		return "Successfully User Inserted..";
	}
	
	@GetMapping("/userfind/{id}")
	public user MaidFind(@PathVariable int id) {
		user p = repo.findById(id).get();
		System.out.println("Specific user................");
		return p;
	}
	
	
	@GetMapping("/userfindbyname/{name}")
	public List<user> f3(@PathVariable("name") String username) 
	{
		List<user> list = null;
		try {
		list = repo.findByUsername(username);
		System.out.println("fetched.........");
		return list;
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
			
	}

	@PutMapping("/userupdate/{id}/{userusername}/{UserFamilyMembers}/{userRooms}/{userMobileNo}/{userEmailId}/{userAddress}/{userCity}/{userPincode}/{userImages}")
	public String UpdateUser(@PathVariable int id, @PathVariable String userusername,
			@PathVariable int UserFamilyMembers, @PathVariable int userRooms, @PathVariable String userMobileNo,
			@PathVariable String userEmailId, @PathVariable String userAddress, @PathVariable String userCity,
			@PathVariable String userPincode, @PathVariable Blob images) {
		user p = repo.findById(id).get();
		p.setUserUsername(userusername);
		p.setUserFamilyMembers(UserFamilyMembers);
		p.setUserRooms(userRooms);
		p.setUserMobileNo(userMobileNo);
		p.setUserEmailId(userEmailId);
		p.setUserAddress(userAddress);
		p.setUserCity(userCity);
		p.setUserPincode(userPincode);
		p.setUserImages(images);
		repo.save(p);
		return "Updated record...";
	}

	@PostMapping("/userupdate")
	public user updateUser(@RequestBody user c) {
		return repo.checkLoginUser(c.getUserId(), c.getUserUsername(), c.getUserFamilyMembers(), c.getUserRooms(),
				c.getUserMobileNo(), c.getUserEmailId(), c.getUserAddress(), c.getUserCity(), c.getUserPincode(),
				c.getUserImages());
	}

	@PutMapping("/userupdate/{id}/{name}")
	public String updateUserName(@PathVariable int id, @PathVariable String name) {
		user p = repo.findById(id).get();
		p.setUserName(name);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/userupdateusername/{id}/{username}")
	public String updateUser_User_Name(@PathVariable int id, @PathVariable String username) {
		user p = repo.findById(id).get();
		p.setUserUsername(username);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/userupdatepassword/{id}/{password}")
	public String updateUser_Password(@PathVariable int id, @PathVariable String password) {
		user p = repo.findById(id).get();
		p.setUserPassword(password);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/userupdatemobileno/{id}/{mobileNo}")
	public String updateUser_Mobile_No(@PathVariable int id, @PathVariable String mobileNo) {
		user p = repo.findById(id).get();
		p.setUserMobileNo(mobileNo);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/userupdateemailid/{id}/{emailId}")
	public String updateUser_Email_Id(@PathVariable int id, @PathVariable String emailId) {
		user p = repo.findById(id).get();
		p.setUserEmailId(emailId);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/userupdateaddress/{id}/{address}")
	public String updateUser_Address(@PathVariable int id, @PathVariable String address) {
		user p = repo.findById(id).get();
		p.setUserAddress(address);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/userupdatecity/{id}/{city}")
	public String updateUser_City(@PathVariable int id, @PathVariable String city) {
		user p = repo.findById(id).get();
		p.setUserCity(city);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/userupdatepincode/{id}/{pincode}")
	public String updateUser_Pincode(@PathVariable int id, @PathVariable String pincode) {
		user p = repo.findById(id).get();
		p.setUserPincode(pincode);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/userupdateuserrooms/{id}/{userRooms}")
	public String updateUser_user_rooms(@PathVariable int id, @PathVariable int userRooms) {
		user p = repo.findById(id).get();
		p.setUserRooms(userRooms);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/userupdatefamilymembers/{id}/{userFamilyMembers}")
	public String updateMaid_family_members(@PathVariable int id, @PathVariable int userFamilyMembers) {
		user p = repo.findById(id).get();
		p.setUserFamilyMembers(userFamilyMembers);
		repo.save(p);
		return "Updated record...";
	}

	@PutMapping("/userupdateimages/{id}/{images}")
	public String updateMaid_experience(@PathVariable int id, @PathVariable Blob images) {
		user p = repo.findById(id).get();
		p.setUserImages(images);
		repo.save(p);
		return "Updated record...";
	}

//  Need for admin
	@DeleteMapping("/userdelete/{id}")
	public String deleteUser(@PathVariable int id) {
		repo.deleteById(id);
		return id + "Deleted";
	}

//	@GetMapping("/checkloginforuser/{userEmailId}/{userPassword}")
//	public user checkLogin(String userEmailId, String userPassword) {
//		user c = repo.checkLoginUser(userEmailId, userPassword);
//		return c;
//
//	}

	@PostMapping("/CheckLogin")
	public user checklog(@RequestBody user c) {
		return repo.checkLoginUser(c.getUserEmailId(), c.getUserPassword());
	}



	@PutMapping("/changepassword/{id}/{pass}")
	public String UserPass1(@PathVariable int id, @PathVariable String pass) {
		try {
			if (id == repo.findById(id).get().getUserId()) {
				user p = repo.findById(id).get();
				p.setUserPassword(pass);
				System.out.println("Password changed successfully to " + pass);
				return "Password changed successfully to " + pass;
			}

		} catch (Exception e) {
			System.out.println("plz enter valid credentials");
		}
		return "plz enter valid credentials";

	}

	@PutMapping("/forgotpassword/{id}/{pass1}/{pass2}")
	public String UserPass2(@PathVariable int id, @PathVariable String pass1, @PathVariable String pass2) {
		try {
			if (id == repo.findById(id).get().getUserId() && pass1.equals(repo.findById(id).get().getUserPassword())) {
				user p = repo.findById(id).get();
				p.setUserPassword(pass2);
				System.out.println("Password changed successfully to " + pass2);
				return "Password changed successfully to " + pass2;
			}

		} catch (Exception e) {
			System.out.println("plz enter valid credentials");
		}
		return "plz enter valid credentials..........";
	}

}
