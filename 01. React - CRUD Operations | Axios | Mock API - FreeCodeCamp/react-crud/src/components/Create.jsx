import React from "react";
import { useNavigate } from 'react-router-dom'; // Used for redirect after creating item
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";

const FormExampleForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [checkbox, setCheckbox] = useState(false);

    let navigate = useNavigate(); // Creating navigate (history) with useNavigate hook

	const postData = () => {
		// console.log(firstName);
		// console.log(lastName);
		// console.log(checkbox);
		axios
			.post("https://64705e623de51400f7242278.mockapi.io/fakeData", { // Sending collected data to API to create ressource
				firstName,
				lastName,
				checkbox,
			})
			.then((resData) => {
				console.log(resData);
				navigate('/read') // Redirect without reload
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<Form className="create-form">
				<Form.Field>
					<label>First Name</label>
					<input
						placeholder="First Name"
						onChange={(e) => setFirstName(e.target.value)} // Saving input in PoS
					/>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input
						placeholder="Last Name"
						onChange={(e) => setLastName(e.target.value)}// Saving input in PoS
					/>
				</Form.Field>
				<Form.Field>
					<Checkbox
						label="I agree to the Terms and Conditions"
						onChange={(e) => setCheckbox(!checkbox)} // Saving input in PoS
					/>
				</Form.Field>

				<Button onClick={postData} type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default FormExampleForm;
