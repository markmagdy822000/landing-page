## Dependencies
- I depend on some simple Methods like: 
`.getBoundingClient()` to know if the section is active on screen.
`.scrollIntoView()` to move smoothly through the page.
- I also used `.addEventListener` to make the web page interactive with the user. 

## References
- [scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
- [getBoundingClient()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
- [Writing READMEs](https://www.udacity.com/course/writing-readmes--ud777)

## Important files
There are 4 files in the project 
- `index.html` Conatians the project skelaton.
- `style.css` Responsible for the page theme.
- `app.js` Make the page more Dynamic.

## How the project runs 
- #### First
    - The project adds a new `section` tag Dynamically in `app.js`
    - then it creats all important tags inside that tag and append them to make the skelaton of the `section` tag.
- ### Second
    - It create number of links according to the number of sections we have and put them in a list
inside the `navigation bar`.

- ### Third
    - An `addEventListener` is added to dectect if the user scrolled then it will check what section appeares to him to make it in active mode. 