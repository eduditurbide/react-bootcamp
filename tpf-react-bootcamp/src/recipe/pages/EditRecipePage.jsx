import { Navigate, useNavigate, useParams } from "react-router-dom"
import { Grid, Typography } from "@mui/material"
import { useRecipes } from "../hooks/useRecipes"
import { RecipeForm } from "../components"
import { useEffect, useState } from "react"

export const EditRecipePage = () => {

  const navigate = useNavigate();
  const { id } = useParams()
  const { selected, getRecipeById } = useRecipes()
  const [recipe, setRecipe] = useState(null)

  if (!id) { return <Navigate to='/' /> }

  useEffect(() => {
    getRecipe()
  }, [])

  const getRecipe = async () => { 
    if (selected) { return setRecipe(selected) }
    
    const result = await getRecipeById(id)
    setRecipe(result)
   
    if (!result || result === undefined) { 
      return navigate('/', {
        replace: true
      })
    }
  }
   
  return (
    <Grid container sx={{ mb: 1 }}>
      <Grid item>
        <Typography variant="h4" component="h1" gutterBottom>Edición de receta</Typography>
      </Grid>
      {recipe && (
        <RecipeForm recipe={recipe} />
      )}
    </Grid>
  )
}
