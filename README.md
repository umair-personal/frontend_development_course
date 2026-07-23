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


