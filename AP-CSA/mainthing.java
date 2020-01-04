
public class mainthing {

	public static void main(String[] args) {
		double sentiment = Review.NetReview("firstReview.txt");
		System.out.print(sentiment);
		System.out.println(" sentiment value");
		System.out.print(Review.starRating(sentiment));
		System.out.println(" star rating");
	}

}
