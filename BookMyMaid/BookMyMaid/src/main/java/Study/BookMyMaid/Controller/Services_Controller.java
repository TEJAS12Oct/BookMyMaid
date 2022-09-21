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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import Study.BookMyMaid.Entity.services;
import Study.BookMyMaid.Repository.Services_Repository;

@CrossOrigin
@RestController
@Controller
@RequestMapping(path = "/services") // Maps HTTP Requests To Handler Methods Of REST Controllers
public class Services_Controller {

	@Autowired // Right Dependency Is Assigned By The Spring Container.
	Services_Repository repo;

	@GetMapping("/serviceslist") // List OF All Seervices
	public List<services> showList() {
		try {
			List<services> list = repo.findAll();
			System.out.println("List delivered...!!!");
			return list;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@PostMapping("/servicesinsert") // Insert Services
	public String addServices(@RequestBody services c) {
		services m1 = new services(c.getServicesId(), c.getServicesName(), c.getBaseCharges());
		repo.save(m1);
		return "Successfully Inserted...!!!";
	}

	@PutMapping("/servicesupdate/{id}/{name}") // Service Update Using Name
	public String updateUserName(@PathVariable int id, @PathVariable String name) {
		services p = repo.findById(id).get();
		p.setServicesName(name);
		repo.save(p);
		return "Updated record...!!!";
	}

	@PutMapping("/servicesupdate/{id}/{baseCharges}") // // Service Update Using Base Charges
	public String updateServiceBaseCharges(@PathVariable int id, @PathVariable int baseCharges) {
		services p = repo.findById(id).get();
		p.setBaseCharges(baseCharges);
		repo.save(p);
		return "Updated record...!!!";
	}

	@DeleteMapping("/servicesdelete") // Service Delete
	public String deleteServices(@RequestParam int id) {
		repo.deleteById(id);
		return id + " Deleted";
	}

}
