//COUNTER PROGRAMME

// first we create all the variables to use and assign a function to them
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

decreasebtn.onclick = function(){
    count--; // increse the count
    countlabel.textContent = count; // then update the count value to html label
}

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}