import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider/StateProvider";
import StarIcon from "@mui/icons-material/Star";

function CheckoutProduct({
	id,
	title,
	price,
	rating,
	image,
	quantity,
	hideButton,
}) {
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
				quantity: 1,
			},
		});
	};

	const deleteItem = () => {
		dispatch({
			type: "DELETE",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
				quantity: 1,
			},
		});
	};

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}

	// Ensure rating is a valid number
	const starRating =
		typeof rating === "number" && rating > 0 ? Math.floor(rating) : 0;

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="product-img" />

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{truncate(title, 100)}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(starRating)
						.fill()
						.map((_, index) => (
							<small key={index}>
								<StarIcon />
							</small>
						))}
				</div>
				{!hideButton && <p>Qty= {quantity}</p>}
				<br />

				{!hideButton && (
					<button onClick={addToBasket}>
						{" "}
						<strong>+</strong>
					</button>
				)}
				{!hideButton && (
					<button onClick={deleteItem}>
						<strong>-</strong>
					</button>
				)}
				<br />
				<div className="underline"></div>
			</div>
		</div>
	);
}

export default CheckoutProduct;
