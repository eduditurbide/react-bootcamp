import { AuthProvider } from './auth/context'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'

export const RecipesApp = () => {
  return (
    <AuthProvider>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </AuthProvider>
  )
}
