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
@RequestMapping(path = "/BookingInfo")
public class Booking_Info_Controller {

	@Autowired
	Booking_Info_Repository birepo;

	@Autowired
	Maid_Repository maidRepo;

	@Autowired
	User_Repository userRepo;

	@Autowired
	Services_Repository sRepo;

	@GetMapping("/getallbookings")
	public List<booking_info> getAll() {
		List<booking_info> list = birepo.findAll();
		System.out.println("List delivered................");
		return list;

	}

	@PostMapping("/insertbooking")
	public String addbookinginfo(@RequestBody booking_info bi) {		
		booking_info b = new booking_info(bi.getBookingInfoId(), bi.getMaidBookingDate(), bi.getStartDate(),
				bi.getEndDate(), bi.getMonthCharges(), bi.getMaidTimeSlots(), bi.getMaidHolidays(), bi.getMaidBooking(),
				bi.getUserbooking(), bi.getServices());
		birepo.save(b);
		return "Succesfully Inserted..";

	}

	@PostMapping("/insertbooking/{maidId}/{user_id}/{servicesId}")
	public String addbookinginfo1(@RequestBody booking_info bi, @PathVariable int maidId, @PathVariable int user_id,
			@PathVariable int servicesId) {
		maid m = maidRepo.findById(maidId).get();
		user u = userRepo.findById(user_id).get();
		services s = sRepo.findById(servicesId).get();
		bi.setMaidBooking(m);
		bi.setUserbooking(u);
		bi.setServices(s);
		birepo.save(bi);
		return "Succesfully Inserted..";

	}

	@GetMapping("/bookinginfobyid/{id}")
	public List<booking_info> f5(@PathVariable("id") int userId) {
		List<booking_info> list = birepo.findByUser_id(userId);
		return list;

	}

}
