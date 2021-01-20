const endPoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};

export async function fetchRates(base = 'USD') {
  const response = await fetch(`${endPoint}?base=${base}`);
  const rates = await response.json();
  return rates;
}

export async function convert(amount, from, to) {
  // check if we have the rates to convert
  if (!ratesByBase[from]) {
    console.log(`Oops, we odn't have ${from} to convert to ${to}.`);
  }
  const rates = await fetchRates(from);
  console.log(rates);
  // store them for the next time
  ratesByBase[from] = rates;
  // convert the amount they pass in
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  return convertedAmount;
}
