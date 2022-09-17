package Study.BookMyMaid.Entity;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
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

	@JsonFormat(pattern = "HH:MM:SS")
	@Column(name = "maidTimeSlots")
	private Time maidTimeSlots;

	@Column(name = "maidHolidays")
	private int maidHolidays;

	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "maidId")
	maid MaidBooking;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "user_id")
	user Userbooking;

	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "servicesId")
	services Services;

//	@ManyToOne(fetch = FetchType.EAGER)
//	@JoinColumn(name="user_id")
//	private user user;

	public booking_info() {
		super();
	}

	public booking_info(int bookingInfoId, Date maidBookingDate, Date startDate, Date endDate, int monthCharges,
			Time maidTimeSlots, int maidHolidays) {
		super();
		this.bookingInfoId = bookingInfoId;
		this.maidBookingDate = maidBookingDate;
		this.startDate = startDate;
		this.endDate = endDate;
		this.monthCharges = monthCharges;
		this.maidTimeSlots = maidTimeSlots;
		this.maidHolidays = maidHolidays;
	}

	public booking_info(int bookingInfoId, Date maidBookingDate, Date startDate, Date endDate, int monthCharges,
			Time maidTimeSlots, int maidHolidays, maid maidBooking, user userbooking, services services) {
		super();
		this.bookingInfoId = bookingInfoId;
		this.maidBookingDate = maidBookingDate;
		this.startDate = startDate;
		this.endDate = endDate;
		this.monthCharges = monthCharges;
		this.maidTimeSlots = maidTimeSlots;
		this.maidHolidays = maidHolidays;
		MaidBooking = maidBooking;
		Userbooking = userbooking;
		Services = services;
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

	public Time getMaidTimeSlots() {
		return maidTimeSlots;
	}

	public void setMaidTimeSlots(Time maidTimeSlots) {
		this.maidTimeSlots = maidTimeSlots;
	}

	public int getMaidHolidays() {
		return maidHolidays;
	}

	public void setMaidHolidays(int maidHolidays) {
		this.maidHolidays = maidHolidays;
	}

	public maid getMaidBooking() {
		return MaidBooking;
	}

	public void setMaidBooking(maid maidBooking) {
		MaidBooking = maidBooking;
	}

	public user getUserbooking() {
		return Userbooking;
	}

	public void setUserbooking(user userbooking) {
		Userbooking = userbooking;
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
				+ maidTimeSlots + ", maidHolidays=" + maidHolidays + ", MaidBooking=" + MaidBooking + ", Userbooking="
				+ Userbooking + ", Services=" + Services + "]";
	}

}
