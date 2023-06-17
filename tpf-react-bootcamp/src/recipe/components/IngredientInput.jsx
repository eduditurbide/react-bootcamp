import { useState } from 'react'
import { TextField } from '@mui/material'

export const IngredientInput = ({ name = "", value = "", onBlurEvent = null }) => {
  const [ingredientValue, setIngredientValue] = useState(value || "")
  
  return (
    <TextField
      type="text"
      variant="filled"
      fullWidth
      sx={{ border: 'none', mb: 3 }}
      placeholder="Ingrese un ingrediente"
      name={name}
      value={ingredientValue}
      onChange={({ target }) => setIngredientValue(target.value)}
      onBlur={e => onBlurEvent(e)}
    />
  )
}
