const url = "https://api.api-ninjas.com/v1/cats?name=abyssinian";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "skWgkIInXT9d4AGYTdrkap0JKWW24pDqPC31awQp",
    "Content-Type": "application/json",
  },
};

fetch(url, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Something went wrong!", error);
  });
