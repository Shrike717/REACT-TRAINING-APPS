import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // Used for redirect after creating item
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

export default function Update() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [checkbox, setCheckbox] = useState(false);
	const [id, setID] = useState(null);

    let navigate = useNavigate(); // Creating navigate (history) with useNavigate hook

	useEffect(() => {
		let data = localStorage.getItem("data"); // Retrieving data JSON object
		data = JSON.parse(data); // Parse it
		console.log(data);
		// Updating PoS
		setID(data.id);
		setFirstName(data.firstName);
		setLastName(data.lastName);
		setCheckbox(data.checkbox);
	}, []);

	const updateAPIData = () => {
		axios
			.put("https://64705e623de51400f7242278.mockapi.io/fakeData/" + id, {
				firstName,
				lastName,
				checkbox,
			})
			.then((resData) => {
				console.log(resData);
				navigate("/read");
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
						value={firstName} // Set value to populate
						onChange={(e) => setFirstName(e.target.value)} // Update PoS with new value
					/>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input
						placeholder="Last Name"
						value={lastName} // Set value to populate
						onChange={(e) => setLastName(e.target.value)} // Update PoS with new value
					/>
				</Form.Field>
				<Form.Field>
					<Checkbox
						label="I agree to the Terms and Conditions"
						checked={checkbox} // Set value to populate
						onChange={(e) => setCheckbox(!checkbox)} // Update PoS with new value
					/>
				</Form.Field>

				<Button type="submit" onClick={updateAPIData}>
					Update
				</Button>
			</Form>
		</div>
	);
}
