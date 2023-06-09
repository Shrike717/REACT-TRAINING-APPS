import React from "react";
import { useQuery } from "react-query";
import {
	Container,
	Input,
	Button,
	Dropdown,
	Loader,
	Dimmer,
	Header,
	Grid,
} from "semantic-ui-react";

const MealDetails = ({ mealId, onBackButtonClick }) => {

	// Fetching 1 meal wiith its  mealId from API
	const {
		isLoading,
		error,
		data: meals,
	} = useQuery(["categories", mealId], async (key) => {
		console.log(key);
		const mealId = key.queryKey[1];
		console.log("mealId", mealId);
		let result = await fetch(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
		).then((res) => res.json());
		console.log("result", result);
		return result.meals; // Saving result in variable meals
	});

	if (isLoading)
		return (
			<Dimmer active inverted>
				<Loader inverted content="Loading" />
			</Dimmer>
		);

	if (meals) {
		console.log("meals", meals);
	}
	return (
		<Container>
			<Button secondary onClick={onBackButtonClick}>
				Back
			</Button>
			<h4>{meals[0].strMeal}</h4>

			<Grid divided="vertically">
				<Grid.Row columns={2}>
					<Grid.Column>
						<Header as="h3">Category:</Header>
					</Grid.Column>
					<Grid.Column>
						<p>{meals[0].strCategory}</p>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row columns={2}>
					<Grid.Column>
						<Header as="h3">Instruction:</Header>
					</Grid.Column>
					<Grid.Column>
						<p>{meals[0].strInstructions}</p>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row columns={2}>
					<Grid.Column>
						<Header as="h3">Source:</Header>
					</Grid.Column>
					<Grid.Column>
						<a href={meals[0].strSource}>Source</a>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row columns={2}>
					<Grid.Column>
						<Header as="h3">Video:</Header>
					</Grid.Column>
					<Grid.Column>
						<a href={meals[0].strYoutube} target="_blank">
							Video
						</a>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row columns={1}>
					<Grid.Column>
                        <p>My test for gid columns</p>
						<p>
							Et eu nulla id nisi incididunt labore voluptate elit
							anim esse deserunt consequat enim. Ut magna aute
							commodo ex laborum et ut minim ullamco dolor
							reprehenderit enim excepteur Lorem. Eu fugiat
							voluptate laborum sit ut ut Lorem aliqua.
							Consectetur pariatur proident id incididunt irure
							est exercitation duis elit. Anim incididunt est eu
							amet voluptate Lorem dolore.
						</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default MealDetails;
