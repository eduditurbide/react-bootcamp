import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (

    <AuthLayout tile="Crear cuenta">
      <form>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid>

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
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container direction={'row'} justifyContent={'end'}>
              <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color={'inherit'} to="/auth/login">
                Ingresar
              </Link>
            </Grid>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>

  )
}
