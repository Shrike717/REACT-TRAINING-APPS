import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

// Custom theme:
const theme = createTheme({
	components: {
		MuiTypography: {
			variants: [
				{
					props: {
						variant: "body2", // Overwrites body2
					},
					style: {
						fontSize: 11,
					},
				},
				{
					props: {
						variant: "body3", // Creates a new variants body3
					},
					style: {
						fontSize: 9,
					},
				},
			],
		},
	},
});

const TourCard = ({ tour }) => {
	console.log(tour);
	return (
		<Grid xs={3}>
			<ThemeProvider theme={theme}>
				<Paper elevation={2} xs={3}>
					<img src={tour.image} className="img" alt="" />
					<Box paddingX={1}>
						<Typography variant="subtitle1" component="h2">
							{tour.name}
						</Typography>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<AccessTime sx={{ width: 12.5 }} />
							<Typography
								variant="body2"
								component="p"
								marginLeft={0.5}
							>
								{tour.duration} hours
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
							}}
							marginTop={3}
						>
							<Rating
								name="half-rating-read"
								value={tour.rating}
								precision={0.5}
								readOnly
								size="small"
							/>
							<Typography
								variant="body2"
								component="p"
								marginLeft={0.5}
							>
								{tour.rating}
							</Typography>
							<Typography
								variant="body3" // Das wird als custom variant angelegt. body2 ist das kleinste, wiir müssen kleiner
								component="p"
								marginLeft={0.5}
							>
								({tour.numberOfReviews} reviews)
							</Typography>
						</Box>
						<Box>
							<Typography
								variant="h6"
								component="h3"
								marginTop={0}
							>
								From € {tour.price}
							</Typography>
						</Box>
					</Box>
				</Paper>
			</ThemeProvider>
		</Grid>
	);
};

export default TourCard;
