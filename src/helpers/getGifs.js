export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=7G8MFTrmHIXOSSK0KE6zBKP1f0b8aP8Q&q=${encodeURI(category)}&limit=10`
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    console.log(gifs);

    return gifs;

};