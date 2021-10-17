# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](screenshot/Screenshot.png)

### Links

- Solution URL: [Github.com](https://github.com/DarkPhoenixNinja92/Pod-Request-Access-Landing-Page)
- Live Site URL: [DarkPhoenixNinja92.Github.io](https://darkphoenixninja92.github.io/Pod-Request-Access-Landing-Page/)

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Mobile-first workflow
- JavaScript custom properties

### What I learned

Learned more about using JavaScript to check the contents of a user input field and print custom error messages to the page.
```
```js
if (emailVar.value === '') {
        errorMsg.innerHTML = 'Oops! Please add your email';
    } else if (!testMail.test(emailVar.value)) {
        errorMsg.innerHTML = 'Oops! Please check your email';
    } else {
        errorMsg.innerHTML = '';
    }
```

### Continued development

Would like to focus on modifying the styles when text is printed to the page so that individual elements don't change location when the message shows up to indicate an error.

### Useful resources

- [Stack Overflow](https://stackoverflow.com/questions/39356826/how-to-check-if-it-a-text-input-has-a-valid-email-format-in-reactjs) - Really helpful for figuring out how to check if a value is in the correct format for an email.

## Author

- Website - [Shaun Pour](https://www.shaunpour-dev.com)
- Frontend Mentor - [@DarkPhoenixNinja92](https://www.frontendmentor.io/profile/DarkPhoenixNinja92)
- Twitter - [@codeandcreate92](https://twitter.com/codeandcreate92)