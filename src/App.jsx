import Header from "./Componenet/Header/Header";
import Home from "./Componenet/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Componenet/Login/Login";
import Checkout from "./Componenet/Checkout/Checkout";
import { useEffect } from "react";
import { auth } from "./Componenet/Fairebase/firebase";
import { useStateValue } from "./Componenet/StateProvider/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from './Componenet/Payment/Payment'
import Orders from './Componenet/Orders/Orders'
import Footer from "./Componenet/Footer/Footer";
const promise = loadStripe(
	"pk_test_51OJTqjHRUtmygy7Oix0k9M9zh8kaEjvf5bRSNt7m8U7bKKxziSsFvrmNCTiqGDG8LuTNW9hMfj9jGUITV1ypwIzw00Ipepora6"
);
function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/orders" element={<><Header /><Orders/></>}
					/>
				<Route path="/payment" element={<><Header /><Elements stripe={promise}><Payment /></Elements></>}
					/>
					
					<Route path="/checkout" element={<><Header /><Checkout /></>}
					/>
					<Route path="/" element={<><Header /><Home /></>}
					/>
				</Routes>
				<Footer/>
			</div>
		</Router>
	);
}

export default App;





