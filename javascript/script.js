const laptop = {
    name: "Dell",
    color: "Black",
    price: 132442
}

// console.log(laptop.name);
// three way to access html elements
// 1. getElementById("ID")
// 2. getElementByClassName("ClassName")
// 3. getElementByTagName("tag,.className,#id")
let heading=document.getElementsByClassName("heading")
console.log(heading);
let para=document.getElementById("para")
para.innerText="Hello"
// let paraText=para.innerHTML
// console.log(paraText);






