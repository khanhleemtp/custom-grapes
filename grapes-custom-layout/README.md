Ctrl + Alt + R

- Component
  - Component definition (Stack - lifo) -> final data (HTML, string)
  - Component Recognition
  - Render in canvas (control by View) (nothing to do with final data)
  - View sync ~ Model
  - Modal: Define Component

/_
With this code, the editor will be able to understand simple text <input>s, assign default attributes and show some trait for a better attribute handling.
_/

```javascript
editor.DomComponents.addType("my-input-type", {
  // Make the editor understand when to bind `my-input-type`
  isComponent: (el) => el.tagName === "INPUT",

  // Model definition
  model: {
    // Default properties
    defaults: {
      tagName: "input",
      draggable: "form, form *", // Can be dropped only inside `form` elements
      droppable: false, // Can't drop other elements inside
      attributes: {
        // Default attributes
        type: "text",
        name: "default-name",
        placeholder: "Insert text here",
      },
      traits: ["name", "placeholder", { type: "checkbox", name: "required" }],
    },
  },
});
```

- isComponent
  - example:
    When i add component
    isComponent func, we need it to make the editor understand <input> during recognition step
  ```javascript
  editor.addComponents(`<input name="my-test" title="hello"/>`);
  ```
  - result Component Definition
  ```javascript
  {
    type: "my-input-type";
    attributes: {
      name: 'my-test',
      title: 'hello'
    }
  }
  ```
  /_
  KEEP isComponent as simple possible
  _/
