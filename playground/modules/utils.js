export function returnHi(name) {
  return `Hi ${name}`;
}

const lastName = 'liao';
const middle = 'YC';
// named imports
export { lastName, middle };
