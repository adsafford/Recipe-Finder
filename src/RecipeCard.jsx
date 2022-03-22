import { Paper, Grid, Box, Typography } from "@mui/material";
import "./App.css";

const RecipeCard = (props) => {
  let recipe = props.recipe;

  function stripHtml(html) {
    // Create a new div element
    var temporalDivElement = document.createElement("div");
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html;
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
  }

  let description = stripHtml(recipe.description);
  console.log(`Recipe = ${recipe} Recipe Name = ${recipe.name}`);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={2}>
        <img
          src={
            recipe.thumbnail_url
              ? recipe.thumbnail_url
              : "https://via.placeholder.com/400"
          }
          alt={recipe.name}
          className="img"
        ></img>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "1rem",
            textOverflow: "ellipsis",
          }}
        >
          <Typography variant="h4">{recipe.name}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "1rem",
            paddingTop: "0rem",
            textOverflow: "ellipsis",
          }}
        >
          <Typography variant="subtitle1" color="initial">
            {description === ""
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At varius vel pharetra vel turpis nunc eget lorem dolor. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. In est ante in nibh mauris cursus mattis molestie"
              : description}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default RecipeCard;
