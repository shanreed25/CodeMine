# CSS

## Fundamentals
What CSS is: CSS (Cascading Style Sheets) is a language used to style and format web pages (described by HTML). It dictates how elements are displayed on screen, paper, or other media.
Syntax: CSS uses rule sets consisting of a selector (targets HTML elements) and a declaration block (styles applied to those elements).
Selectors: Patterns used to select HTML elements to style. Examples include element type, class, ID, attribute, pseudo-classes, and pseudo-elements.
Declarations: Property-value pairs within the declaration block that define how an element should be styled (e.g., color: blue;).
Properties: Style features that can be changed (e.g., color, size, font).
Values: The specific style to be applied to a property (e.g., red, 12px).
The Box Model: A fundamental concept describing how elements are sized and spaced. Every element is a rectangular box with properties like content, padding (space around content), border (line around padding), and margin (space outside the border).
The Cascade, Specificity, and Inheritance: CSS styles are applied in a "cascade" where multiple rules can apply to the same element.
The Cascade: Determines which styles take precedence when multiple rules conflict.
Specificity: Rules with higher specificity override those with lower specificity (e.g., ID selectors have higher specificity than class selectors).
Inheritance: Child elements can inherit properties from their parent elements. 
## Styling
Typography: Controlling text appearance (font family, size, weight, line-height, text decoration, etc.).
Colors: Specifying colors using various formats (RGB, hex codes, color names, transparency, gradients).
Backgrounds: Setting background colors, images, and repeating patterns.
Borders: Creating visible outlines around elements. 
## Layout
Display and Positioning: Controlling how elements are displayed and their position on the page. Includes concepts like block, inline, and flexbox models.
Flexbox: A one-dimensional layout model for arranging items in a container.
CSS Grid: A two-dimensional layout model for creating complex grid-based layouts with rows and columns.  
## Advanced Concepts
Responsive Design: Techniques for adapting layouts and styles to different screen sizes and devices using media queries.
Animations and Transitions: Creating smooth animations and transitions between element states.
Pseudo-classes and Pseudo-elements: Styling elements based on their state (e.g., :hover) or specific parts of an element (e.g., ::first-line).
Z-index: Controlling the stacking order of elements.
User Interface: Properties specifically designed to enhance the user interface (e.g., resizing elements).
Blend Modes: Creating visual effects by blending the background and foreground colors of elements. 
## Best Practices & Organization
External Stylesheets: Storing CSS code in separate .css files for better organization and reusability.
Selector Lists: Grouping selectors with the same style definitions to minimize code.
Code Organization: Writing clean and efficient code, avoiding duplication.  
By understanding these categories, you can build a solid foundation for learning and mastering CSS. Remember to practice and explore documentation like the MDN Web Docs to deepen your knowledge. 
----------------------------------------------------------------------------
# Dash
Depending on your needs, you might consider using an "en dash" (–) or "em dash" (—) as they are generally longer than a regular hyphen. However, this won't directly lower the dash's position on the line, but it might change the visual appearance depending on the desired outcome. 
```style="vertical-align: sub; font-size: 0.8em;"```
- vertical-align: sub;: This CSS property lowers the element to the subscript position, effectively dropping it below the baseline of the surrounding text.
- font-size: 0.8em;: This reduces the size of the dash slightly, which can enhance the visual effect of it being a subscript. You can adjust this value to your preference. 

# Bottom Border
border bottom syntax
The border-bottom property in CSS is a shorthand property used to define the bottom border of an element. It allows you to set the width, style, and color of the bottom border in a single line of code. 
The syntax is as follows: 
css
border-bottom: <border-width> <border-style> <border-color>;
Use code with caution.

Here's a breakdown of the individual components and their options:
1. border-width
Keywords:
thin: Specifies a thin bottom border.
medium: Sets a medium border width (default).
thick: Sets a thick border width.
Length values: You can specify the width using explicit length units like px, em, rem, etc.
Example: border-bottom: 2px solid blue; 
2. border-style
Keywords:
none: Specifies no border (default).
hidden: Similar to none, but can affect border conflict resolution in tables.
dotted: Specifies a dotted border.
dashed: Specifies a dashed border.
solid: Specifies a solid border.
double: Specifies a double border.
groove: Creates a 3D grooved effect.
ridge: Creates a 3D ridged effect.
inset: Creates a 3D inset effect.
outset: Creates a 3D outset effect.
initial: Sets the property to its default value.
inherit: Inherits the value from the parent element. 
3. border-color
Color values: You can use color names, hexadecimal codes, or RGB values to specify the color.
Example: border-bottom: medium dashed blue;
transparent: Makes the border transparent.
initial: Sets the property to its default value.
inherit: Inherits the value from the parent element. 
Example:
css
/* Sets a 2px solid blue bottom border */
selector {
  border-bottom: 2px solid blue;
}
Use code with caution.

Important Notes:
The order of the values (border-width, border-style, border-color) doesn't matter when using the shorthand border-bottom property.
You can omit one or two of the values in the shorthand property, and the omitted values will take their default values.
If you don't specify the border-style, the border won't be displayed, as the default style is none.
Always declare the border-style or border-bottom-style before specifying the border-bottom-width or border-bottom-color. 