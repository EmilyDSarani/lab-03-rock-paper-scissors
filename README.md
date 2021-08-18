## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

HTML- 
I am going to need 3 Radio Buttons
- One of the buttons will be Rock
- One of the buttons will be Paper
- One of the Buttons will be Scissors
2 Button buttons
- I will need a 'Go!" button
- I will also need a 'Reset!' button 
5 divs
- The first div will be what the user choses
-div2 will be what the computer chose
- div3 will be whether the user won or lost
- div4 will be how many wins or losses the user has

State
Wins, loses, actual throw

Event
button click
-when the user clicks the button, then the computer will generate rock-paper-scissors and the user will either win or lose, then it will record that

CSS
- style the button with a pointer
- put some indicator around which picture was selected
- make it look cooler than a 90s website