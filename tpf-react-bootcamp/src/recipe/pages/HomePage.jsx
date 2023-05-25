import { Fab, Grid } from "@mui/material"
import { EmptyView } from "../views"
import { Add } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { RecipeList } from "../components"
import { useRecipes } from "../hooks"

export const HomePage = () => {

  const { recipes } = useRecipes()

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <RecipeList recipes={recipes} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <EmptyView />
        </Grid>
      </Grid>

      <Fab 
        color="default" 
        aria-label="Agregar nueva receta."
        title="Agregar nueva receta"
        sx={{
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
        LinkComponent={Link}
        to="/create"
      >
        <Add />
      </Fab>
    </>
  )
}
