import { Menu as MenuIcon, ExitToAppOutlined, ArrowRight } from "@mui/icons-material";
import { AppBar,  Box, Button, Chip, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";

export const Navbar = () => {

  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const onLogout = () => {
    handleCloseNavMenu()
    logout()
    navigate('/auth/login', {
      replace: true
    })
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 3,
            mb: '5px',
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Recipes App
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            onClick={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
              <ListItemIcon>
                <ArrowRight fontSize="small" />
              </ListItemIcon>
              Inicio
            </MenuItem>
            <MenuItem component={Link} to="/create" onClick={handleCloseNavMenu}>
              <ListItemIcon>
                <ArrowRight fontSize="small" />
              </ListItemIcon>
              Agregar receta
            </MenuItem>
          </Menu>
        </Box>

        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 3,
            mb: '5px',
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Recipes App
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button component={Link} to="/" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} >
            Inicio
          </Button>
          <Button component={Link} to="/create" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} >
            Agregar receta
          </Button>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Chip sx={{ display: { xs: 'none', md: 'inline-flex' } }} label={<span style={{ color: '#fff' }}>Bienvenido {user.email}</span>} />
          <Button color="error" size="small" onClick={onLogout}>
            <ExitToAppOutlined />
            Salir
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  )
}
