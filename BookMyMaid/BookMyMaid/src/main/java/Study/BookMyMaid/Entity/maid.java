package Study.BookMyMaid.Entity;

import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity()
@Table(name = "maid")
public class maid {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "maidId")
	private int maidId;

	@Column(name = "maidName")
	private String maidName;

	@Column(name = "maidUsername")
	private String maidUsername;

	@Column(name = "maidPassword")
	private String maidPassword;

	@Column(name = "maidAge")
	private int maidAge;

	@Column(name = "maidMobileNo")
	private String maidMobileNo;

	@Column(name = "maidEmailId")
	private String maidEmailId;

	@Column(name = "maidAddress")
	private String maidAddress;

	@Column(name = "maidCity")
	private String maidCity;

	@Column(name = "maidPincode")
	private String maidPincode;

	@Column(name = "maidAdharCard")
	private String maidAdharCard;

	@Column(name = "maidPoliceVerificationCertificate")
	private String maidPoliceVerificationCertificate;

	@Column(name = "maidExtraChargePerRoom")
	private int maidExtraChargePerRoom;

	@Column(name = "maidExtraChargePerMember")
	private int maidExtraChargePerMember;

	@Column(name = "maidExperience")
	private int maidExperience;

	@Lob
	@Column(name = " maidImages")
	private Blob maidImages;

	@OneToMany(mappedBy = "maid", cascade = CascadeType.ALL)
	private List<maid_review> maid_review = new ArrayList<>();

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
			String maidPoliceVerificationCertificate, int maidExtraChargePerRoom, int maidExtraChargePerMember,
			int maidExperience) {
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
		this.maidExtraChargePerRoom = maidExtraChargePerRoom;
		this.maidExtraChargePerMember = maidExtraChargePerMember;
		this.maidExperience = maidExperience;
	}

	public maid(int maidId, String maidName, String maidUsername, String maidPassword, int maidAge, String maidMobileNo,
			String maidEmailId, String maidAddress, String maidCity, String maidPincode, String maidAdharCard,
			String maidPoliceVerificationCertificate, int maidExtraChargePerRoom, int maidExtraChargePerMember,
			int maidExperience, Blob maidImages) {
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
		this.maidExtraChargePerRoom = maidExtraChargePerRoom;
		this.maidExtraChargePerMember = maidExtraChargePerMember;
		this.maidExperience = maidExperience;
		this.maidImages = maidImages;
	}

	public maid(int maidId, String maidName, String maidUsername, String maidPassword, int maidAge, String maidMobileNo,
			String maidEmailId, String maidAddress, String maidCity, String maidPincode, String maidAdharCard,
			String maidPoliceVerificationCertificate, int maidExtraChargePerRoom, int maidExtraChargePerMember,
			int maidExperience, Blob maidImages, List<Study.BookMyMaid.Entity.maid_review> maid_review) {
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
		this.maidExtraChargePerRoom = maidExtraChargePerRoom;
		this.maidExtraChargePerMember = maidExtraChargePerMember;
		this.maidExperience = maidExperience;
		this.maidImages = maidImages;
		this.maid_review = maid_review;
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

	public int getMaidExtraChargePerRoom() {
		return maidExtraChargePerRoom;
	}

	public void setMaidExtraChargePerRoom(int maidExtraChargePerRoom) {
		this.maidExtraChargePerRoom = maidExtraChargePerRoom;
	}

	public int getMaidExtraChargePerMember() {
		return maidExtraChargePerMember;
	}

	public void setMaidExtraChargePerMember(int maidExtraChargePerMember) {
		this.maidExtraChargePerMember = maidExtraChargePerMember;
	}

	public int getMaidExperience() {
		return maidExperience;
	}

	public void setMaidExperience(int maidExperience) {
		this.maidExperience = maidExperience;
	}

	public Blob getMaidImages() {
		return maidImages;
	}

	public void setMaidImages(Blob maidImages) {
		this.maidImages = maidImages;
	}

	public List<maid_review> getMaid_review() {
		return maid_review;
	}

	public void setMaid_review(List<maid_review> maid_review) {
		this.maid_review = maid_review;
	}

	@Override
	public String toString() {
		return "maid [maidId=" + maidId + ", maidName=" + maidName + ", maidUsername=" + maidUsername
				+ ", maidPassword=" + maidPassword + ", maidAge=" + maidAge + ", maidMobileNo=" + maidMobileNo
				+ ", maidEmailId=" + maidEmailId + ", maidAddress=" + maidAddress + ", maidCity=" + maidCity
				+ ", maidPincode=" + maidPincode + ", maidAdharCard=" + maidAdharCard
				+ ", maidPoliceVerificationCertificate=" + maidPoliceVerificationCertificate
				+ ", maidExtraChargePerRoom=" + maidExtraChargePerRoom + ", maidExtraChargePerMember="
				+ maidExtraChargePerMember + ", maidExperience=" + maidExperience + ", maidImages=" + maidImages
				+ ", maid_review=" + maid_review + "]";
	}

}
