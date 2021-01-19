const fromInput = document.querySelector('[name="from_amount"]');
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toAmount = document.querySelector('.to_amount');
const form = document.querySelector('.app form');
const endPoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) => `
      <option value="${currencyCode}">${currencyCode} - ${currencyName}</option>
    `
    )
    .join('');
}

async function fetchRates(base = 'USD') {
  const response = await fetch(`${endPoint}?base=${base}`);
  const rates = await response.json();
  return rates;
}

async function convert(amount, from, to) {
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

function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

async function handleInput() {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  toAmount.textContent = formatCurrency(rawAmount, toSelect.value);
}

const optionsHTML = generateOptions(currencies);

// populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);
