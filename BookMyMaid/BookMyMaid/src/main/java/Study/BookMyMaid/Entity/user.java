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

@Entity()
@Table(name = "user")
public class user {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "userId")
	private int userId;

	@Column(name = "userName", nullable = false)
	private String userName;

	@Column(name = "userUsername", nullable = false)
	private String userUsername;

	@Column(name = "userPassword", nullable = false)
	private String userPassword;

	@Column(name = "userGender", nullable = false)
	private String userGender;

	@Column(name = "userFamilyMembers", nullable = false)
	private int userFamilyMembers;

	@Column(name = "userRooms", nullable = false)
	private int userRooms;

	@Column(name = "userMobileNo", nullable = false)
	private String userMobileNo;

	@Column(name = "userEmailId", nullable = false)
	private String userEmailId;

	@Column(name = "userAddress", nullable = false)
	private String userAddress;

	@Column(name = "userCity", nullable = false)
	private String userCity;

	@Column(name = "userPincode", nullable = false)
	private String userPincode;

	@Column(name = "userAdharCard", nullable = false)
	private String userAdharCard;

	@OneToMany(mappedBy = "userId", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnore
	private List<booking_info> booking_info = new ArrayList<>();

	public user() {
		super();
	}

	public user(String userPassword, String userEmailId) {
		super();
		this.userPassword = userPassword;
		this.userEmailId = userEmailId;
	}

	public user(int userId, String userName, String userUsername, String userPassword, String userGender,
			int userFamilyMembers, int userRooms, String userMobileNo, String userEmailId, String userAddress,
			String userCity, String userPincode, String userAdharCard) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userUsername = userUsername;
		this.userPassword = userPassword;
		this.userGender = userGender;
		this.userFamilyMembers = userFamilyMembers;
		this.userRooms = userRooms;
		this.userMobileNo = userMobileNo;
		this.userEmailId = userEmailId;
		this.userAddress = userAddress;
		this.userCity = userCity;
		this.userPincode = userPincode;
		this.userAdharCard = userAdharCard;

	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserUsername() {
		return userUsername;
	}

	public void setUserUsername(String userUsername) {
		this.userUsername = userUsername;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserGender() {
		return userGender;
	}

	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}

	public int getUserFamilyMembers() {
		return userFamilyMembers;
	}

	public void setUserFamilyMembers(int userFamilyMembers) {
		this.userFamilyMembers = userFamilyMembers;
	}

	public int getUserRooms() {
		return userRooms;
	}

	public void setUserRooms(int userRooms) {
		this.userRooms = userRooms;
	}

	public String getUserMobileNo() {
		return userMobileNo;
	}

	public void setUserMobileNo(String userMobileNo) {
		this.userMobileNo = userMobileNo;
	}

	public String getUserEmailId() {
		return userEmailId;
	}

	public void setUserEmailId(String userEmailId) {
		this.userEmailId = userEmailId;
	}

	public String getUserAddress() {
		return userAddress;
	}

	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}

	public String getUserCity() {
		return userCity;
	}

	public void setUserCity(String userCity) {
		this.userCity = userCity;
	}

	public String getUserPincode() {
		return userPincode;
	}

	public void setUserPincode(String userPincode) {
		this.userPincode = userPincode;
	}

	public String getUserAdharCard() {
		return userAdharCard;
	}

	public void setUserAdharCard(String userAdharCard) {
		this.userAdharCard = userAdharCard;
	}

	public List<booking_info> getBooking_info() {
		return booking_info;
	}

	public void setBooking_info(List<booking_info> booking_info) {
		this.booking_info = booking_info;
	}

	@Override
	public String toString() {
		return "user [userId=" + userId + ", userName=" + userName + ", userUsername=" + userUsername
				+ ", userPassword=" + userPassword + ", userGender=" + userGender + ", userFamilyMembers="
				+ userFamilyMembers + ", userRooms=" + userRooms + ", userMobileNo=" + userMobileNo + ", userEmailId="
				+ userEmailId + ", userAddress=" + userAddress + ", userCity=" + userCity + ", userPincode="
				+ userPincode + ", userAdharCard=" + userAdharCard + "]";
	}

}
