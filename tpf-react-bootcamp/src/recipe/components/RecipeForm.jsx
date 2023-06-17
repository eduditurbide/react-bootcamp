import { Box, Button, Divider, Grid, IconButton, List, ListItem, ListItemText, Paper, TextField, Typography } from "@mui/material"
import { useForm } from "../../hooks"
import { AddOutlined, Delete, SaveOutlined } from "@mui/icons-material"
import { useState } from "react"
import { IngredientInput } from "./IngredientInput"

const initRecipeForm = {
  name: "",
  description: "",
  ingredients: [],
  imagePath: "",
}

export const RecipeForm = ({recipe = null}) => {

  const { 
    name, 
    description, 
    ingredients, 
    imagePath, 
    onInputChange,
    onInputListChange,
    onAddElementToList,
    onDeleteElementToList,
  } = useForm(recipe || initRecipeForm) 

  const [ingredientToAdd, setIngredientToAdd] = useState("")

  const onAddIngredient = () => { 
    if (!ingredientToAdd || ingredientToAdd.trim() === '') return
    onAddElementToList({ name: 'ingredients', value: { name: ingredientToAdd } })
  }

  const onDeleteIngredient = (ingredient) => { 
    onDeleteElementToList(ingredient)
  }

  return (
    <>
    
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          sx={{ border: 'none', mb: 3 }}
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
          sx={{ border: 'none', mb: 3 }}
          placeholder="Ingrese el link de una imagen"
          label="Imagen"
          name="imagePath"
          value={imagePath}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          sx={{ border: 'none', mb: 3 }}
          multiline
          placeholder="Describe el tipo de comida y los pasos a seguir para preparala ;)"
          label="Descripción"
          name="description"
          value={description}
          onChange={onInputChange}
        />

      </Grid>

      <Typography variant="h5" gutterBottom>Ingredientes</Typography>
      <Grid container 
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent={"space-between"} 
      >
        <Grid item sx={{ width: "100%"}}>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            sx={{ border: 'none', mb: 3 }}
            placeholder="Ingrese un ingrediente"
            label="Agregar un ingrediente"
            name="ingredientToAdd"
            value={ingredientToAdd}
            onChange={({target}) => setIngredientToAdd(target.value)}
          />
        </Grid>

        <Grid item>
          <IconButton color="primary" sx={{ p: 2, ml: 2 }} aria-label="Agregar ingrediente." onClick={onAddIngredient}>
            <AddOutlined />
          </IconButton>
        </Grid>
      </Grid>


      
      <Paper variant="outlined" sx={{ width: '100%' }}>
        <Grid container>
          <List sx={{ width: '100%'}}>
            {ingredients && (ingredients.map( (ingredient, index) => (
              <>
                {index > 0 && (<Divider />)}
                <ListItem key={`${index}-${ingredient.name}`}
                  secondaryAction={
                    <IconButton 
                      edge="end" 
                      aria-label="Eliminar ingrediente."
                      onClick={e => onDeleteIngredient({ name: 'ingredients', index: index })}
                    >
                      <Delete color="error" />
                    </IconButton>
                  }
                >
                  <ListItemText primary={ingredient.name} />
                </ListItem>  
                
              </>
            )))} 
          </List>
        </Grid>
      </Paper>
      

      <Button color="primary" sx={{ padding: 2 }}>
        <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
        Guardar
      </Button>
    </>
  )
}


// <Grid key={`${index}-${ingredient.name}`} container direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{ mb: 1 }}>
//   <Grid item>
//     <TextField
//       type="text"
//       variant="filled"
//       fullWidth
//       sx={{ border: 'none', mb: 3 }}
//       placeholder="Ingrese un ingrediente"
//       name="ingredients"
//       value={ingredient.name}
//       onChange={(e) => {
//         onInputListChange({ index, ...e });
//       }}
//     />
//   </Grid>
//   <Grid item>
//     <IconButton aria-label="Borrar." onClick={e => onDeleteIngredient({ name: 'ingredients', index: index })}>
//       <Delete color="error" />
//     </IconButton>
//   </Grid>
// </Grid>