export async function handleButtonClick() {
  const currenciesModule = await import('./currencies.js');
  console.log(currenciesModule.currencies);
}
