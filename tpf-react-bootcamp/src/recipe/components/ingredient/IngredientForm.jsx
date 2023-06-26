import { Grid, Paper, Typography } from '@mui/material'
import { useIngredients } from '../../hooks'
import { IngredientAdd } from './IngredientAdd'
import { IngredientList } from './IngredientList'
import { useEffect } from 'react'

export const IngredientForm = ({ name, ingredientList = [], onIngredientsChange = null }) => {
  
  const { 
    ingredients,
    handleNewIngredient,
    handleDeleteIngredient,
  } = useIngredients( ingredientList )

  useEffect(() => {
    if (onIngredientsChange) {
      onIngredientsChange({target: {name, value: ingredients}})
    }
  }, [ingredients])

  return (
    <Grid container >
      <Typography variant="h5" gutterBottom>Ingredientes</Typography>
      <IngredientAdd onNewIngredient={handleNewIngredient} />

      <Paper variant="outlined" sx={{ width: '100%' }}>
        <Grid container>
          {ingredients && (
            <IngredientList 
              ingredients={ingredients} 
              onDeleteIngredient={handleDeleteIngredient}
            />
          )}
          {(!ingredients || ingredients.length < 1) && (
            <Typography color={'InactiveCaptionText'} ml={2} mb={2}>Lista de ingredientes vacía ...</Typography>
          )}
        </Grid>
      </Paper>
    </Grid>
  )
}

