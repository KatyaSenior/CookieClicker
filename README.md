# CookieClicker

Goals acheived:

1.  Built out wireframe using HTML and CSS
2.  Styled cookie button.
3.  Added an event listener to the button to increment a cookie counter variable.
4.  Selected the HTML element for the cookie total and update it's contents so the cookie counter starts to increment on the page
5.  Used localStorage to store the cookie count value on every increment, and load it again when the app runs on page load

Stretch:

1.  Created a list of upgrades available in your game, make them each available to purchase at a cost.
2.  Added an event listener to each upgrade button that checks if the user has enough cookies to buy it, and if so, subtracts the cost from the cookie count, and tracks the purchased items and their increment bonus.
3.  Used the owned items and their increment bonus to calculate the total increment value to add every second.

Major bugs:

1.           Bug:  Start/Reset button ddoes not display default text.
        Cause:  Had not save index.html.
        Status: Resolved.

2.           Bug:  Game did not function after adding a pause button.
        Cause:  Typo in const declaration.
        Status: Resolved. However, pause button does not operate as intended.

3.         Bug:   Pause button not functioning.
        Cause:  Unknown.
        Satus:  Semi-resolved. Game design decision made: pause button is unnecessary thus code does not require fixing.
