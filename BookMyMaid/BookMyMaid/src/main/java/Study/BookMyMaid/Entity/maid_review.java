package Study.BookMyMaid.Entity;

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

@Entity
@Table(name = "maid_review")
public class maid_review {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "maidReviewId")
	private int maidReviewId;

	@Column(name = "maidRating")
	private String maidRating;

	@Column(name = "maidComments")
	private String maidComments;

	// The FetchType. EAGER tells Hibernate to get all elements of a relationship
	// when selecting the root entity.
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "maidId")
	private maid maid;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "userId")
	user userBook;

	public maid_review() {
		super();
	}

	public maid_review(int maidReviewId, String maidRating, String maidComments) {
		super();
		this.maidReviewId = maidReviewId;
		this.maidRating = maidRating;
		this.maidComments = maidComments;
	}

	public maid_review(int maidReviewId, String maidRating, String maidComments, Study.BookMyMaid.Entity.maid maid,
			user userBook) {
		super();
		this.maidReviewId = maidReviewId;
		this.maidRating = maidRating;
		this.maidComments = maidComments;
		this.maid = maid;
		this.userBook = userBook;
	}

	public int getMaidReviewId() {
		return maidReviewId;
	}

	public void setMaidReviewId(int maidReviewId) {
		this.maidReviewId = maidReviewId;
	}

	public String getMaidRating() {
		return maidRating;
	}

	public void setMaidRating(String maidRating) {
		this.maidRating = maidRating;
	}

	public String getMaidComments() {
		return maidComments;
	}

	public void setMaidComments(String maidComments) {
		this.maidComments = maidComments;
	}

	public maid getMaid() {
		return maid;
	}

	public void setMaid(maid maid) {
		this.maid = maid;
	}

	public user getUserBook() {
		return userBook;
	}

	public void setUserBook(user userBook) {
		this.userBook = userBook;
	}

	@Override
	public String toString() {
		return "maid_review [maidReviewId=" + maidReviewId + ", maidRating=" + maidRating + ", maidComments="
				+ maidComments + "]";
	}

}
