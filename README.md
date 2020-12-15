# js30SlamDunk
Coding along with [Wes Bos' JS course](https://github.com/wesbos/beginner-javascript)

### MODULE#1
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

### MODULE#2

#### Functions
- Functions are defined and called
- Parameter vs. Argument
  - **parameters** are **placeholders**
  - **arguments** are **actual** values
- Function vs. Method
  - A **method** is a **function** that lives inside an **object**
- Callback function
  - A function being passed in to another function, and is called/invoked at a later time

### MODULE#3

#### Closures
- The ability for a child/inner function to access a parent-level scope from a child-level scope even after the parent function has been terminated/closed.

### MODULE#4

#### The DOM
- Adding text node via built-in method: [`element.insertAdjacentText()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText)
- Adding sister elements: [`Element.insertAdjacentElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement)
- Duplicating an element: [`Noce.cloneNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)
