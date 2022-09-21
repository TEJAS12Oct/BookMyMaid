package Study.BookMyMaid.Entity;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "booking_info")
public class booking_info {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bookingInfoId")
	private int bookingInfoId;

	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name = "maidBookingDate")
	private Date maidBookingDate;

	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name = "startDate")
	private Date startDate;

	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name = "endDate")
	private Date endDate;

	@Column(name = "monthCharges")
	private int monthCharges;

	@Column(name = "maidTimeSlots")
	private String maidTimeSlots;

	// The FetchType. EAGER tells Hibernate to get all elements of a relationship
	// when selecting the root entity.
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "maidId")
	maid maidId;

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	user userId;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "servicesId")
	services Services;

	public booking_info() {
		super();
	}

	public booking_info(int bookingInfoId, Date maidBookingDate, Date startDate, Date endDate, int monthCharges,
			String maidTimeSlots) {
		super();
		this.bookingInfoId = bookingInfoId;
		this.maidBookingDate = maidBookingDate;
		this.startDate = startDate;
		this.endDate = endDate;
		this.monthCharges = monthCharges;
		this.maidTimeSlots = maidTimeSlots;

	}

	public int getBookingInfoId() {
		return bookingInfoId;
	}

	public void setBookingInfoId(int bookingInfoId) {
		this.bookingInfoId = bookingInfoId;
	}

	public Date getMaidBookingDate() {
		return maidBookingDate;
	}

	public void setMaidBookingDate(Date maidBookingDate) {
		this.maidBookingDate = maidBookingDate;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public int getMonthCharges() {
		return monthCharges;
	}

	public void setMonthCharges(int monthCharges) {
		this.monthCharges = monthCharges;
	}

	public String getMaidTimeSlots() {
		return maidTimeSlots;
	}

	public void setMaidTimeSlots(String maidTimeSlots) {
		this.maidTimeSlots = maidTimeSlots;
	}

	public maid getMaidId() {
		return maidId;
	}

	public void setMaidId(maid maidId) {
		this.maidId = maidId;
	}

	public user getUserId() {
		return userId;
	}

	public void setUserId(user userId) {
		this.userId = userId;
	}

	public services getServices() {
		return Services;
	}

	public void setServices(services services) {
		Services = services;
	}

	@Override
	public String toString() {
		return "booking_info [bookingInfoId=" + bookingInfoId + ", maidBookingDate=" + maidBookingDate + ", startDate="
				+ startDate + ", endDate=" + endDate + ", monthCharges=" + monthCharges + ", maidTimeSlots="
				+ maidTimeSlots + "]";
	}

}
