# Theme Switcher using HTML, CSS, JS
### This project is made by following Fireship's video
You can watch the video [here](https://www.youtube.com/watch?v=rXuHGLzSmSE&list=PL0vfts4VzfNjfHKRKkMjm_xUXglH6HtL1&index=1&t=389s)

### Important Concepts learnt in this video:
- Making a Navbar and also a Sub Menu using pure CSS
- CSS Clip Path Property
- CSS Transitions 
- CSS Variables
- Basic Keyframe Animation

### Important concepts while implementing this project:

- `list-style-type: none;`
Removes the default list styles

- `color: currentColor;`
Sets the current color to the nearest defined color

- `text-decoration: none;`
Remove the default underline from the link

- The clip-path property lets you clip an element to a basic shape or to an SVG source.
    - https://bennettfeely.com/clippy/ is a good website to automatically generate the CSS code 

- An element with greater z index will appear on top of the other element

- To target the highest level in the DOM, use the root selector:
    - ``` :root {--gray0: #f8f8f8;} ```


- When we click on Theme tab in the Navbar, we have to set the opacity of Sub-menu to 1. So we will use the `focus-within` pseudo selector on the Menu and set the opacity of Sub-menu to 1 there

- But the above transition is abrupt, so we will apply `transition: opacity .15s ease-out;` to the original sub-menu styles

- >Apply transition to the element and not on the focus within selector!

- We can give background in the form of gradient also. 
    - `background-image: linear-gradient(direction, color-stop1, color-stop2, ...);`

- `hue_rotate(angle)` function rotates the hue of an element abd its content 
- https://coolors.co/palettes/trending is a great resource for color palettes

### An example of CSS Keyframe:
```
@keyframes myAnimation {
  0%   {background: red;}
  25%  {background: blue;}
  50%  {background: yellow;}
  75%  {background: green;}
  100% {background: red;}
}

button:hover {
    animation: myAnimation
}
```
