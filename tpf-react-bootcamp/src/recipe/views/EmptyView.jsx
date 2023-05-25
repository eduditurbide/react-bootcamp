import { MenuBook, MenuBookOutlined } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const EmptyView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: 'calc(100vh - 120px)', backgroundColor: 'primary.main', borderRadius: 3 }}>

      <Grid item xs={12} mb={2}>
        <MenuBookOutlined sx={{ fontSize: 100, color: 'white' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color={'white'} variant="h5">
          Selecciona o crea una receta
        </Typography>
      </Grid>

    </Grid>
  )
}
