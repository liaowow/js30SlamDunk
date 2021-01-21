import wait from 'waait';
import { name } from 'faker';
import { formatDistance, format } from 'date-fns';
import axios from 'axios';
import { intersection, isEqual } from 'lodash';
import to from 'await-to-js';

async function go() {
  console.log('going~');
  await wait(5000);
  console.log('done!');
}
go();

console.log(`Hey ${name.firstName()}`);
const fakeNames = Array.from(
  { length: 10 },
  () => `Hello ${name.firstName()} ${name.lastName()}`
);
console.log(fakeNames);

const diff = formatDistance(new Date(2020, 3, 4, 10, 32, 0), new Date(), {
  addSuffix: true,
});
console.log(diff);
const date = new Date();
const formatted = format(date, `LLLL 'the' do y`);
console.log(formatted);

async function getJoke() {
  const { data } = await axios.get('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(data);
}
getJoke();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [5, 3, 32, 34, 51, 46, 7, 8, 9, 10];
const sameValues = intersection(a, b);
console.log(sameValues);
const person1 = { name: 'ann' };
const person2 = { name: 'ann' };
console.log(isEqual(person1, person2));

function checkIfNameIsAnn(firstName) {
  return new Promise(function (resolve, reject) {
    if (firstName === 'Ann') {
      return resolve('Cool Name!');
    }
    reject(new Error('Bad Name!'));
  });
}
async function checkName() {
  const [err, successValue] = await to(checkIfNameIsAnn('Annie'));
  if (err) {
    console.log(err);
  } else {
    console.log(successValue);
  }
}
checkName();
