import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";

const TourCard = (props) => {
	console.log(props);
	return (
		<Grid xs={3}>
			<Paper elevation={2} xs={3}>
				<img src={props.img} className="img" alt="" />
				<Box paddingX={1}>
					<Typography variant="subtitle1" component="h2">
						{props.cardTopic}
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
							5 hours
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
							value={props.rating}
							precision={0.5}
							readOnly
                            size="small"
						/>
					<Typography
							variant="body2"
							component="p"
							marginLeft={0.5}
						>
							{props.rating}
						</Typography>
                        <Typography
							variant="body3" // Das wird als custom variant angelegt. body2 ist das kleinste, wiir müssen kleiner
							component="p"
							marginLeft={0.5}
						>
							({props.reviews} reviews)
						</Typography>
					</Box>
                    <Box>
                    <Typography
							variant="h6"
							component="h3"
							marginTop={0}
						>
							From € {props.price}
						</Typography>
                    </Box>
				</Box>
			</Paper>
		</Grid>
	);
};

export default TourCard;
