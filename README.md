# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

design/Screenshot (16).png
design/Screenshot (17).png
design/Screenshot (19).png

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Next.js](https://nextjs.org/) - React framework


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
   <span data-value="5" class="span2">5</span>
```

```css
#rating span.active:hover {
    background-color:white;
  
  }
```

```js
selc_id.forEach(selc => {
    selc.addEventListener('click', () => {
      if (selc.classList.contains('active')) {
        // If the clicked span is already active, unselect it
        selc.classList.remove('active');
      } else {
        // Otherwise, remove 'active' from all and set it on the clicked span
        selc_id.forEach(s => s.classList.remove('active'));
        selc.classList.add('active');
        val = selc.dataset.value;
      }
    });
  });

```
## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/utkarshanik)


