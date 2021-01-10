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
#### VSCode Tools/Extensions
- Text Pastry: Select multiple fields and add numbers from 1 to X. Shortcut key: `cmd+shift+p`

#### Resources
- Regex reference: [regexr.com](https://regexr.com/)
- Package manager 101: [MDN Package management basics](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)