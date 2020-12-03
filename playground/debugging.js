const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person) => {
  console.log(person.name);
});

// Console Methods

// Callstack, stack trace

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests
async function fetchDadJoke() {
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await response.text();
  console.log(joke);
  return joke;
}
fetchDadJoke();
// Break On Attribute

// Some Setup Code
