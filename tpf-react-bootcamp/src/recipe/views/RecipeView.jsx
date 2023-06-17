import { useState } from 'react'
import { Delete, Edit, KeyboardArrowDown, MoreVert } from '@mui/icons-material'
import { Button, Divider, Grid, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

export const RecipeView = ({
  _id,
  name,
  description,
  imagePath,
  ingredients,
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

      {/* Title */}
      <Grid item xs={12}>
        <Grid container direction={"row"} sx={{ mb: 1 }} justifyContent={'space-between'} alignItems={'baseline'}>
          <Typography variant="h2" component="h1" gutterBottom>{name}</Typography>
          <IconButton
            aria-label="more"
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
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Delete color='error' />
              </ListItemIcon>
              <ListItemText>Eliminar</ListItemText>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      
      {/* Image */}
      <Grid item xs md={8}>
        <img 
          alt={name} 
          src={imagePath} 
          style={{
            height: "250px",
            width: "auto",
            objectFit: "cover"
          }}/>
      </Grid>

      {/* Description */}
      <Grid item xs={12} mt={2}>
        <Typography variant="body1" sx={{fontWeight: 'bold'}}>Descripción</Typography>
        <Typography variant="body1" gutterBottom>{description}</Typography>
      </Grid>   

      {/* Ingredients */}
      <Grid item xs={12} mt={2}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Ingredientes</Typography>
        <ul>
          {(Array.isArray(ingredients) && ingredients.length > 0) && (
            ingredients.map(ingredient => (
              <li key={ingredient.name}>{ingredient.name}</li>
            ))
          )}
        </ul>
      </Grid>   
    </Grid>
  )
}
