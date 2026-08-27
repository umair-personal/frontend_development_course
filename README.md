# Day Two - HTML Basics

## Practical Steps

- Create or open an HTML file in VS Code.
- Save the file after every update with Ctrl + S.
- Open the file in a browser to preview the output.
- Refresh the browser to see the latest changes.

## Topics Covered

- Heading tags from `<h1>` to `<h6>`
- Ordered list using `<ol>` and `<li>`
- Table structure using `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>`
- Superscript and subscript using `<sup>` and `<sub>`
- Inline and block-level elements such as `<span>` and `<div>`

## Practice

- Create a simple page with headings, a list, a table, and a few formatting elements.
- Use `<sup>` and `<sub>` to display sample text.
- Compare how `<span>` and `<div>` appear on the page.

## Day Three - HTML Images & Links (2026-07-08)

- Updated HTML/day_03.html: added a local image (`pc_image.jpg`) and an external image, plus anchor links to YouTube and the Day One file.
- Notes: Use `target="_blank"` on external links to open them in a new tab when appropriate.

## Day Four - Semantic & Media Elements (2026-07-09)

### Topics Covered

- **Image elements**: `<img>` with width attributes and alt text
- **Anchor tags**: Creating links to external sites (YouTube, Google)
- **Inline vs Block elements**: `<span>` (inline) and `<div>` (block-level)
- **Embedded content**: `<iframe>` for embedding YouTube videos
- **Interactive elements**: `<button>` for user interactions
- **Media elements**: `<video>` with attributes like `autoplay`, `loop`, and `controls`

### Key Concepts

- Inline elements: `<span>`, `<img>`, `<a>`, `<button>`
- Block elements: `<div>`, `<p>`, `<video>`
- Semantic vs non-semantic elements
- Video player attributes: `width`, `height`, `autoplay`, `loop`, `controls`, `src`

### Practice Activities

- Embedding external media (YouTube iframe)
- Combining images with links
- Using video elements with autoplay and loop
- Working with containers (`<div>`) for layout structuring

## Day Five - HTML Forms (2026-07-13)

- Updated `HTML/day_05.html`: created a registration form with email, password, phone, name, age, checkboxes, radio buttons, and a consent checkbox.
- Reviewed form input types: `email`, `password`, `number`, `text`, `checkbox`, `radio`, and `button`.
- Practiced using labels with form controls and organizing inputs with line breaks for readability.

## Day Six - Embedded Content & Entities (2026-07-14)

- Updated `HTML/day_06.html`: embedded a Google Maps location using an `<iframe>`.
- Explored HTML character entities: `©`, `&#xa9;`, `&#169;`, and emoji characters.
- Reviewed how to use `allowfullscreen`, `loading="lazy"`, `referrerpolicy`, and `style="border:0;"` on embedded content.

## Day Seven - CSS Begins Today (2026-07-15)

- Started CSS lessons and added styling concepts to the course notes.
- Use `CSS/day_07.html` to practice CSS selectors, properties, and layout techniques.

## Day Eight - Basic CSS Styling (2026-07-16)

- Updated `CSS/day_08.html` with a simple class-based styling example.
- Learned how to apply a CSS class to a heading and change its text color.
- Practice idea: try styling multiple headings with the same class.

## Day Nine - Text Formatting in CSS (2026-07-17)

- Updated `CSS/day_09.html` with paragraph text formatting using `font-size`, `font-family`, `font-weight`, `text-align`, `text-transform`, `word-spacing`, and `line-height`.
- Explored the difference between class selectors (`.`) and ID selectors (`#`).
- Practice idea: try changing one property at a time to observe how the paragraph layout changes.

## Day Ten - CSS Margins, Padding, Height, and Width (2026-07-21)

- Updated `CSS/day_10.html` with examples of spacing using `margin` and `padding`.
- Learned how to set individual sides using `margin-top`, `margin-right`, `margin-bottom`, `margin-left`, and the corresponding `padding-*` properties.
- Practiced shorthand syntax such as `margin: 200px 120px 150px 50px;` and `padding: 100px 110px 180px 80px;`.
- Covered `height` and `width` properties to control the size of elements, including examples like `height: 100px;` and `width: 220px;`.
- Observed how spacing, sizing, and box dimensions change the layout around elements and improve visual structure.

## Day Eleven - External CSS (2026-07-22)

- Updated `CSS/day_11.html` to connect an external stylesheet with `<link rel="stylesheet" href="day_11.css">`.
- Learned how to apply a class selector from an external CSS file to style an HTML heading.
- Practiced keeping HTML structure and CSS styling in separate files.

## Day Twelve - Advanced Box Model & Borders (2026-07-23)

- Updated `CSS/day_12.css` with advanced styling techniques for the box model and borders.
- **h1 element styling**: Applied `background-color: aquamarine`, `margin: 100px 80px 50px 150px`, and `padding: 120px` to control spacing.
- **.container class styling**: Demonstrated:
  - Box dimensions: `width: 400px`, `height: 400px`
  - Background and text: `background-color: rgb(162, 118, 61)`, `color: aqua`
  - Individual margins and padding: `margin-left: 100px`, `margin-bottom: 100px`, `padding-top: 80px`, `padding-left: 120px`
  - Typography: `font-size: 40px`, `font-family` (Gill Sans stack), `font-weight: 600`
  - Border styling: `border: 10px solid green` and `border-radius: 40px`
- Explored various commented-out options for `border-style` (dashed, dotted, double, groove) and different `border-radius` values for rounded corners.
- Practice idea: experiment with different border styles and radius combinations to create visually distinct containers.

## Day Fourteen - Flexbox Alignment (2026-07-25)

- Updated `CSS/day_14.html` to practice flexbox alignment with three child boxes.
- Learned that `align-items: center` is the correct property to align flex items vertically in a row.
- Noted that `justify-items` does not apply to flex containers and `align-content` only matters when wrapping or extra cross-axis space exists.
- Practiced centering content inside a flex parent and giving the container enough height for vertical alignment to be visible.

## Day Thirteen Part Two - CSS Background Gradients (2026-07-24)

- Updated `CSS/day_13_part_2.css` and `CSS/day_13_part_2.html` with background gradients.
- Used `background-image: radial-gradient(circle, red 10%, yellow, blue, pink)` to create a radial gradient effect.
- Reviewed how gradients can replace plain background colors and how to layer colors smoothly.
- Practiced by uncommenting alternate gradient examples and testing linear and radial gradient directions.

## Day Fifteen - Responsive Layouts & Grid (2026-07-30)

- Updated `CSS/day_15.html`: examples demonstrating CSS Grid and responsive breakpoints.
- Topics: CSS Grid basics, grid-template-columns, grid-gap, media queries for responsive layouts.
- Practice: convert a multi-column layout to a grid and add a `@media` query to stack columns on small screens.

## Day Sixteen - Shadows & Effects (2026-07-31)

- Updated `CSS/day_16.html` and `CSS/day_16.css` to practice text shadows, box shadows, and image drop shadows.
- Learned how to use `text-shadow` to add depth to heading text.
- Explored `box-shadow` with inset values to create inner shadow effects on a bordered box.
- Used `filter: drop-shadow(...)` to add a shadow behind an image.
- Added a Google Font link for Roboto to improve the visual style of the page.
- Practice idea: experiment with different shadow colors, blur values, and inset/outset combinations.

## Day Seventeen - CSS Positioning (2026-08-01)

- Updated `CSS/day_17.html` to practice different CSS positioning techniques.
- Learned how `position: relative` works as the reference point for positioned child elements.
- Used `position: absolute` to place a box at the bottom-right of a container.
- Explored `position: fixed` to keep a button pinned to the lower-right corner of the viewport.
- Practiced `position: sticky` to keep a heading at the top while scrolling.
- Reviewed the use of `top`, `right`, `bottom`, and `left` to control placement.
- Practice idea: try combining sticky and fixed elements with different layouts to compare scrolling behavior.

## Day Eighteen - Responsive Media Queries (2026-08-04)

- Updated [CSS/day_18.html](CSS/day_18.html) to practice responsive layouts using CSS media queries.
- Built a four-box flex container and adjusted the layout using breakpoints for mobile, tablet, and laptop widths.
- Learned that mobile screens can stack boxes vertically, tablets can display two columns, and larger screens can use a wider layout.
- Reviewed the use of `@media (min-width:...) and (max-width:...)` to create device-specific rules.
- Practice idea: experiment with different breakpoint values and flex wrapping to refine the responsive design.

## Day Nineteen - Practical Review & Exercises (2026-08-06)

- Updated [CSS/day_19.html](CSS/day_19.html) with practical exercises, refinements, and notes for Day 19.
- Topics: review of responsive techniques, accessibility checks, and small layout refinements.
- Practice idea: test the page at multiple viewport widths and iterate on spacing and alignment.



## Day Twenty - CSS Animations (2026-08-06)

- Updated [CSS/day_20.html](CSS/day_20.html) with a basic animation example demonstrating `@keyframes`, `animation-duration`, `animation-timing-function`, and `animation-iteration-count`.
- Topics: creating simple transitions, animating transforms (translate/rotate/scale), and using animation shorthand properties.
- Practice idea: modify the keyframe steps and timings to observe different easing and motion effects; check performance on mobile viewports.

## JavaScript Series - Day 1: Fundamentals (2026-08-14)

- Updated [javascript/index.html](javascript/index.html) with JavaScript basics and fundamentals.
- **Output Methods Covered**:
  - `document.write()` for writing directly to the document
  - `alert()` for showing popup messages
  - `console.log()` for logging to the browser console
- **Variables & Keywords**:
  - Learned three keyword types: `const`, `let`, and `var`
  - Created variables for storing data: `const message`, `let x`, `var y`
  - Performed arithmetic operations: `var sum = x + y`
- **String Operations**:
  - String concatenation using the `+` operator
  - Combined two strings: `const fullname = stdname + fathername`
- **Data Types Covered**:
  - `number` (integers and decimals)
  - `string` (text values)
  - `boolean` (true/false)
  - `object`, `array`, `function`, `symbol`, `bigint` (briefly introduced)
- **Boolean Variables**:
  - Created boolean variables: `isLogin`, `isFollow`, `isPassed` with true/false values
  - Discussed conditional logic: "agar follow ho to button ka text following kr do"
- **Practice Ideas**:
  - Try different data types and observe console output
  - Create more variables and practice concatenation
  - Explore conditional statements using boolean variables

## JavaScript Series - Day 2: Functions & Parameters (2026-08-17)

- Updated [javascript/function.html](javascript/function.html) with JavaScript functions and parameter handling.
- **Function Basics Covered**:
  - Function declarations with the `function` keyword
  - Calling functions multiple times for code reusability
  - Reduced code duplication by using functions instead of repeating similar statements
- **Function Parameters & Arguments**:
  - Created functions with parameters: `function message(msg)` to accept dynamic input
  - Passed arguments when calling functions: `message("Welcome Muneeb")`, `message("Welcome Haris")`
  - Built a `sum(numOne, numTwo)` function to perform calculations with multiple parameters
- **Return Values**:
  - Learned how functions can return values using the `return` keyword
  - Created `add(name)` function to return the parameter value
  - Assigned return values to variables: `const result = add("Umair")`
- **Output Methods with Functions**:
  - Used `alert()` to display return values in a popup dialog: `alert(add("Umair"))`
  - Used `console.log()` to log return values to the browser console
  - Used `document.write()` to write return values directly to the HTML document
- **Practice Ideas**:
  - Create functions with multiple parameters and experiment with different return types
  - Use functions to perform math operations and display results via different output methods
  - Practice combining functions with loops and conditionals for more complex programs

## JavaScript Series - Day 3: Functions & Scope (2026-08-18)

- Continued practicing with [javascript/function.html](javascript/function.html) and reviewed function concepts.
- **Topics Reviewed**:
  - Function reusability and parameter handling
  - Return values and different ways to display them (alert, console.log, document.write)
  - Function calls and the importance of avoiding code repetition
- **Practice Focus**:
  - Reinforced understanding of function parameters and arguments
  - Explored how return values can be captured and used in different contexts
  - Tested different output methods with function results
- **Next Steps**:
  - Practice more complex function scenarios
  - Explore scope and variable accessibility within functions
  - Learn about arrays and loops for iteration

## JavaScript Series - Day 4: JavaScript Operators (2026-08-20)

- Updated [javascript/operators.html](javascript/operators.html) with comprehensive operator examples and practice.
- **Topics Covered**:
  - **Arithmetic Operators**: `+`, `-`, `/`, `*`, `%` (modulo)
  - **Unary Operators**: `++` (increment) and `--` (decrement)
  - **Comparison Operators**: `==` (loose equality), `===` (strict equality), `!==` (strict inequality), `>=`, `<=`, `>`, `<`
  - **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`
  - **Logical Operators**: Basic introduction (to be covered in depth)
- **Key Concepts**:
  - Difference between `==` (checks value only) and `===` (checks value and data type)
  - Understanding type coercion: `10 == "10"` returns `true`, but `10 === "10"` returns `false`
  - Increment/decrement operators and their postfix/prefix behavior

## JavaScript Series - Day 5: Conditions & Decision Making (2026-08-21)

- Updated [javascript/conditions.html](javascript/conditions.html) with examples of conditional statements and decision-making logic.
- **Topics Covered**:
  - `if` statements for single-condition checks
  - `else if` chains for multiple decision branches
  - `else` as the default fallback when no condition matches
  - Grade logic based on marks such as `A`, `B`, `C`, and `Fail`
- **Examples Practiced**:
  - Checking if one number is less than another
  - Verifying a pass/fail boolean state
  - Assigning grade categories using nested conditional logic
- **Key Concept**:
  - Conditions are evaluated in order, and the first true condition in the chain executes.
- **Practice Idea**:
  - Create more mark-based conditions and try different values to observe how each branch works.
  - Using comparison operators to perform boolean evaluations
- **Practice Activities**:
  - Tested arithmetic operations with modulo operator
  - Compared numbers and strings using different equality operators
  - Explored how JavaScript handles type coercion
  - Practiced building conditional logic with comparison operators
- **Next Steps**:
  - Dive deeper into logical operators (`&&`, `||`, `!`)
  - Apply operators in conditional statements (`if`, `else`)
  - Practice using operators in loops and complex expressions

## JavaScript Series - Day 6: Introduction to the DOM (2026-08-24)

- Updated [javascript/dom.html](javascript/dom.html) and [javascript/script.js](javascript/script.js) with an introduction to the Document Object Model.
- **Topics Covered**:
  - Representing data with JavaScript objects and properties
  - Selecting HTML elements with `getElementById()`, `getElementsByClassName()`, and `getElementsByTagName()`
  - Reading element content with `innerHTML`
  - Connecting an external JavaScript file to an HTML page with `<script src="script.js"></script>`
- **Three Ways to Access HTML Elements**:
  1. **`getElementById("ID")`**
     - Selects one element using its unique `id` attribute.
     - Returns the matching element, or `null` if no element has that ID.
     - Example: `const paragraph = document.getElementById("para");`
     - HTML example: `<p id="para">Document Object Model</p>`
  2. **`getElementsByClassName("ClassName")`**
     - Selects all elements that have the specified class name.
     - Returns a live `HTMLCollection`, which can contain zero, one, or many elements.
     - Example: `const headings = document.getElementsByClassName("heading");`
     - Access one result by index: `headings[0]`
     - HTML example: `<h1 class="heading">What is DOM?</h1>`
  3. **`getElementsByTagName("tag")`**
     - Selects all elements with the specified HTML tag name, such as `p`, `h1`, or `button`.
     - Returns a live `HTMLCollection`.
     - Example: `const buttons = document.getElementsByTagName("button");`
     - Access one result by index: `buttons[0]`
     - HTML example: `<button>Click Me</button>`
- **Important Selector Note**:
  - The correct method name is `getElementsByTagName()` with **Elements** plural.
  - `getElementsByTagName()` accepts a tag name only; it does not accept `.className` or `#id` CSS selectors.
  - To use CSS selectors such as `".heading"` or `"#para"`, use `document.querySelector()` for the first match or `document.querySelectorAll()` for all matches.
- **Practice Idea**:
  - Use DOM selectors to update the heading or paragraph when the button is clicked.

## JavaScript Series - Day 7: DOM Selection & Events (2026-08-27)

- Updated [javascript/dom.html](javascript/dom.html) with an inline button click handler that logs a welcome message.
- Updated [javascript/script.js](javascript/script.js) to practice selecting elements by class name and ID.
- Learned how to inspect selected elements with `console.log()` and update paragraph content with `innerText`.
- Reviewed the difference between `innerText` and `innerHTML` when reading or changing element content.

## JavaScript Series - Day 8: JavaScript Events (2026-08-27)

- Added [javascript/event.html](javascript/event.html) to practice handling browser events.
- Selected page elements with `getElementById()` and attached a click event using `addEventListener()`.
- Read the value entered in an input with `input.value` and displayed it in a paragraph using `innerHTML`.
- Practiced updating page text and styles from inside an event callback.


