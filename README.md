# Boilerplate by Dirk Lach (BBDL BETA)

A simple boilerplate to help set up projects in a clean and scalable way. BBDL offers you a flexible layout system (supports features such as grid, subgrid, media queries, container queries, fluid type scale …) and a structure to make your frontend workflow simple.<br>

| **Version:** OPEN BETA 1 | **Author:** Dirk Lach | Build in Public |
| --- | --- | --- |

BBDL is designed to be easy for developers to use (and read) and reflects the principles of how design concepts (visual systems focused on scalability and modularity) are traditionally developed.<br><br>

**SCSS Folder Structure**:<br>
- **Variables**: A single config file with all variables helps you to keep everything in view (breakpoints, colors, spacings, fonts, font sizes, line heights, font weights, page padding, border radius, speeds, easings, transitions, container and section configuration)
- **Tools**: By default, a breakpoint tool (mixin) is included to make working with media queries easier for you.
- **Generic**: A reset file and global styles for HTML elements without classes.
- **Layout**: A flexible and responsive layout system that supports features like grid, subgrid, media queries, container queries, and alignment.
- **Styles**: All your text styles are organized in one place, grouped by categories such as heading styles, copy styles, and additional styles. You can define base styles and modifier styles for a modular typography system.
- **Components**: Add your individual components.
- **Utilities**: Some tiny helper classes are included (by default, there are margin classes to control the margins for layout parts).
- **Themes**: Overwrite variables within a theme.

**Grid System**:<br>
Grid Features
- Span Columns
- Position Columns (Grid Area)
- Offset Columns
- Responsive Layout Adjustments
- Hide Columns

Subgrid Support
- Inherit the parent grid within child elements

Container Features
- Various Container Sizes
- Align Container
- Full-Width Container

Margin Utility Classes
- Define spacing using utility classes to create layout compositions without the need for individual classes

Debug Tool
- Inspect the sizes of your elements

Grid Preview
- Show and hide the underlying grid, similar to a design tool

Individual Component Classes
- Create custom classes to write individual styles without relying on utility classes

**Demo**:<br>
https://bbdl.vercel.app/ <br>
*This is a very simplified demo, for testing and development purposes during the creation of the framework. A proper demo and documentation will be available soon.*<br>

Created by Dirk Lach, Designer and Developer.<br>
[www.dirklach.com](https://www.dirklach.com)

<!--
Playground: [https://friendlycss.vercel.app/](https://friendlycss.vercel.app/)

---

# Folder structure

- **00-vendor**
- **01-foundations**
  - \_animation.scss
  - \_color.scss
  - \_fonts.scss
  - \_global.scss
  - \_index.scss
  - \_reset.scss
  - \_responsive.scss
  - \_spacing.scss
  - \_helper.scss
  - \_transitions.scss
  - \_type-scale.scss
  - \_typography.scss
  - \_z-index.scss
- **02-components**
  - \_acomponent.scss
  - \_bcomponent.scss
  - \_ccomponent.scss
  - \_dcomponent.scss
  - \_index.scss
  - \_xcomponent.scss

---

# General

## General › Class Naming

- I am using [BEM](https://getbem.com/) to structure my CSS classes.

## General › Nesting (SCSS)

- For readability reasons I avoid nesting my code as soon as I leave a specific part or element.
- I use nested code only for pseudo classes, pseudo elements, and media queries.

## General › File Structure

- Import the foundations with the help of @use (if needed)
- Divide every component or nested element in a file with a bold divider. This help to structure your file and find each part wuickly, while resucing the mental load.

```css
@use "../01-foundations" as *;

// ==================================================================
// Components / A Component
// ==================================================================

.c-acomponent {
  display: flex;
}
```

## General › Declaration order

Choose a style for organizing your CSS declarations based on the needs of each project. I recommend either alphabetical or type-based ordering, as demonstrated in the following example (inspired by Idiomatic CSS).

```css
.selector {
  /* Positioning */
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* Display & Box Model */
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 10px solid #333;
  margin: 10px;

  /* Other */
  background: #000;
  color: #fff;
  font-family: sans-serif;
  font-size: 16px;
  text-align: right;
}
```

---

# Foundations

## Foundations › Animation

- …

## Foundations › Color

- Only use colors which are defined as variables in your foundations

## Foundations › Fonts

- …

## Foundations › Global

- …

## Foundations › Index

- Sort your imports alphabetically

```scss
@forward "breadcrumb";
@forward "card";
@forward "facts";
@forward "footer";
@forward "headerbar";
@forward "heading";
@forward "hero";
@forward "marquee";
@forward "metabar";
@forward "section";
@forward "subheading";
```

## Foundations › Reset

- …

## Foundations › Responsive

- …

## Foundations › Spacing

- …

## Foundations › Helper

- …

## Foundations › Transitions

- …

## Foundations › Type Scale

- …

## Foundations › Typography

- The following font decisions should only made in the foundations, not in the components itself:
  - font-family
  - font-weight
  - font-size
  - line-height
  - color
  - transitions
  - hover effects

## Foundations › z-index

- …

---

# Components

## Components › File Structure

- As mentioned under ‘General,’ you should separate each element of your component using a bold divider.

```css
// ==================================================================
// Components / A Component
// ==================================================================

.c-acomponent {
  display: flex;
}

// ==================================================================
// Components / A Component > Title
// ==================================================================

.c-acomponent__title {
  display: flex;

  &::before {
    content: "—";
  }
}

// ==================================================================
// Components / A Component > Content
// ==================================================================

.c-acomponent__content {
  display: flex;

  &:hover {
    border: 1px solid red;
  }
}
``` -->
