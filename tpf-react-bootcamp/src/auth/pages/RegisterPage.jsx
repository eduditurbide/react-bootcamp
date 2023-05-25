import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useForm } from '../../hooks'
import { useRegister } from '../hooks/useRegister'

const initForm = { email: "", password: "", rePassword: "" };

export const RegisterPage = () => {
  const { email, password, rePassword, onInputChange } = useForm(initForm)
  const { isLoading, sendCredentials, hasError, errorMessages } = useRegister()
  const [ isPassError, setIsPassError ] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    if (isPassError) return false
    sendCredentials({ email, password })
  }

  const isValidPassword = () => {
    setIsPassError(password !== rePassword)
  }

  return (
    <AuthLayout>

      <Grid container justifyContent={'flex-start'} mb={3}>
        <Typography variant='h3' component='h1'>
          Registro
        </Typography>
      </Grid>

      <form>
        <Grid container spacing={2}>
          {isPassError && (
            <Grid item xs={12}>
              <Alert severity="error">
                <div>Las contraseñas no coinciden.</div>
              </Alert>
            </Grid>
          )}

          {(hasError && errorMessages) && (
            <Grid item xs={12}>
              <Alert severity="error">
                <div dangerouslySetInnerHTML={{ __html: errorMessages }} />
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
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Repita contraseña"
              type="password"
              name="rePassword"
              placeholder="Repita contraseña"
              fullWidth
              value={rePassword}
              onChange={onInputChange}
              onBlur={isValidPassword}
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2} sx={{ mb: 2 }} justifyContent={'flex-end'}>
              <Grid item xs={12} sm={6} >
                <Button variant="contained" fullWidth onClick={onSubmitForm} disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Crear cuenta'}
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container direction={'row'} justifyContent={'end'}>
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
