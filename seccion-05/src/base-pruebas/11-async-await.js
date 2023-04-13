
export const getImagen = async() => {

    try {
        const apiKey = '4yNF6b0LPipY4a3xwTgYnMFWvcwwjwP3';
        // const apiKey = '';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url

    } catch (error) {
        return 'No se encontró la imagen'
    }
    
}
