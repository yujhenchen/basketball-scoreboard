# Issues and solutions

## `<p>` tag overflows from its flex parent

### Solution
Place the child element to the center of the parent by adding the properties and values `place-items: center;` and  `justify-content: center;` into the parent CSS class.
For example,
```
.score-container {
  display: flex;
  place-items: center;
  justify-content: center;
}

```



## There is extra space around the `<p>` tag
`<p>` tag has default top and bottom margins.

### Solution
Remove the default margins by adding the property and value `margin: 0;`.



## Text in `<p>` tag is not vertical when using **Cursed Timer ULiL** font family
After setting `margin: 0;`, the text is still not vertically centered in the `<p>` tag due to the style of the font family.

### Solution
Further study






# Reference
1. https://stackoverflow.com/questions/20850594/what-is-the-default-margin-value-of-p-tag
2. https://www.shecodes.io/athena/44275-how-to-remove-the-margin-from-a-p-element-using-css
3. https://developer.mozilla.org/en-US/docs/Web/API/setInterval
