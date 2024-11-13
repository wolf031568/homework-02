var listItems = document.getElementsByTagName('li');                   // All <li> elements

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                        // h2 element
var headingText = heading.firstChild.nodeValue;                    // h2 text
var totalItems = listItems.length;                                 // No. of <li> elements
var newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content


/*  WRITE YOUR CODE BELOW */

// Part1. Hint: Use the listItems object to iterate through the elements of the list


/* This is the regular javascript*/
/*
for (var i = 0; i < listItems.length; i++) {
    var li = listItems[i];
    if (li.textContent.trim() === "fresh figs" || li.textContent.trim() === "kale" || li.textContent.trim() === "honey") {
        li.classList.add('cool');
    }
}
*/

/* This is the bonus optional javascript (using my own class)*/


for (var i = 0; i < listItems.length; i++) {
    var li = listItems[i];
    if (li.textContent.trim() === "fresh figs" || li.textContent.trim() === "kale" || li.textContent.trim() === "honey") {
        li.classList.add('classA');
    }
}

// Part2. Hint: Use the heading and newHeading to show the number of items in the shopping list
heading.innerHTML = newHeading;





