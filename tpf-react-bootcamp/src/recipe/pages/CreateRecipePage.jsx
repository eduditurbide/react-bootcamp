import { Alert, Backdrop, CircularProgress, Grid, Typography } from "@mui/material"
import { useRecipes } from "../hooks/useRecipes"
import { RecipeForm } from "../components"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const CreateRecipePage = () => {

  const navigate = useNavigate();
  const {
    onSaveRecipe,
    isLoading,
    hasError,
    errorMessage,
    successMessage,
    savedSuccessfully,
  } = useRecipes()
  
  useEffect(() => {
    if (savedSuccessfully) { 
      navigate('/', {
        replace: true
      })
    }
  }, [savedSuccessfully])
  
  return (
    <>
      <Grid container sx={{ mb: 1 }}>
        <Grid item>
          <Typography variant="h4" component="h1" gutterBottom>Agregar de receta</Typography>
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

        <RecipeForm onSubmit={onSaveRecipe} onCancel={e => navigate('/', { replace: true })} />

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