import React, { useState, Fragment } from "react";
import "./App.css";
import {
	Container,
	Input,
	Button,
	Dropdown,
	Loader,
	Dimmer,
	Card,
} from "semantic-ui-react";

import { useQuery } from "react-query";

import MealCard from "./components/MealCard";
import MealDetails from "./components/MealDetails";

function App() {
	const [currentCategory, setCurrentCategory] = useState(0); // Needed for Dropdown cattegories
	const [selectedMealId, setSelectedMealId] = useState(null); // Neeeded to fetch one meal
	const [searchTerm, setSearchTerm] = useState(""); // Needed to save searchTerm
	const [isSearch, setSearch] = useState(false); // needed to set search  status for coditional  rendering

	// Fetches Categories from API
	const {
		isLoading,
		error,
		data: categories,
	} = useQuery("categories", async () => {
		let result = await fetch(
			"https://www.themealdb.com/api/json/v1/1/categories.php"
		).then((res) => res.json());
		console.log(result);
		// Maps over results and transforms objects the way we need it
		result = result.categories.map((item) => {
			return {
				key: item.idCategory,
				text: item.strCategory,
				value: item.idCategory,
				image: item.strCategoryThumb,
			};
		});
		console.log(result);
		return result; // Stores results in a temp variable named categories
	});

	// Fetches meals in categories from API
	const { data: meals } = useQuery(
		["meals", currentCategory, categories], // Array is made to extract the query parameter for category and append it dynamically
		async (key) => {
			const currentCategory = key.queryKey[1];
			const category = key.queryKey[2][currentCategory].text;
			console.log(key);
			console.log(currentCategory);
			console.log(category);
			let result = await fetch(
				`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
			).then((res) => res.json());
			// console.log(result);
			return result.meals;
		},
		{
			enabled: !!categories,
		}
	);

	// Fetches a meal by its searchTerm from API
	const { data: searchResults } = useQuery(
		["searchMeals", isSearch, searchTerm],
		async (key) => {
			const isSearch = key.queryKey[1];
			console.log(isSearch);
			const searchTerm = key.queryKey[2];
			console.log(searchTerm);
			// When isSearch is true
			if (isSearch) {
				let result = await fetch(
					`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
				).then((res) => res.json());
				console.log("result", result);
				return result.meals;
			} else {
				return [];
			}
		}
	);

	// When Search button is clicked sets PoS isSearch to true
	const onSearch = () => {
		setSearch(true);
	};

	// Updates PoS searchTerm
	const onSearchChange = (e) => {
		// console.log(e.target.value);
		setSearchTerm(e.target.value);
	};

	// Loader Spinner
	if (isLoading)
		return (
			<Dimmer active inverted>
				<Loader inverted content="Loading" />
			</Dimmer>
		);

	// The JSX displayed on page
	return (
		<Container className="container" textAlign="center">
			{selectedMealId ? (
				<MealDetails
					mealId={selectedMealId}
					onBackButtonClick={() => setSelectedMealId(null)}
				/>
			) : (
				<Fragment>
					<div className="top-secion row">
						<Dropdown
							className="drop-down"
							placeholder="Filter Category"
							fluid
							search
							selection
							value={categories[currentCategory].value}
							onChange={(e, { value }) => {
                                // console.log(value); // Value is a string!!
								setCurrentCategory(value - 1); // I removed the [0] after value! Now it shows all categories
								setSearchTerm("");
							}}
							options={categories}
						/>
						<Input
							className="search-input"
							size="large"
							onChange={onSearchChange} // Takes control over input field
							value={searchTerm} // Sets input values back to input field
							placeholder="Search Meal"
						/>
						<Button onClick={onSearch} secondary>
							Search
						</Button>
					</div>

					<Container className="container" textAlign="center">
						<Card.Group itemsPerRow={4} className="card-group">
							{searchTerm && isSearch ? (
								searchResults &&
								searchResults.map((meal) => {
									return (
										<div className="search-card">
											<div className="search-card__card">
												<MealCard
													title={meal.strMeal}
													onClick={() => {
														console.log(
															"meal.idMeal",
															meal.idMeal
														);
														setSelectedMealId(
															meal.idMeal
														);
													}}
													imageUrl={meal.strMealThumb}
												/>
											</div>
											<div className="search-card__buttton">
												<Button
													secondary
													onClick={() => {
														setSearchTerm("");
													}}
												>
													Back
												</Button>
											</div>
										</div>
									);
								})
							) : (
								<Fragment>
									{meals &&
										meals.map((meal) => {
											return (
												<MealCard
													key={meal.idMeal}
													title={meal.strMeal}
													onClick={() => {
														console.log(
															"meal.idMeal",
															meal.idMeal
														);
														setSelectedMealId(
															meal.idMeal
														);
													}}
													imageUrl={meal.strMealThumb}
												/>
											);
										})}
								</Fragment>
							)}
						</Card.Group>
					</Container>
				</Fragment>
			)}
		</Container>
	);
}

export default App;
