import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";

import ImageCollage from "../components/ImageList";
import AccordionCustom from "../components/AccordionCustom";
import ModalBasic from "../components/Modal";

function Tour() {
	const [value, setValue] = React.useState(0);
	return (
		<Container sx={{ width: 900 }}>
			<Typography variant="h3" component="h1" marginTop={3}>
				Explore the World in Vegas
			</Typography>
			<Box marginTop={3} sx={{ display: "flex" }}>
				<img
					src="https://media.timeout.com/images/105124791/750/422/image.jpg"
					height={325}
					alt="Las Vegas"
				/>
				<ImageCollage />
			</Box>
			<Box>
				<Typography variant="h6" component="h4" marginTop={3}>
					About this ticket:
				</Typography>
				<Typography variant="paraggraph" component="p" marginTop={3}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Distinctio, quibusdam? Quod voluptatem repellat suscipit
					maxime quas! Excepturi reprehenderit sed voluptatibus veniam
					similique adipisci sunt a quos obcaecati id sit ad facilis,
					dolor tenetur deleniti numquam rem quaerat commodi ipsum.
					Ratione.
				</Typography>
			</Box>
			<Box>
				<Typography
					variant="h6"
					component="h4"
					marginTop={3}
					marginBottom={2}
				>
					Frequently Asked Questions:
				</Typography>
				<AccordionCustom />
			</Box>
			<Box height="100px"></Box>
			<Paper
				sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
				elevation={3}
				marginTop={4}
			>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<ModalBasic />
				</BottomNavigation>
			</Paper>
		</Container>
	);
}

export default Tour;
