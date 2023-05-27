import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Setting unique key when mapping

const TableExampleApprove = () => {
	const [APIData, setAPIData] = useState([]);

	// Component gets all data when first loaded
	useEffect(() => {
		axios
			.get("https://64705e623de51400f7242278.mockapi.io/fakeData")
			.then((response) => {
				setAPIData(response.data); // Updating PoS Array with all data from DB
			});
	}, []);

    // We need to fetch all data once again to update page after deleting an item:
    const getData = () => {
        axios
        .get("https://64705e623de51400f7242278.mockapi.io/fakeData")
        .then((response) => {
            setAPIData(response.data); // Updating PoS Array with all data from DB
        });
    }

	// When click on Update Button:
	const setData = (data) => {
		console.log(data);
		localStorage.setItem("data", JSON.stringify(data)); // Setting data object as JSON in localstorage to populate update form
	};

	// When click on Delete Button:
	const onDelete = (id) => {
		axios
			.delete(
				`https://64705e623de51400f7242278.mockapi.io/fakeData/${id}`
			)
			.then((resData) => {
				console.log(resData);
                getData(); // Reloading all data again after deletng a field
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Table singleLine>
				<Table.Header className="table__table-header">
					<Table.Row >
						<Table.HeaderCell>First Name</Table.HeaderCell>
						<Table.HeaderCell>Last Name</Table.HeaderCell>
						<Table.HeaderCell>Checked</Table.HeaderCell>
						<Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body className="table__table-body">
					{APIData.map((data) => {
						return (
							<Table.Row key={uuidv4()}>
								<Table.Cell>{data.firstName}</Table.Cell>
								<Table.Cell>{data.lastName}</Table.Cell>
								<Table.Cell>
									{data.checkbox ? "Checked" : "Unchecked"}
								</Table.Cell>
								<Table.Cell>
									<Link to="/update">
										<Button onClick={() => setData(data)}>
											Update
										</Button>
									</Link>
								</Table.Cell>
								<Table.Cell>
									<Button onClick={() => onDelete(data.id)}>
										Delete
									</Button>
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
			<div className="centered">
				<Link to="/create">
					<Button>Create</Button>
				</Link>
			</div>
		</>
	);
};

export default TableExampleApprove;
