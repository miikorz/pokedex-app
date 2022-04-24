export const makePokemonRequest = (url) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let result = {};
  try {
    fetch(
      url,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return result = data;
      });
    return result;
  } catch (error) {
    throw error;
  }
}