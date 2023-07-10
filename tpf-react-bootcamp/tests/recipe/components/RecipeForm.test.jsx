const { render, screen } = require("@testing-library/react")
const { RecipeForm } = require("../../../src/recipe/components")

describe('Probar <RecipeForm />', () => { 
  
  /** Test 1 */
  test('debería de renderizar con campos vacíos si no se le pasan datos', () => { 

    render(<RecipeForm />)

    const title = screen.getByRole('textbox', { name: 'Título' });
    const image = screen.getByRole('textbox', { name: 'Imagen' });
    const description = screen.getByRole('textbox', { name: 'Descripción' });
    const ingredient = screen.getByRole('textbox', { name: 'Agregar un ingrediente' });
    
    expect(title.value).toBe('');
    expect(image.value).toBe('');
    expect(description.value).toBe('');
    expect(ingredient.value).toBe('');
  })

  /** Test 2 */
  test('debería de renderizar los campos con datos que se le pasan al form', () => {

    const recipeData = {
      name: "Receta de hamburguesa",
      description: "Receta casera para cuatro porciones",
      ingredients: [
        { name: 'carne 1kg' },
        { name: 'harina 500gr' },
        { name: 'cebolla 2u' },
      ],
      imagePath: "https://e7.pngegg.com/pngimages/735/271/png-clipart-hamburger-cheeseburger-cartoon-burguer-miscellaneous-food.png",
    }

    render(<RecipeForm recipe={recipeData}/>)

    const title = screen.getByRole('textbox', { name: 'Título' });
    const image = screen.getByRole('textbox', { name: 'Imagen' });
    const description = screen.getByRole('textbox', { name: 'Descripción' });
    const ingredient = screen.getByRole('textbox', { name: 'Agregar un ingrediente' });
    const ingredientList = screen.getAllByRole('listitem');

    expect(title.value).toBe(recipeData.name);
    expect(image.value).toBe(recipeData.imagePath);
    expect(description.value).toBe(recipeData.description);
    expect(ingredient.value).toBe('');
    expect(ingredientList.length).toBe(recipeData.ingredients.length)
  })

})