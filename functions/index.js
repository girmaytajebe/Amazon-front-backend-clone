require("dotenv").config();

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Corrected key name

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.get("/", (request, response) => response.status(200).send("Hello, world!"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	console.log("Payment request received for this amount:", total);

	const paymentIntent = await stripe.paymentIntents.create({
	amount: parseInt(total)	,
		currency: "USD",
	});

	// Payment intent created successfully
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// Start server
app.listen(10000, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Listening on port 10000");
	}
});

// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Corrected key name

// // App config
// const app = express();

// // Middlewares
// app.use(cors({ origin: true }));
// app.use(express.json());

// // Routes
// app.get("/", (request, response) => response.status(200).send("Hello, world!"));

// app.post("/payments/create", async (req, res) => {
// 	try {
// 		// Ensure the API key is set before making requests to Stripe
// 		const paymentIntent = await stripe.paymentIntents.create({
// 			amount: 1000, // Replace with your desired amount
// 			currency: "usd", // Replace with your desired currency
// 		});

// 		res.status(201).json({ clientSecret: paymentIntent.client_secret });
// 	} catch (error) {
// 		console.error("Error creating payment intent:", error);
// 		res.status(500).json({ error: "Error creating payment intent" });
// 	}
// });

// // Start server
// app.listen(10000, (err) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("Listening on port 10000");
// 	}
// });
