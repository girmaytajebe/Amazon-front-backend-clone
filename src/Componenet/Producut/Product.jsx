

import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider/StateProvider";
import StarIcon from "@mui/icons-material/Star";

function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}

	// Ensure rating is a valid number
	const starRating =
		typeof rating === "number" && rating > 0 ? Math.floor(rating) : 0;

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

	return (
		<div className="product" key={id}>
			<div className="product__info">
				<p>{truncate(title, 100)}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(starRating)
						.fill()
						.map((_, index) => (
							<small key={index} className="star">
								<StarIcon />
							</small>
						))}
				</div>
			</div>
			<img src={image} alt="" />

			<button onClick={addToBasket}>Add to Cart</button>
		</div>
	);
}

export default Product;
