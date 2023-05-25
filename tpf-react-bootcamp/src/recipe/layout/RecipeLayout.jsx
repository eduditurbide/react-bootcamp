import { Box, Toolbar } from "@mui/material"
import { Navbar } from "../components"

export const RecipeLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <Box component={'main'} sx={{ flexGrow: 1, p:3 }}>
        {/* Toolbar */}
        <Toolbar />

        {/* Pages content */}
        { children }
      </Box>
    </Box>
  )
}
