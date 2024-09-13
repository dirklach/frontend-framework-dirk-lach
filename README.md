# friendlycss

**Work in progress**
## My personal approach to write friendly and scalable CSS.
Written by Dirk Lach, Designer and Developer

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

## General › File Structure
- Import the foundations with the help of @use (if needed)
- Divide every component or nested element in a file with a bold divider

```css
@use "../01-foundations" as *;

// ==================================================================
// Components / A Component
// ==================================================================

.c-acomponent {
  display: flex;
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
- …

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
- Like mentioned under »General« you should divide each element of your component with the help of a bold divider:
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
}

// ==================================================================
// Components / A Component > Content
// ==================================================================

.c-acomponent__content {
  display: flex;
}
```

   
