# Sprinkle Cursor

![1](https://github.com/abdul-1432/Sprinkle_Cursor/assets/124916666/ac97f1f9-f3dd-4597-a062-5d3e602b87b0)







Sprinkle Cursor is a fun and interactive cursor effect created using HTML, CSS, and JavaScript. When users move their mouse cursor on the web page, it leaves behind a trail of colorful sprinkles, adding a delightful touch to the user experience.

## Demo

Check out the live demo of Sprinkle Cursor [here](https://codepen.io/abdul-1432/pen/KKrrQmB).

## Features

- Interactive and engaging cursor effect
- Colorful sprinkles that follow the mouse cursor
- Customizable sprinkle colors and sizes
- Lightweight and easy to integrate into any web project
- Compatible with modern web browsers

## Getting Started

To use Sprinkle Cursor on your website, follow these steps:

1. Download the project files from the [GitHub repository](https://github.com/abdul-1432/Sprinkle_Cursor).

2. Include the required CSS and JavaScript files in your HTML file:

```html
<!-- Add the stylesheet -->
<link rel="stylesheet" href="path/to/sprinkle-cursor.css">

<!-- Add the JavaScript -->
<script src="path/to/sprinkle-cursor.js"></script>
```

3. Create a container element (e.g., a `<div>`) on your web page where the sprinkle effect will be applied:

```html
<div class="sprinkle-container"></div>
```

4. Initialize the sprinkle cursor effect:

```html
<script>
  document.addEventListener("DOMContentLoaded", function () {
    SprinkleCursor.init(".sprinkle-container");
  });
</script>
```

5. Customize the sprinkle colors and sizes (optional):

Edit the `sprinkle-cursor.css` file to modify the appearance of the sprinkles.

```css
/* Customize sprinkle colors */
.sprinkle {
  background-color: #ff0000; /* Replace with your desired color */
}

/* Customize sprinkle size */
.sprinkle {
  width: 10px; /* Replace with your desired size */
  height: 10px; /* Replace with your desired size */
}
```

6. That's it! Save your changes, and now the sprinkle cursor effect should be active on your web page.

## Contributing

If you want to contribute to this project, you're welcome to submit pull requests or open issues in the [GitHub repository](https://github.com/abdul-1432/Sprinkle_Cursor). We appreciate your help in making Sprinkle Cursor even better!

## License

This project is licensed under the [MIT License](LICENSE), which means you can use it freely in personal and commercial projects.

## Acknowledgments

- The idea for this project was inspired by [example-website](https://example.com/).

## Contact

If you have any questions, suggestions, or just want to say hi, you can reach us at [gafoor.mngr@gmail.com](mailto:gafoor.mngr@gmail.com).

---

Thank you for using Sprinkle Cursor! We hope it adds a touch of whimsy to your website and enhances your users' experience. Enjoy the colorful sprinkles! 🌈✨
