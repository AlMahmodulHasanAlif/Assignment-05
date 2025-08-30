1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById selects an id and return dom element.
getElementsByClassName select classes and return html collection.
querySelector selects first element of given value.
querySelectorAll selects all item matches and return Nodelist.

2.How do you create and insert a new element into the DOM?

document.createElement is used to create a new element and to insert select the html element then use .append child.

3.What is Event Bubbling and how does it work?
event bubbling is something when an event triggered it gets up to is parent dom. It works like a flipped tree where each branches can get up to its root upwards .

4.What is Event Delegation in JavaScript? Why is it useful?
Event deligation works based on bubbling. It's a pattern/technique where all child items of a parent can be controlled by its parent by adding a single listener.
easy to handle. insted of multiple lisentener one can get all works done.better than using loop.

5.What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops an event action.
stopPropagation() stops bubbling up to it's root.
