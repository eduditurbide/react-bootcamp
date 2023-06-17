import { Navigate, Route, Routes } from "react-router-dom"
import { CreateRecipePage, EditRecipePage, HomePage } from "../pages"
import { RecipeLayout } from "../layout"

export const RecipeRoutes = () => {
  return (
    <RecipeLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateRecipePage />} />
        <Route path="/edit/:id" element={<EditRecipePage />} />

        {/* Rutas que no existan redirige al home */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </RecipeLayout>
  )
}
