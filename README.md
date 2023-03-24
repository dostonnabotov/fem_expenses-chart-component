# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![Screenshot](/public/screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/dostonnabotov/fem_expenses-chart-component)
- Live Site URL: [Live Preview](https://technophile-expenses-chart-component.netlify.app/)

## My process

### Built with

- HTML5
- CSS
- Vanilla JS

Built with [Vite](https://vitejs.dev/) and hosted on [Netlify](https://www.netlify.com/).

### What I learned

Practiced my skills to create a responsive & dynamic chart component with Vanilla JS. Before starting this project, I was playing around with the data and trying to figure out how to dynamically create the chart on CodePen. You can check out my CodePen [here](https://codepen.io/dostonnabotov/pen/MWqqOMz).

If you're interested in how I created the chart, here's a quick overview:

1. Find the highest value in the data array
2. Divide the remaining values by the highest value
3. Multiply the result by 100 to get the percentage
4. Use the percentage to set the height of the bar

If the highest value is 50, and we want to find the height of 20, we would do the following:

```
20 / 50 => 0.4 * 100 => 40%
```

### Continued development

If you have any suggestions on how I can improve my code, please do let me know! I'll always look forward to learning new things.

### Useful resources

- [CSS Guidelines](https://cssguidelin.es/) - High-level advice and guidelines for writing sane, manageable, scalable CSS. Yeah, definitely check it out.

## Author

- Website - [Doston Nabotov](https://flowcv.me/dostonnabotov)
- Frontend Mentor - [@dostonnabotov](https://www.frontendmentor.io/profile/dostonnabotov)
- Twitter - [@dostonnabotov](https://www.twitter.com/dostonnabotov)

## Acknowledgments

- [Kevin Powell](https://youtu.be/KqFAs5d3Yl8) - This helped me understand some of the concepts I was struggling with, like naming variables and using the correct selectors.
