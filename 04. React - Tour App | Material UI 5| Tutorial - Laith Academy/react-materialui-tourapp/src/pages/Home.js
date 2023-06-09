import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import TourCard from "../components/TourCard";

import cities from "../data.json";

// Test zum Styling
import StyleExamples from "../components/StyleExamples";
import CustomClassnameStyles from "../components/CustomClassnameStyles";

import Schwarzwald from "../assets/images/©DB_200705_Schwarzwald_045.jpg";
import Kroatien from "../assets/images/©DB_200726_Kroatien_470.jpg";
import Frankreich from "../assets/images/©DB_200831_02_Frankreich_149.jpg";
import Portugal from "../assets/images/©DB_200831_04_Portugal_014.jpg";

const Home = () => (
	<>
		<Container sx={{ marginY: 5 }}>
			{cities.map((city) => (
				<>
					<Typography
						variant="h5"
						component="h2"
						marginTop={5}
						marginBottom={3}
						sx={{ fontWeight: "medium" }}
					>
						Top {city.name} Tours:
					</Typography>
					<Grid container spacing={2}>
						{city.tours.map((tour, index) => (
							<TourCard tour={tour} key={index} />
						))}
					</Grid>
				</>
			))}
			{/* <Grid container spacing={2}>
					<TourCard
						img={Schwarzwald}
						cardTopic="Im Schwarzwald"
						rating={4}
						reviews={354}
						price="274"
					/>
					<TourCard
						img={Kroatien}
						cardTopic="In Kroatien"
						rating={4.5}
						reviews={274}
						price="573"
					/>
					<TourCard
						img={Frankreich}
						cardTopic="In Frankreich"
						rating={4}
						reviews={1472}
						price="974"
					/>
					<TourCard
						img={Portugal}
						cardTopic="In Portugal"
						rating={4.5}
						reviews={2742}
						price="482"
					/>
				</Grid> */}

			{/* <StyleExamples />
                <CustomClassnameStyles /> */}
		</Container>
	</>
);

export default Home;
