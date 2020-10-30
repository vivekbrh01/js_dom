//Select the section with an id of container without using querySelector.

let section = document.getElementById("container");

//Select the section with an id of container using querySelector.

let section = document.querySelector("#container");

//Select all of the list items with a class of "second".

let selectListItems1 = document.querySelectorAll(".second");

//Select a list item with a class of third, but only the list item inside of the ol tag.

let selectListItems2 = document.ol.querySelector("third");

//Give the section with an id of container the text "Hello!".


let section = document.querySelector("#container");
section.innerText = ("Hello!");

//Add the class main to the div with a class of footer.

let addClass = document.querySelector(".footer");
addClass.classList.add("main");

//Remove the class main on the div with a class of footer.

let addClass = document.querySelector(".footer");
addClass.classList.remove("main");

//Create a new li element.

let listItem = document.createElement("li");

//Give the li the text "four".

listItem.textContent = "four";

//Append the li to the ul element.
let unorderedList = document.createElement("ul");

unorderedList.append(listItem);

//Loop over all of the list inside the ol tag and give them a background color of "green".

document.querySelector('ol').querySelectorAll("li").forEach(value => value.style.background = "green");

//Remove the div with a class of footer.

let removeClass = document.querySelector(".footer");
removeClass.classList.remove("footer");