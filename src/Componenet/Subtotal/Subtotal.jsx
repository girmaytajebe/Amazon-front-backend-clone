

// import React from "react";
// import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";
// import { useNavigate } from "react-router-dom";
// import { useStateValue } from "../StateProvider/StateProvider";

// function Subtotal() {
// 	const [{ basket }] = useStateValue();
// 	const navigate = useNavigate();

// 	const getBasketTotal = (basket) =>
// 		basket?.reduce((amount, item) => item.price + amount, 0);
// 	const getQuantity = (basket) => {
// 		return basket?.reduce((qty, item) => qty + item.quantity, 0);
// 	};

// 	return (
// 		<div className="subtotal">
// 			<CurrencyFormat
// 				renderText={(value) => (
// 					<div>
// 						<p>
// 							Subtotal ({getQuantity(basket)}{" "}
// 							{getQuantity(basket) === 1 ? "item" : "items"}):{" "}
// 							<strong>{value}</strong>
// 						</p>
// 						<small className="subtotal__gift">
// 							<input className="subtotal__input" type="checkbox" />
// 							This order contains a gift
// 						</small>
// 					</div>
// 				)}
// 				decimalScale={2}
// 				value={getBasketTotal(basket)}
// 				displayType={"text"}
// 				thousandSeparator={true}
// 				prefix={"$"}
// 			/>
// 			<button className="subtotal__button" onClick={() => navigate("/payment")}>
// 				Proceed to Checkout
// 			</button>
// 		</div>
// 	);
// }

// export default Subtotal;

import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";

function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();
	const navigate = useNavigate();
	// console.log(basket);
	const getBasketTotal = (basket) =>
		basket?.reduce((amount, item) => amount + item.price * item.quantity, 0);
	const getQuantity = (basket) => {
		return basket?.reduce((qty, item) => qty + item.quantity, 0);
	};

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal ({getQuantity(basket)}{" "}
							{getQuantity(basket) === 1 ? "item" : "items"}):{" "}
							<strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button onClick={(e) => navigate("/payment")}>
				{" "}
				Proceed to Checkout
			</button>
		</div>
	);
}

export default Subtotal;












