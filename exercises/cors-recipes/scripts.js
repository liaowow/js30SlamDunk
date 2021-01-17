const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
async function fetchRecipes(query) {
  const response = await fetch(`${proxy}${baseEndpoint}/?q=${query}`);
  const data = await response.json();
  console.log(data);
}
fetchRecipes('pizza');
