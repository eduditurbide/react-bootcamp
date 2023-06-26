import { InsertPhotoOutlined, Search, TurnedInNot } from "@mui/icons-material"
import { Backdrop, Box, CircularProgress, Divider, Grid, IconButton, InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Toolbar, Typography } from "@mui/material"
import { useRecipes } from "../hooks/useRecipes"
import { useEffect } from "react"
import { RecipeSearcher } from "./RecipeSearcher"

export const RecipeList = () => {

  const { recipeList, selected, onSelectRecipe, getRecipesList, isLoading } = useRecipes()

  useEffect(() => {
    getRecipesList()
  }, [])
  
  const onSearchRecipe = (word) => { 
    getRecipesList(word)
  }

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
      <RecipeSearcher onSearchEvent={e => onSearchRecipe(e)}/>
      <Divider sx={{ mb: 1 }}/>  

      <List>
        {(Array.isArray(recipeList) && recipeList.length > 0) && (recipeList.map((recipe) => (
          <ListItem 
            key={recipe._id} 
            disablePadding
            secondaryAction={
              <IconButton 
                aria-label="Marcar receta como favorita." 
                edge="end" 
                size="large"
              >
                <TurnedInNot />
              </IconButton>
            }
          >
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
            </ListItemButton>
          </ListItem>
        )))
        }
      </List>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  )
}
