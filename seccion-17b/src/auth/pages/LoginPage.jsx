import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (

    <AuthLayout tile="Login">
      <form>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <TextField 
              label="Correo" 
              type="email" 
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2} sx={{mb: 2}}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ml: 1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container direction={'row'} justifyContent={'end'}>
              <Link component={RouterLink} color={'inherit'} to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>

  )
}
