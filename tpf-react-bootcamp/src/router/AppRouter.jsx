import { Route, Routes } from "react-router-dom"
import { PublicRoutes } from "./PublicRoutes"
import { AuthRoutes } from "../auth/routes"
import { RecipeRoutes } from "../recipe/routes"
import { PrivateRoutes } from "./PrivateRoutes"

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registro */}
      <Route path="/auth/*" element={
        <PublicRoutes>
          <AuthRoutes />
        </PublicRoutes>
      }/>

      {/* RecipesApp */}
      <Route path="/*" element={
        <PrivateRoutes>
          <RecipeRoutes />
        </PrivateRoutes>
      } />

    </Routes>
  )
}
