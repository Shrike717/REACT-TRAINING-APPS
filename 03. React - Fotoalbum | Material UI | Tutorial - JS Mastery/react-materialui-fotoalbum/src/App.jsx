import React from "react";
import {
	Container,
	Button,
	Typography, // For different text elements
	AppBar, // Navbar
	Toolbar, // The blue line in Appbar
	Card,
	CardContent,
	CardActions,
	CardMedia,
	CssBaseline, // Provides Default styling for or App
	Grid,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/Styles";

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AppBar position="relatve">
					<Toolbar>
						<PhotoCamera />
						<Typography variant="h6">Photo Album</Typography>
					</Toolbar>
				</AppBar>
				{/* Semantic tag main. Now we are inside the page */}
				<main>
					<div sx={theme.container}>
						<Container maxWidth="sm" >
							<Typography
								variant="h2"
								align="center"
								color="text.primary"
								gutterBottom
							>
								Photo Album
							</Typography>
							<Typography
								variant="h5"
								align="center"
								color="text.secondary"
								paragraph
							>
								Hello everyone! This is a photo album and I'm
								trying to make this sentence as long as possible
								so we can see how does it llook loke on the
								screen!
							</Typography>
							<div>
								<Grid
									container
									spacing={2}
									display="flex"
									justifyContent="center"
									alignItems="center"
								>
									<Grid item>
										{/* <Button variant="contained" color="primary"> */}
										<Button
											variant="contained"
											// sx={{
											// 	backgroundColor: "success.main",
											// }}
										>
											See my Photos
										</Button>
									</Grid>
									<Grid item>
										<Button
											variant="outlined"
											color="primary"
										>
											Secondary Action
										</Button>
									</Grid>
								</Grid>
							</div>
						</Container>
					</div>
				</main>
			</ThemeProvider>
		</>
	);
};

export default App;
