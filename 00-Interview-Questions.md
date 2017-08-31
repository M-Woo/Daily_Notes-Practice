LIFO - Last in first out
FILO - first in last out

If Else - Ternary Operator

Compile vs Transpile

Method - Action that can b performed on objects

## General Questions ================

What did you learn yesterday/this week?

What excites or interests you about coding?

What is a recent technical challenge you experienced and how did you solve it?

What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?

Talk about your preferred development environment.

Which version control systems are you familiar with?

Can you describe your workflow when you create a web page?

If you have 5 different stylesheets, how would you best integrate them into the site?

Can you describe the difference between progressive enhancement and graceful degradation?

Describe how you would create a simple slideshow page, without any frameworks (HTML/CSS/JS only).

If you could master one technology this year, what would it be?

Explain the importance of standards and standards bodies.


## HTML =========================

What does doctype do?
- lets the browser know which version of HTML (or XML) it needs to use when rendering the page. 

Whats the difference between standards mode and quirks mode?
- "Quirks" mode is used for legacy browsers, while "standards" mode follows the W3C specification. 

What are data- attributes good for? 
- Store custom data in Dom node


Can you describe the difference between progressive enhancement and graceful degradation?
- Progressive enhancement is a way to implement a web page where basic features, which are supported by most environments, are implemented first and then progressively enhance them for advanced environments.
- On the other hand, graceful degradation is an opposite. The advanced features are freely implemented at any time, and additional works are done to support the environment where the features don't work well.

Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?/

- CSS declared before <body> starts, your styles has actually loaded already
- run javascript just before the </body> so that it is ran after all the elements have been rendered./

Explain some of the pros and cons for CSS animations versus JavaScript animations.

-CSS animations
    -pros: They use GPU, so they are CPU-efficient. Don't consume JavaScript event loops.
    -cons: Hard to handle, as CSS doesn't contain logics. Not supported in old browsers.

-JavaScript animations
    -Opposite to CSS animations


What is the difference between classes and IDs in CSS?
- Id have priority 

==========CSS===============

Whats the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
- Resetting - removing all styling from every element. all elements will have the same font-size margin etc. Eric Meyers Reset.
- normalizing - making elements render consistently across all browsers. provides better cross-browser consistency in default styling of html elements. html5 alternative to css resetting

Describe Floats and how they work.
- Specifies whether an element should be placed along left or right side of container

Describe z-index and how stacking context is formed.
- Specifies the stack order of an element. Greater stack order in front.

Have you ever used a grid system, and if so, what do you prefer?
-Bootstrap - container, rows, and columns placed within rows

Have you used or implemented media queries or mobile specific layouts/CSS?
-Optional media type limit the stylesheets scope by using  media features (height width)

=============JS===============
Explain event delegation
-Using Event Propagation(bubbling) to handle higher level events in the DOM

Why is it called a Ternary expression, what does the word "Ternary" indicate?
- ?:

Explain how this works in JavaScript

==============================

What does CORS stand for and what issue does it address?

 -CORS stands for cross-origin resource sharing. There could be situation where some resources should be allowed from sources having different origin. CORS is a standard to enable cross-site HTTP requests for:

 -AJAX API call
 -Web Fonts
 -WebGL textures
 -Image/video frames drawn to a canvas using drawImage
 -Stylesheets
 -Scripts