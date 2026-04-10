function getAllAnimalsByLetter(letter) {
  let offset = 0;
  let allResults = [];

  const url = `https://api.api-ninjas.com/v1/cats?name=${letter}`;
  return fetch(url, {
    headers: { "X-Api-Key": "skWgkIInXT9d4AGYTdrkap0JKWW24pDqPC31awQp" },
  })
    .then((respone) => respone.json())
    .then((data) => {
      if (data.length > 0) {
        allResults.push(...data);
        offset += 20; //Move to the next page
      }

      console.log(
        `Found ${allResults.length} cats with names starting with "${letter}"`,
      );
      console.log(allResults);
    });
}
