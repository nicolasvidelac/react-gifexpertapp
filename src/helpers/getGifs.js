export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=HgIn1e8mcQ17yDMx3tOYIUwntGz8M45n&q=${encodeURI(
    category
  )}`;

  return (await (await fetch(url)).json()).data.map(({ title, id, images }) => {
    return {
      title: title,
      id: id,
      url: images.downsized.url,
    };
  });
};
