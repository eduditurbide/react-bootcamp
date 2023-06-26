import { Delete } from "@mui/icons-material"
import { Box, Divider, IconButton, List, ListItem, ListItemText } from "@mui/material"

export const IngredientList = ({ ingredients = [], onDeleteIngredient = null }) => {
  return (
    <List sx={{ width: '100%' }}>
      {ingredients && (ingredients.map((ingredient, index) => (
        <Box key={`${index}-${ingredient.name}`}>
          {index > 0 && (<Divider />)}
          <ListItem secondaryAction={
            <IconButton
              edge="end"
              aria-label="Eliminar ingrediente."
              onClick={e => onDeleteIngredient(index)}
            >
              <Delete color="error" />
            </IconButton>
          }>
            <ListItemText primary={ingredient.name} />
          </ListItem>

        </Box>
      )))}
    </List>
  )
}
