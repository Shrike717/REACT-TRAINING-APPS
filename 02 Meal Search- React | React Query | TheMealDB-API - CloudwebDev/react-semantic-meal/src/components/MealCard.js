import React from "react";
import { Card, Image, Icon, Grid } from "semantic-ui-react";

const MealCard = ({ imageUrl, title, onClick }) => {
	return (
		<Card onClick={onClick}>
			<Image src={imageUrl} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{title}</Card.Header>
			</Card.Content>
		</Card>
	);
};

export default MealCard;
