import { Fab, Grid } from "@mui/material"
import { EmptyView, RecipeView } from "../views"
import { Add } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { RecipeList } from "../components"
import { useRecipes } from "../hooks"

export const HomePage = () => {

  const { selected, isRecipeSelectedOwner } = useRecipes()

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <RecipeList />
        </Grid>

        <Grid item xs={12} sm={8}>
          {selected && (<RecipeView {...selected} isOwner={isRecipeSelectedOwner}/>)}
          {!selected && (<EmptyView />)}
        </Grid>
      </Grid>

      <Fab 
        size={selected ? 'small' : 'medium'}
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
