import { Navigate, useNavigate, useParams } from "react-router-dom"
import { Alert, Backdrop, CircularProgress, Grid, Typography } from "@mui/material"
import { useRecipes } from "../hooks/useRecipes"
import { RecipeForm } from "../components"
import { useEffect, useState } from "react"

export const EditRecipePage = () => {

  const navigate = useNavigate();
  const { id } = useParams()
  const { 
    selected, 
    getRecipeById, 
    onSaveRecipe,
    onDeleteRecipe, 
    isLoading,
    hasError,
    errorMessage,
    successMessage,
    deletedSuccessfully,
  } = useRecipes()
  const [recipe, setRecipe] = useState(null)

  if (!id) { return <Navigate to='/' /> }

  useEffect(() => {
    getRecipe()
  }, [])

  useEffect(() => {
    if (deletedSuccessfully) {
      navigate('/', {
        replace: true
      })
    }
  }, [deletedSuccessfully])

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
    <>
      <Grid container sx={{ mb: 1 }}>
        <Grid item>
          <Typography variant="h4" component="h1" gutterBottom>Edición de receta</Typography>
        </Grid>
        
        {(hasError && errorMessage) && (
          <Grid item xs={12} mb={2}>
            <Alert severity="error">
              {errorMessage && (
                <div dangerouslySetInnerHTML={{ __html: errorMessage }} />
              )}
            </Alert>
          </Grid>
        )}

        {(!hasError && successMessage) && (
          <Grid item xs={12} mb={2}>
            <Alert severity="success">
              {successMessage && (
                <div dangerouslySetInnerHTML={{ __html: successMessage }} />
              )}
            </Alert>
          </Grid>
        )}

        {recipe && (
          <RecipeForm recipe={recipe} onSubmit={onSaveRecipe} onDelete={onDeleteRecipe}/>
        )}
      </Grid>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}
