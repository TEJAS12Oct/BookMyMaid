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

import Study.BookMyMaid.Entity.maid;
import Study.BookMyMaid.Entity.maid_review;
import Study.BookMyMaid.Entity.user;
import Study.BookMyMaid.Repository.Maid_Repository;
import Study.BookMyMaid.Repository.Maid_Review_Repository;
import Study.BookMyMaid.Repository.User_Repository;

@CrossOrigin
@RestController
@Controller
@RequestMapping(path = "/MaidReview") // Maps HTTP Requests To Handler Methods Of REST Controllers
public class Maid_Review_Controller {

	@Autowired // Right Dependency Is Assigned By The Spring Container.
	Maid_Review_Repository mrrepo;

	@Autowired
	Maid_Repository maidRepo;

	@Autowired
	User_Repository userRepo;

	@GetMapping("/maidreviewlist") // List Of All Maid Review (Feedback)
	public List<maid_review> showList() {
		try {
			List<maid_review> list = mrrepo.findAll();
			System.out.println("List delivered...!!!");
			return list;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@PostMapping("/maidreviewinsert") // Insert Of Maid Review (Feedback)
	public String addServices(@RequestBody maid_review c) {
		maid_review m1 = new maid_review(c.getMaidReviewId(), c.getMaidRating(), c.getMaidComments(), c.getMaid(),
				c.getUserBook());
		mrrepo.save(m1);
		return "Successfully Inserted...!!!";
	}

	@PostMapping("/maidreviewinsert/{maidId}/{user_id}") // Insert Of Maid Review (Feedback)
	public String addServices1(@RequestBody maid_review c, @PathVariable int maidId, @PathVariable int user_id) {
		maid m = maidRepo.findById(maidId).get();
		user u = userRepo.findById(user_id).get();
		c.setMaid(m);
		c.setUserBook(u);
		mrrepo.save(c);
		return "Successfully Inserted...!!!";
	}

}
