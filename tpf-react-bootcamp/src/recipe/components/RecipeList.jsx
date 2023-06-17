import { InsertPhotoOutlined, TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useRecipes } from "../hooks/useRecipes"
import { useEffect } from "react"

export const RecipeList = () => {

  const { recipeList, selected, onSelectRecipe, getRecipesList } = useRecipes()

  useEffect(() => {
    getRecipesList()
  }, [])

  return (
    <Box
      component='nav'
      sx={{ flexShrink: { sm: 0 } }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component={'div'}>
          Listado de recetas
        </Typography>
      </Toolbar>

      <Divider />

      <List>
        {(Array.isArray(recipeList) && recipeList.length > 0) && (recipeList.map((recipe) => (
          <ListItem key={recipe._id} disablePadding>
            <ListItemButton 
              sx={{ gap: 3 }}
              onClick={e => onSelectRecipe(selected?._id === recipe._id ? false : recipe._id)}
              selected={selected?._id === recipe._id}
            >
              {recipe?.imagePath && (
                <img src={recipe.imagePath} alt="Img de receta" style={{ height: '45px', width: '45px', objectFit: 'cover' }}/>
              )}
              {!recipe?.imagePath && (
                <InsertPhotoOutlined color="disabled" sx={{ fontSize: 50 }} />
              )}
              <Grid container>
                <ListItemText primary={recipe.name} />
              </Grid>

              <ListItemIcon>
                <IconButton aria-label="mark it" size="large">
                  <TurnedInNot />
                </IconButton>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        )))
        }
      </List>
    </Box>
  )
}
