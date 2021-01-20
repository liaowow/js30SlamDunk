## js30SlamDunk
Coding along with [Wes Bos' JS course](https://github.com/wesbos/beginner-javascript)

#### Variables
- `var` is function-scoped
- `const` and `let` are block-scoped
- *(Wes Bos' opinion)* use `const` by default, `let` when needed

#### Types
- **SNOB'N'US**
  - **S**tring
  - **N**umber
    - [Floating Points Math (0.1 + 0.2 = ?)](https://0.30000000000000004.com/)
  - **B**oolean
  - **N**ull
    - Value is **intentionally** not set
  - **U**ndefined
    - Value is **accidentally** not set or not yet set
  - **S**ymbol

#### Functions
- Functions are defined and called
- Parameter vs. Argument
  - **parameters** are **placeholders**
  - **arguments** are **actual** values
- Function vs. Method
  - A **method** is a **function** that lives inside an **object**
- Callback function
  - A function being passed in to another function, and is called/invoked at a later time

#### Closure
- The ability for a child/inner function to access a parent-level scope from a child-level scope even after the parent function has been terminated/closed.
#### The DOM
- Adding text node via built-in method: [`Element.insertAdjacentText()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText)
- Adding sister elements: [`Element.insertAdjacentElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement)
- Duplicating an element: [`Node.cloneNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)
- Turning a string into a DOM element: [`Document.createRange()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createRange) and [`Range.createContextualFragment()`](https://developer.mozilla.org/en-US/docs/Web/API/Range/createContextualFragment)

#### `event.target` vs. `event.currentTarget`
- `event.target` is the specific element that actually got clicked
- `event.currentTarget` is the element that fires the event listener, i.e. what the event listener is listening/attached to

#### Maps vs. Objects
- Use `Maps` when you need to maintain the order of the items 
- `Maps` are for storing data, so you cannot have a function inside of a Map

#### `this` Keyword and `call`, `bind`, `apply`
- `this` refers to the instance of an object that a function is bound
- `call`, `bind` and `apply` will change the scope of `this` keyword inside of a function/method
  - Use `bind` if you need a function to be called later
  - Use `call` or `apply` if you need to call the function immediately (`apply` accepts an array as second argument)

#### Promises
- [`Promise.all()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all): will resolve when all of the input's promises have resolved, but will reject when encountering first rejection message / error
- [`Promise.allSettled()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled): returns a promise that resolves after **all** of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise
- [`Promise.race()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race): returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise
- `async` functions will always return a `Promise` themselves

#### Modules
- **named** exports vs. **default** exports
  - named: 
    - need to type the names inside `{ }`
    - you have to import using the exact names defined in the export file
    - you can rename it using `as`
  - default: 
    - no need to put the names in `{ }`
    - you can import using whatever names you want
  - Which one?
    - If your module only does one thing, use **default** 

#### VSCode Tools/Extensions
- Text Pastry: Select multiple fields and add numbers from 1 to X. Shortcut key: `cmd+shift+p`

#### Resources
- Regex reference: [regexr.com](https://regexr.com/)
- Package manager 101: [MDN Package management basics](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)
- How event loops work: [What the heck is event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- CSS loader: [loading.io](https://loading.io/css)