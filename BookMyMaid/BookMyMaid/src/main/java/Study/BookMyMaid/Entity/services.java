package Study.BookMyMaid.Entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "services")
public class services {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "servicesId")
	private int servicesId;

	@Column(name = "servicesName")
	private String servicesName;

	@Column(name = "baseCharges")
	private int baseCharges;

	@OneToMany(mappedBy = "servicesId", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private List<maid> maid = new ArrayList<>();

	@OneToMany(mappedBy = "Services", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnore
	private List<booking_info> booking_info = new ArrayList<>();

//	@ManyToMany(mappedBy = "services", cascade = CascadeType.ALL)
//	private List<maid> maid1 = new ArrayList()<>();

	public services() {
		super();
	}

	public services(int servicesId, String servicesName, int baseCharges) {
		super();
		this.servicesId = servicesId;
		this.servicesName = servicesName;
		this.baseCharges = baseCharges;
	}

	public services(int servicesId, String servicesName, int baseCharges, List<Study.BookMyMaid.Entity.maid> maid,
			List<Study.BookMyMaid.Entity.booking_info> booking_info) {
		super();
		this.servicesId = servicesId;
		this.servicesName = servicesName;
		this.baseCharges = baseCharges;
		this.maid = maid;
		this.booking_info = booking_info;
	}

	public int getServicesId() {
		return servicesId;
	}

	public void setServicesId(int servicesId) {
		this.servicesId = servicesId;
	}

	public String getServicesName() {
		return servicesName;
	}

	public void setServicesName(String servicesName) {
		this.servicesName = servicesName;
	}

	public int getBaseCharges() {
		return baseCharges;
	}

	public void setBaseCharges(int baseCharges) {
		this.baseCharges = baseCharges;
	}

	public List<maid> getMaid() {
		return maid;
	}

	public void setMaid(List<maid> maid) {
		this.maid = maid;
	}

	public List<booking_info> getBooking_info() {
		return booking_info;
	}

	public void setBooking_info(List<booking_info> booking_info) {
		this.booking_info = booking_info;
	}

	@Override
	public String toString() {
		return "services [servicesId=" + servicesId + ", servicesName=" + servicesName + ", baseCharges=" + baseCharges
				+ ", maid=" + maid + ", booking_info=" + booking_info + "]";
	}

}
