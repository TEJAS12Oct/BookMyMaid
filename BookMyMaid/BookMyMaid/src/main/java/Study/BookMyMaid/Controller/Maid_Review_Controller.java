package Study.BookMyMaid.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Study.BookMyMaid.Entity.maid_review;
import Study.BookMyMaid.Repository.Maid_Review_Repository;

@CrossOrigin
@RestController
@Controller
@RequestMapping(path = "/MaidReview")
public class Maid_Review_Controller {

	@Autowired
	Maid_Review_Repository mrrepo;

	@GetMapping("/maidreviewlist")
	public List<maid_review> showList() {
		List<maid_review> list = mrrepo.findAll();
		System.out.println("List delivered................");
		return list;
	}

	@PostMapping("/maidreviewinsert")
	public String addServices(@RequestBody maid_review c) {
		maid_review m1 = new maid_review(c.getMaidReviewId(), c.getMaidRating(), c.getMaidComments(), c.getMaid(),
				c.getUserBook());
		mrrepo.save(m1);
		return "Successfully Inserted..";
	}

}
