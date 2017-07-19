


## HTML

What does doctype do?
- lets the browser know which version of HTML (or XML) it needs to use when rendering the page. 

Whats the difference between standards mode and quirks mode?
- "Quirks" mode is used for legacy browsers, while "standards" mode follows the W3C specification. 

What are data- attributes good for? 
- Store custom data in Dom node


Can you describe the difference between progressive enhancement and graceful degradation?
- Progressive enhancement is a way to implement a web page where basic features, which are supported by most environments, are implemented first and then progressively enhance them for advanced environments.
- On the other hand, graceful degradation is an opposite. The advanced features are freely implemented at any time, and additional works are done to support the environment where the features don't work well.


Explain some of the pros and cons for CSS animations versus JavaScript animations.

-CSS animations
    -pros: They use GPU, so they are CPU-efficient. Don't consume JavaScript event loops.
    -cons: Hard to handle, as CSS doesn't contain logics. Not supported in old browsers.

-JavaScript animations
    -Opposite to CSS animations


What does CORS stand for and what issue does it address?

 -CORS stands for cross-origin resource sharing. There could be situation where some resources should be allowed from sources having different origin. CORS is a standard to enable cross-site HTTP requests for:

 -AJAX API call
 -Web Fonts
 -WebGL textures
 -Image/video frames drawn to a canvas using drawImage
 -Stylesheets
 -Scripts