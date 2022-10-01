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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity()
@Table(name = "maid")
public class maid {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "maidId")
	private int maidId;

	@Column(name = "maidName", nullable = false)
	private String maidName;

	@Column(name = "maidUsername", nullable = false)
	private String maidUsername;

	@Column(name = "maidPassword", nullable = false)
	private String maidPassword;

	@Column(name = "maidAge", nullable = false)
	private int maidAge;

	@Column(name = "maidMobileNo", nullable = false)
	private String maidMobileNo;

	@Column(name = "maidEmailId", nullable = false)
	private String maidEmailId;

	@Column(name = "maidAddress", nullable = false)
	private String maidAddress;

	@Column(name = "maidCity", nullable = false)
	private String maidCity;

	@Column(name = "maidPincode", nullable = false)
	private String maidPincode;

	@Column(name = "maidAdharCard", nullable = false)
	private String maidAdharCard;

	@Column(name = "maidPoliceVerificationCertificate", nullable = false)
	private String maidPoliceVerificationCertificate;

	@Column(name = "monthCharges", nullable = false)
	private int monthCharges;

	@Column(name = "maidExperience", nullable = false)
	private int maidExperience;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "services_id")
	private services servicesId;

	// The FetchType.LAZY tells Hibernate to only fetch the related entities from
	// the database when you use the relationship.

	// CascadeType.ALL is that the persistence will propagate (cascade) all
	// EntityManager operations
	@OneToMany(mappedBy = "maid", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnore
	private List<maid_review> maid_review = new ArrayList<>();

	@OneToMany(mappedBy = "maidId", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnore
	private List<booking_info> booking_info = new ArrayList<>();

	public maid() {
		super();
	}

	public maid(String maidPassword, String maidEmailId) {
		super();
		this.maidPassword = maidPassword;
		this.maidEmailId = maidEmailId;
	}

	public maid(int maidId, String maidName, String maidUsername, String maidPassword, int maidAge, String maidMobileNo,
			String maidEmailId, String maidAddress, String maidCity, String maidPincode, String maidAdharCard,
			String maidPoliceVerificationCertificate, int monthCharges, int maidExperience) {
		super();
		this.maidId = maidId;
		this.maidName = maidName;
		this.maidUsername = maidUsername;
		this.maidPassword = maidPassword;
		this.maidAge = maidAge;
		this.maidMobileNo = maidMobileNo;
		this.maidEmailId = maidEmailId;
		this.maidAddress = maidAddress;
		this.maidCity = maidCity;
		this.maidPincode = maidPincode;
		this.maidAdharCard = maidAdharCard;
		this.maidPoliceVerificationCertificate = maidPoliceVerificationCertificate;
		this.monthCharges = monthCharges;
		this.maidExperience = maidExperience;
	}

	public maid(String maidName, String maidUsername, String maidPassword, int maidAge, String maidMobileNo,
			String maidEmailId, String maidAddress, String maidCity, String maidPincode, String maidAdharCard,
			String maidPoliceVerificationCertificate, int monthCharges, int maidExperience) {
		super();
		this.maidName = maidName;
		this.maidUsername = maidUsername;
		this.maidPassword = maidPassword;
		this.maidAge = maidAge;
		this.maidMobileNo = maidMobileNo;
		this.maidEmailId = maidEmailId;
		this.maidAddress = maidAddress;
		this.maidCity = maidCity;
		this.maidPincode = maidPincode;
		this.maidAdharCard = maidAdharCard;
		this.maidPoliceVerificationCertificate = maidPoliceVerificationCertificate;
		this.monthCharges = monthCharges;
		this.maidExperience = maidExperience;
	}

	public int getMaidId() {
		return maidId;
	}

	public void setMaidId(int maidId) {
		this.maidId = maidId;
	}

	public String getMaidName() {
		return maidName;
	}

	public void setMaidName(String maidName) {
		this.maidName = maidName;
	}

	public String getMaidUsername() {
		return maidUsername;
	}

	public void setMaidUsername(String maidUsername) {
		this.maidUsername = maidUsername;
	}

	public String getMaidPassword() {
		return maidPassword;
	}

	public void setMaidPassword(String maidPassword) {
		this.maidPassword = maidPassword;
	}

	public int getMaidAge() {
		return maidAge;
	}

	public void setMaidAge(int maidAge) {
		this.maidAge = maidAge;
	}

	public String getMaidMobileNo() {
		return maidMobileNo;
	}

	public void setMaidMobileNo(String maidMobileNo) {
		this.maidMobileNo = maidMobileNo;
	}

	public String getMaidEmailId() {
		return maidEmailId;
	}

	public void setMaidEmailId(String maidEmailId) {
		this.maidEmailId = maidEmailId;
	}

	public String getMaidAddress() {
		return maidAddress;
	}

	public void setMaidAddress(String maidAddress) {
		this.maidAddress = maidAddress;
	}

	public String getMaidCity() {
		return maidCity;
	}

	public void setMaidCity(String maidCity) {
		this.maidCity = maidCity;
	}

	public String getMaidPincode() {
		return maidPincode;
	}

	public void setMaidPincode(String maidPincode) {
		this.maidPincode = maidPincode;
	}

	public String getMaidAdharCard() {
		return maidAdharCard;
	}

	public void setMaidAdharCard(String maidAdharCard) {
		this.maidAdharCard = maidAdharCard;
	}

	public String getMaidPoliceVerificationCertificate() {
		return maidPoliceVerificationCertificate;
	}

	public void setMaidPoliceVerificationCertificate(String maidPoliceVerificationCertificate) {
		this.maidPoliceVerificationCertificate = maidPoliceVerificationCertificate;
	}

	public int getMaidExperience() {
		return maidExperience;
	}

	public void setMaidExperience(int maidExperience) {
		this.maidExperience = maidExperience;
	}

	public int getMonthCharges() {
		return monthCharges;
	}

	public void setMonthCharges(int monthCharges) {
		this.monthCharges = monthCharges;
	}

	public services getServicesId() {
		return servicesId;
	}

	public void setServicesId(services servicesId) {
		this.servicesId = servicesId;
	}

	public List<maid_review> getMaid_review() {
		return maid_review;
	}

	public void setMaid_review(List<maid_review> maid_review) {
		this.maid_review = maid_review;
	}

	public List<booking_info> getBooking_info() {
		return booking_info;
	}

	public void setBooking_info(List<booking_info> booking_info) {
		this.booking_info = booking_info;
	}

	@Override
	public String toString() {
		return "maid [maidId=" + maidId + ", maidName=" + maidName + ", maidUsername=" + maidUsername
				+ ", maidPassword=" + maidPassword + ", maidAge=" + maidAge + ", maidMobileNo=" + maidMobileNo
				+ ", maidEmailId=" + maidEmailId + ", maidAddress=" + maidAddress + ", maidCity=" + maidCity
				+ ", maidPincode=" + maidPincode + ", maidAdharCard=" + maidAdharCard
				+ ", maidPoliceVerificationCertificate=" + maidPoliceVerificationCertificate + ", monthCharges="
				+ monthCharges + ", maidExperience=" + maidExperience + "]";
	}

}
