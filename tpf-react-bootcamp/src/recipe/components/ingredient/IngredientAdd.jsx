import { AddOutlined } from "@mui/icons-material"
import { Grid, IconButton, TextField } from "@mui/material"
import { useForm } from "../../../hooks"
import { useRef } from "react"

export const IngredientAdd = ({ onNewIngredient = null}) => {

  const inputRef = useRef()
  const { ingredient, onInputChange, onResetForm } = useForm({
    ingredient: ''
  })

  const onAddIngredient = (e) => {
    e?.preventDefault()
    addIngredient()
  }

  const onHandleKeyPress = ({key, keyCode}) => { 
    if (key === 'Enter' || keyCode === 13) {
      addIngredient()
    }
  }

  const addIngredient = () => { 
    if (ingredient?.trim().length <= 1) { return; }

    const newIngredient = {
      name: ingredient,
    }

    onNewIngredient && onNewIngredient(newIngredient)
    onResetForm()
    inputRef.current.select()
  }

  return (
    <Grid container
      display="flex"
      flexDirection="row"
      flexWrap="nowrap"
      justifyContent={"space-between"}
    >
      <Grid item sx={{ width: "100%" }}>
        <TextField
          inputRef={inputRef}
          type="text"
          variant="filled"
          fullWidth
          sx={{ border: 'none', mb: 3 }}
          placeholder="Ingrese un ingrediente"
          label="Agregar un ingrediente"
          name="ingredient"
          value={ingredient}
          onChange={onInputChange}
          onKeyDown={ onHandleKeyPress }
        />
      </Grid>

      <Grid item>
        <IconButton 
          color="primary" 
          sx={{ p: 2, ml: 2 }} 
          aria-label="Agregar ingrediente." 
          onClick={onAddIngredient}
        >
          <AddOutlined />
        </IconButton>
      </Grid>
    </Grid>
  )
}
