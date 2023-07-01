## css pt 1 (in html)
- link your css to https://www.bootstrapcdn.com
- buttons from https://getbootstrap.com/docs/4.0/components/buttons/
- to `<button type="button" class="btn btn-primary">Primary</button>` add `onclick="changeColors()"` before type

## css pt 2 (in css)
- declare the container as full page 

## javascript

The code defines a variable index and initializes it to 0. There is also a function changeColors() defined. Inside the function, there is an array colors containing several color values.

The function selects the <body> element of the document using getElementsByTagName("body")[0] and changes its style.background property to the color at the current index in the colors array. After updating the background color, the index is incremented by 1.

If the index becomes greater than the last index of the colors array (colors.length - 1), it is reset to 0 to start the color rotation from the beginning.