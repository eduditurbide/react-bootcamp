import { Button, Grid, TextField } from "@mui/material"
import { useForm } from "../../hooks"
import { ClearSharp, SaveOutlined } from "@mui/icons-material"
import { IngredientForm } from "./ingredient"
import { DeleteButton } from "./DeleteButton"

const initRecipeForm = {
  name: "",
  description: "",
  ingredients: [],
  imagePath: "",
}

export const RecipeForm = ({
  recipe = null, 
  onSubmit = null, 
  onCancel = null,
}) => {

  const { 
    formState,
    name, 
    description, 
    ingredients, 
    imagePath, 
    onInputChange,
  } = useForm(recipe || initRecipeForm) 

  const onSaveRecipe = () => {
    if (onSubmit) {
      onSubmit(formState)
    }
  }

  const onCancelRecipe = (e) => { 
    if (onCancel) {
      onCancel(e)
    }
  }

  return (
    <>
      <Grid container gap={3}>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          sx={{ border: 'none' }}
          placeholder="Ingrese un título"
          label="Título"
          name="name"
          value={name}
          onChange={onInputChange}
        />

        <TextField
          type="url"
          variant="filled"
          fullWidth
          sx={{ border: 'none' }}
          placeholder="Ingrese el link de una imagen"
          label="Imagen"
          name="imagePath"
          value={imagePath}
          onChange={onInputChange}
        />

        {imagePath && ( 
          <Grid item xs={12} sm={6}>
            <img 
              alt="Imagen de receta." 
              src={imagePath} 
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            /> 
          </Grid>
        )}

        <TextField
          type="text"
          variant="filled"
          fullWidth
          sx={{ border: 'none' }}
          multiline
          placeholder="Describe el tipo de comida y los pasos a seguir para preparala ;)"
          label="Descripción"
          name="description"
          value={description}
          onChange={onInputChange}
        />

        <IngredientForm name="ingredients" ingredientList={ingredients} onIngredientsChange={onInputChange}/>
      
        <Grid item xs={12}>
          <Grid container alignItems={"center"} justifyContent={"center"} gap={2}>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ padding: 1, pr: 2, width: { xs: '100%', sm: 'auto' } }}
              onClick={onCancelRecipe}
            >
              <ClearSharp sx={{ fontSize: 30, mr: 1 }} />
              Cancelar y salir
            </Button>

            <Button 
              variant="contained" 
              color="primary" 
              sx={{ p: 1, pr: 2, width: { xs: '100%', sm: 'auto' } }} 
              onClick={onSaveRecipe}
            >
              <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
              Guardar
            </Button>

          </Grid>
        </Grid>

      </Grid>
    </>
  )
}
