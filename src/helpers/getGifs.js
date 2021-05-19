export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=pA1agwFaFeeEo7VuGIvVUmQkocaIRc40`;
    const response = await fetch(url)
    const { data } = await response.json();

    //console.log(data);

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized.url
        }
    }
    );

    //console.log(gifs);
    return gifs;
}