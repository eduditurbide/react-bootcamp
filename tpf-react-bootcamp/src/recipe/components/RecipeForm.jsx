import { Button, Grid, TextField } from "@mui/material"
import { useForm } from "../../hooks"
import { SaveOutlined } from "@mui/icons-material"
import { IngredientForm } from "./ingredient"
import { DeleteButton } from "./DeleteButton"

const initRecipeForm = {
  name: "",
  description: "",
  ingredients: [],
  imagePath: "",
}

export const RecipeForm = ({recipe = null, onSubmit = null, onDelete = null}) => {

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

        {imagePath && ( <img alt="Imagen de receta." src={imagePath} style={{ height: '200px', width: 'auto', mb: 3 }}/> )}

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
              variant="contained" 
              color="primary" 
              sx={{ padding: 1, width: { xs: '100%', sm: 'auto' } }} 
              onClick={onSaveRecipe}
            >
              <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
              Guardar
            </Button>

            {recipe?._id && (
              <DeleteButton
                title="Eliminar receta"
                text={`Estas por eliminar la receta "${recipe.name}", ¿Deseas continuar?`}
                onAgreeClickEvent={e => onDelete ? onDelete(formState) : null}
              />
            )}
          </Grid>
        </Grid>

      </Grid>
    </>
  )
}
