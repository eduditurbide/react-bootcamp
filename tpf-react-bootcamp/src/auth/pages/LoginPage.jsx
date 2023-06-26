
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useForm } from '../../hooks'
import { useLogin } from '../hooks/useLogin'

export const LoginPage = () => {

  const { email, password, onInputChange } = useForm({email: "", password: ""})
  const { isLoading, sendCredentials, hasError, errorMessages} = useLogin()
  
  const onSubmitForm = (event = null) => {
    event?.preventDefault()
    sendCredentials({email, password})
  }

  const onHandleKeyPress = ({ key, keyCode }) => {
    if (key === 'Enter' || keyCode === 13) {
      onSubmitForm()
    }
  }

  return (
    <AuthLayout>

      <Grid container justifyContent={'flex-start'} mb={3}>
        <Grid item>
          <Typography variant='h3' component='h1'>
            Iniciar sesión
          </Typography>
        </Grid>
      </Grid>


      <form>
        <Grid container spacing={2}>
          {hasError && (
            <Grid item xs={12}>
              <Alert severity="error">
                {errorMessages && (
                  <div dangerouslySetInnerHTML={{__html: errorMessages}}/>
                )}
              </Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField
              label="Correo"
              type="email"
              name="email"
              placeholder="usuario@mail.com"
              fullWidth
              value={email}
              onChange={onInputChange}
              onKeyUp={onHandleKeyPress}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              name="password"
              placeholder="Contraseña"
              fullWidth
              value={password}
              onChange={onInputChange}
              onKeyUp={onHandleKeyPress}
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2} sx={{ mb: 2 }} justifyContent={'flex-end'}>
              <Grid item xs={12} sm={6} >
                <Button variant="contained" fullWidth onClick={onSubmitForm} disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Ingresar'}
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
