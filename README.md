# FriendlyCSS

**My very own approach to writing friendly and scalable CSS.**

⚠️**WIP**⚠️ This is a living document, based on best practices and personal experience.
Written by Dirk Lach, Designer and Developer.

---

# Folder structure

- **00-vendor**
- **01-foundations**
  - _animation.scss
  - _color.scss
  - _fonts.scss
  - _global.scss
  - _index.scss
  - _reset.scss
  - _responsive.scss
  - _spacing.scss
  - _helper.scss
  - _transitions.scss
  - _type-scale.scss
  - _typography.scss
  - _z-index.scss
- **02-components**
  - _acomponent.scss
  - _bcomponent.scss
  - _ccomponent.scss
  - _dcomponent.scss
  - _index.scss
  - _xcomponent.scss

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
    content: "—"
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
```

   
