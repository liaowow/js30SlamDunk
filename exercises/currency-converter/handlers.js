import { convert } from './lib.js';
import { formatCurrency } from './utils.js';
import { fromSelect, toSelect, fromInput, toAmount } from './elements.js';

export async function handleInput() {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  toAmount.textContent = formatCurrency(rawAmount, toSelect.value);
}
