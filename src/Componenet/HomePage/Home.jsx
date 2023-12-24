
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Home.css";
import Product from "../Producut/Product";
import Notice from "../Footer/Notice";
import HomeCarousel from "./HomeCarousel";

function Home() {
	const [products, setProducts] = useState([]);

	async function fetchProducts() {
		try {
			const response = await axios.get("./data.json");
			setProducts(response.data);
			console.log(response);
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			<div className="home">
				<div className="home__container">
					<HomeCarousel />
					<div className="home__row">
						{products.slice(0, 4).map((product) => (
							<Product
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								rating={product.rating}
								image={product.image}
							/>
						))}
					</div>
					<div className="home__row">
						{products.slice(4, 8).map((product) => (
							<Product
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								rating={product.rating}
								image={product.image}
							/>
						))}
					</div>
					<div className="home__row">
						{products.slice(8, 12).map((product) => (
							<Product
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								rating={product.rating}
								image={product.image}
							/>
						))}
					</div>
					<div className="home__row">
						{products.slice(12, 16).map((product) => (
							<Product
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								rating={product.rating}
								image={product.image}
							/>
						))}
					</div>
					<div className="home__row">
						{products.slice(16, 20).map((product) => (
							<Product
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								rating={product.rating}
								image={product.image}
							/>
						))}
					</div>
					<div className="home__row">
						{products.slice(20, 24).map((product) => (
							<Product
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								rating={product.rating}
								image={product.image}
							/>
						))}
					</div>
					<div className="home__row">
						{products.slice(24, 28).map((product) => (
							<Product
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								rating={product.rating}
								image={product.image}
							/>
						))}
					</div>
					<div className="home__row">
						{products.slice(28, 32).map((product) => (
							<Product
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								rating={product.rating}
								image={product.image}
							/>
						))}
					</div>
					<div className="home__row">
						{products.slice(32, 36).map((product) => (
							<Product
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								rating={product.rating}
								image={product.image}
							/>
						))}
					</div>
					<br />
				</div>
				<Notice />
			</div>
		</>
	);
}

export default Home;
