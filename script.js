let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let body = document.getElementById("body");
let colorCode1 = document.getElementById("rgb");
let colorCode2 = document.getElementById("hash");
let box = document.getElementsByClassName("box")[0];
let previousGradient1 = ["#8221dd"];
let previousGradient2 = ["#e61fe6"];


//This function set gradient from color picker
let bg = () => {
    body.style.background = `linear-gradient(to top right, ${color1.value} , ${color2.value})`;
    colorCode2.textContent = ` #CODE : ${color1.value}, ${color2.value}`;
    colorCode1.textContent = ` RGB CODE : ${body.style.background}`;
};

//This function set random gradient on click
let bgClick = () => {
    //sets random hex value
    let randomColor1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    let randomColor2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

    body.style.background = `linear-gradient(to top right, ${randomColor1}, ${randomColor2})`;
    colorCode2.textContent = ` HEX CODE : ${randomColor1}, ${randomColor2}`;
    colorCode1.textContent = ` RGB CODE : ${body.style.background}`;
    color1.setAttribute("value", randomColor1); //Sets bg color to color picker
    color2.setAttribute("value", randomColor2);

    //sets gradient to box
    box.style.background = `linear-gradient(to top right, ${previousGradient1[0]}, ${previousGradient2[0]})`;

    //stores and replaces the second random numbers in array
    previousGradient1.push(randomColor1);
    previousGradient2.push(randomColor2);

    if (previousGradient1.length >= 3 && previousGradient2.length >= 3) {
        previousGradient1.splice(0, 0, randomColor1);
        previousGradient2.splice(0, 0, randomColor2);
    } 

    //This restricts the item in array to 2;
    if (previousGradient1.length > 3 && previousGradient2.length > 3) {
        previousGradient1.length = 4;
        previousGradient2.length = 2;
    }
};

let setPrevious = () => {
    body.style.background = `linear-gradient(to top right, ${previousGradient1[1]}, ${previousGradient2[1]})`
    colorCode2.textContent = ` HEX CODE : ${previousGradient1[1]}, ${previousGradient2[1]}`;
    colorCode1.textContent = ` RGB CODE : ${body.style.background}`;
    color1.setAttribute("value", previousGradient1[1]); //Sets bg color to color picker
    color2.setAttribute("value", previousGradient2[1]);
   
}


color1.addEventListener("change", bg);
color2.addEventListener("change", bg);
body.addEventListener("click", bgClick);
box.addEventListener("mouseenter", setPrevious);
    

