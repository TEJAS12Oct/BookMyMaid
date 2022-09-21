package Study.BookMyMaid.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Study.BookMyMaid.Entity.booking_info;
import Study.BookMyMaid.Entity.maid;
import Study.BookMyMaid.Entity.services;
import Study.BookMyMaid.Entity.user;
import Study.BookMyMaid.Repository.Booking_Info_Repository;
import Study.BookMyMaid.Repository.Maid_Repository;
import Study.BookMyMaid.Repository.Services_Repository;
import Study.BookMyMaid.Repository.User_Repository;

@CrossOrigin
@RestController
@Controller
@RequestMapping(path = "/BookingInfo") // Maps HTTP Requests To Handler Methods Of REST Controllers
public class Booking_Info_Controller {

	@Autowired // Right Dependency Is Assigned By The Spring Container.
	Booking_Info_Repository birepo;

	@Autowired
	Maid_Repository maidRepo;

	@Autowired
	User_Repository userRepo;

	@Autowired
	Services_Repository sRepo;

	@GetMapping("/getallbookings") // List Of All Booking Display
	public List<booking_info> getAll() {
		List<booking_info> list = birepo.findAll();
		System.out.println("List delivered...!!!");
		return list;

	}

	@PostMapping("/insertbooking/{maidId}/{user_id}/{servicesId}") // Insert Booking Using post Mapping
	public String addbookinginfo1(@RequestBody booking_info bi, @PathVariable int maidId, @PathVariable int user_id,
			@PathVariable int servicesId) {

		maid m = maidRepo.findById(maidId).get();
		user u = userRepo.findById(user_id).get();
		services s = sRepo.findById(servicesId).get();

		bi.setMonthCharges(m.getMonthCharges());
		bi.setMaidId(m);
		bi.setUserId(u);
		bi.setServices(s);
		birepo.save(bi);
		System.out.println(bi);
		return "Succesfully Inserted...!!!";
	}

	@GetMapping("/bookinginfobyid/{id}") // Find Booking Info Of User By Using userId
	public List<booking_info> f5(@PathVariable("id") int userId) {
		user u = userRepo.findById(userId).get();
		List<booking_info> list = birepo.findByUserId(u);
		return list;

	}

	@GetMapping("/bookinginfoformaid/{id}") // Find Booking Info OF Maid By Using maidId
	public List<booking_info> getBookingsByMaid(@PathVariable("id") int maidId) {
		maid m = maidRepo.findById(maidId).get();
		List<booking_info> list = birepo.findByMaidId(m);
		return list;

	}

}
