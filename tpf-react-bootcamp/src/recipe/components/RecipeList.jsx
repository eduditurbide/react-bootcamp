import { InsertPhotoOutlined, TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"


export const RecipeList = ({ recipes = [] }) => {
  console.log('recipes', { recipes })

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
        {recipes.map((recipe) => (
          <ListItem key={recipe._id} disablePadding>
            <ListItemButton sx={{ gap: 3 }}>
              {recipe?.imagePath && (
                <img src={recipe.imagePath} alt="Img de receta" style={{ height: '45px', width: '45px', objectFit: 'cover' }}/>
              )}
              {!recipe?.imagePath && (
                <InsertPhotoOutlined color="disabled" sx={{ fontSize: 50 }} />
              )}
              <Grid container>
                <ListItemText primary={recipe.name} />
              </Grid>

              <ListItemIcon onClick={() => alert('hi')} >
                <TurnedInNot />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
