import { Clear, Search } from '@mui/icons-material'
import { Grid, IconButton, InputAdornment, InputBase, TextField } from '@mui/material'
import React, { useRef } from 'react'
import { useForm } from '../../hooks'

export const RecipeSearcher = ({ onSearchEvent = null}) => {

  const searchInputRef = useRef()

  const { 
    toSearch, 
    onInputChange,  
    onResetForm,
  } = useForm({
    toSearch: ''
  })

  const onSearch = (e) => {
    e?.preventDefault()
    onSearchInRecipeList()
  }

  const onHandleKeyPress = ({ key, keyCode }) => {
    if (key === 'Enter' || keyCode === 13) {
      onSearchInRecipeList()
    }
  }
  
  const onSearchInRecipeList = () => {
    if (toSearch?.trim().length <= 1) { return; }
    onSearchEvent(toSearch)
    searchInputRef.current.focus()
  }

  const onClear = () => { 
    onResetForm()
    onSearchEvent(null)
    searchInputRef.current.focus()
  }

  return (
    <Grid container alignItems={"center"} m={1}>
      <InputBase 
        inputRef={searchInputRef}
        variant="standard"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscador de recetas"
        inputProps={{ 'aria-label': 'Buscador de recetas.' }}
        name='toSearch'
        value={toSearch}
        onChange={onInputChange}
        onKeyUp={onHandleKeyPress}
        endAdornment={ toSearch && (
          <InputAdornment position="end">
            <IconButton
              aria-label="Eliminar filtro de búsqueda."
              onClick={onClear}
              edge="end"
            >
              <Clear color="neutral" />
            </IconButton>
          </InputAdornment>
        )}
      />
      <IconButton 
        type="button" 
        sx={{ p: '10px' }} 
        aria-label="search"
        onClick={onSearch}
      >
        <Search />
      </IconButton>
    </Grid>
  )
}
