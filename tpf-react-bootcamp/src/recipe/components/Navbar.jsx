import { Logout, Settings } from "@mui/icons-material";
import { AppBar, Avatar, Divider, Grid, IconButton, ListItem, ListItemIcon, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material"
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";

export const Navbar = () => {

  const { logout } = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    handleClose()
    logout()
    Navigate('/auth/login', {
      replace: true
    })
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container direction={'row'} justifyContent={'space-between'} alignItems={"center"}>
          <Typography variant="h6" noWrap component={'div'}>Recipes App</Typography>

          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }} />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem component={Link} to="/create" onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Agregar
            </MenuItem>
            <MenuItem component={Link} to="/" onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Listar
            </MenuItem>
            <Divider />
            <MenuItem onClick={onLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Cerrar Sesión
            </MenuItem>
          </Menu>

        </Grid>
      </Toolbar>
    </AppBar>
  )
}
