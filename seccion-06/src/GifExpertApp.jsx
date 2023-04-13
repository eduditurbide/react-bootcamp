import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

const key = '4yNF6b0LPipY4a3xwTgYnMFWvcwwjwP3'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GIF expert app</h1>
      <AddCategory
        onNewCategory={onAddCategory}
      />
      {
        categories.map(category => (
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  )
}
