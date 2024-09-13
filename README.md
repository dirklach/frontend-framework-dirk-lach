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
- - _acomponent.scss
  - _bcomponent.scss
  - _ccomponent.scss
  - _dcomponent.scss
  - _index.scss
  - _xcomponent.scss

---

# Typography

- The following font decisions should only made in the foundations, not in the components itself:
  - - font-family
    - font-weight
    - font-size
    - line-height
    - color
    - transitions
    - hover effects

---

# File Structure

```css
@use "../01-foundations" as *;

// ==================================================================
// Components / A Component
// ==================================================================

.c-acomponent {
  display: flex;
}
```
   
