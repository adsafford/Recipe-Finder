import { useState, useEffect } from "react";
import {
  createTheme,
  ThemeProvider,
  styled,
  Box,
  Container,
  Grid,
  IconButton,
  Input,
  Pagination,
  Typography,
  Stack,
  OutlinedInput,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RecipeCard from "./RecipeCard";
import mainTheme from "./MainTheme";
import "./App.css";
import { grey } from "@mui/material/colors";

const App = () => {
  const info = [
    {
      name: "Pancake and Waffle",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor condimentum lacinia quis vel. Ac turpis egestas integer eget aliquet nibh praesent",
      thumbnail_url:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/360217.jpg",
      id: 1,
    },
    {
      name: "Pancake and Waffle",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor condimentum lacinia quis vel. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Vestibulum lectus mauris ultrices eros in cursus. Dictum fusce ut placerat orci. Dictum non consectetur a erat nam at lectus. Aliquam id diam maecenas ultricies mi eget. Pellentesque adipiscing commodo elit at. Blandit libero volutpat sed cras ornare arcu dui. Quisque non tellus orci ac.",
      thumbnail_url:
        "https://images.unsplash.com/photo-1597117903705-18322e8f997f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      id: 2,
    },
    {
      name: "Pancake and Waffle",
      description:
        "Et netus et malesuada fames ac turpis egestas sed. Enim ut sem viverra aliquet eget sit amet tellus. Sit amet cursus sit amet dictum sit amet justo donec. Eu turpis egestas pretium aenean pharetra magna ac placerat. Feugiat in ante metus dictum at. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Quis imperdiet massa tincidunt nunc pulvinar sapien. Magna etiam tempor orci eu ",
      thumbnail_url:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/360217.jpg",
      id: 3,
    },
    {
      name: "Pancake and Waffle",
      description: "Eu scelerisque felis imperdiet proin fermentum",
      thumbnail_url:
        "https://images.unsplash.com/photo-1596635633339-1fe572f244e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      id: 4,
    },
    {
      name: "Pancake and Waffle",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in iaculis nunc. At ultrices mi tempus imperdiet. Sem integer vitae justo eget magna fermentum. Proin sed libero enim sed faucibus turpis in.",
      thumbnail_url:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/360217.jpg",
      id: 5,
    },
    {
      name: "Pancake and Waffle",
      description:
        "Montes nascetur ridiculus mus mauris vitae ultricies leo. Suspendisse sed nisi lacus sed viverra tellus. Est ultricies integer quis auctor elit sed vulputate mi sit.",
      thumbnail_url:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/360217.jpg",
      id: 6,
    },
    {
      name: "Pancake and Waffle",
      description:
        "Elit eget gravida cum sociis natoque penatibus et. Tortor id aliquet lectus proin. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Aenean euismod elementum nisi quis eleifend quam. Etiam sit amet nisl purus in. ",
      thumbnail_url:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/360217.jpg",
      id: 7,
    },
    {
      name: "Pancake and Waffle",
      description:
        "Nisl pretium fusce id velit ut tortor pretium. Tortor consequat id porta nibh venenatis cras. Cursus in hac habitasse platea.",
      thumbnail_url:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/360217.jpg",
      id: 8,
    },
    {
      name: "Pancake and Waffle",
      description:
        "Ac orci phasellus egestas tellus rutrum tellus pellentesque eu.",
      thumbnail_url:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/360217.jpg",
      id: 9,
    },
  ];

  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      "X-RapidAPI-Key": "",
    },
  };

  // const searchRecipes = (recipeName) => {
  //   fetch(
  //     `https://tasty.p.rapidapi.com/recipes/list?from=0&size=50&q=${recipeName}`,
  //     options
  //   )
  //     .then((response) => {
  //       const data = response.json();
  //       return data;
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setRecipes(data.results);
  //     })
  //     .catch((err) => console.error(err));
  // };

  useEffect(() => {}, []);
  return (
    <div className="app">
      <ThemeProvider theme={mainTheme}>
        <Container sx={{ marginY: 5 }}>
          <Stack alignItems="center">
            <Typography variant="h2">Recipe Finder</Typography>
            <Box display="flex" justifyContent="flex-start">
              <TextField
                margin="dense"
                label="Type recipe here"
                value={searchTerm}
                size="small"
                // onChange={(e) => setSearchTerm(e.target.value)}
              ></TextField>
              <IconButton
                aria-label="search"
                color="secondary"
                // onClick={() => searchRecipes(searchTerm)}
              >
                <SearchIcon />
              </IconButton>
            </Box>

            <Grid container spacing={2}>
              {info.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
              {/* {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))} */}
            </Grid>
            <Pagination
              sx={{ marginY: 10 }}
              count={10}
              color="primary"
              shape="rounded"
              variant="outlined"
            />
          </Stack>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
