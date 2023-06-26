import { useState } from 'react'
import { Delete, Edit, MoreVert } from '@mui/icons-material'
import { Card, CardContent, CardHeader, CardMedia, Grid, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

export const RecipeView = ({
  _id,
  name,
  description,
  imagePath,
  ingredients,
  isOwner,
}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container direction={"column"} sx={{ mb: 1 }}>

      <Card>
        <CardHeader
          action={isOwner && (
            <>
              <IconButton 
                aria-label="Opciones de receta."
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVert />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem component={Link} to={`/edit/${_id}`}>
                  <ListItemIcon>
                    <Edit />
                  </ListItemIcon>
                  <ListItemText>Editar</ListItemText>
                </MenuItem>
              </Menu>
            </>
          )}
          title={name}
        />
        <CardMedia
          component="img"
          height="250"
          width={'auto'}
          image={imagePath}
          alt={name}
        />

        <CardContent>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Descripción</Typography>
          <Typography variant="body2" paragraph gutterBottom>{description}</Typography>

          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Ingredientes</Typography>
          <ul>
            {(Array.isArray(ingredients) && ingredients.length > 0) && (
              ingredients.map(ingredient => (
                <li key={ingredient.name}>
                  <Typography variant="body2" paragraph gutterBottom>{ingredient.name}</Typography>
                </li>
              ))
            )}
          </ul>

        </CardContent>
      </Card>
    </Grid>
  )
}
