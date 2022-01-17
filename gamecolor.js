
    var numSquares = 6;
    var colors = [];
    var pickedColor;

    var squares = document.querySelectorAll(".square");
    var colorDisplay = document.querySelector("#color-display");
    var messageDisplay = document.querySelector("#message");
    var h1 = document.querySelector("h1");
    var resetButton = document.querySelector("#reset");
    var modeButtons = document.querySelectorAll(".mode");
    var easyButton = document.querySelector(".mode");
    var newscore = document.getElementById("#newScore")

    init()
    function  init(){
    setupSquares()
    setupMode()
    reset()
}
    resetButton.addEventListener('click' , function (){
    reset()
})

    function setupSquares(){
    for (let i=0 ; i<squares.length ; i++){
    squares[i].addEventListener('click' , function (){
    var selectColor = this.style.backgroundColor






    if(selectColor === pickedColor){
    messageDisplay.textContent = "correct"



    changeColors(pickedColor)
}else{
    messageDisplay.textContent= "tryagain"
    squares[i].style.backgroundColor = "#535151"
}

})
}
}

    function  setupMode(){

    for (let i=0 ; i<modeButtons.length ; i++){
    modeButtons[i].addEventListener('click' , function (){
    for (let i=0 ; i<modeButtons.length ; i++){
    modeButtons[i].classList.remove("selected")
}
    modeButtons[i].classList.add("selected")
    if (this.textContent === "Easy"){

    numSquares = 3
}else  {
    numSquares = 6
}
    reset()
})
}

}




    function  reset(){
    colors = penColor(numSquares)
    pickedColor = chooseColor()
    colorDisplay.textContent = pickedColor
    h1.style.backgroundColor ="#2C8E99"
    messageDisplay.textContent = ""
    for (let i=0 ; i<squares.length ; i++){
    if (colors[i]){
    squares[i].style.display = "block"
    squares[i].style.backgroundColor = colors[i]
}else{
    squares[i].style.display = "none"

}
}
}



    function changeColors(color) {
    for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
    h1.style.backgroundColor = color;
}
}



    function  chooseColor(){
    var random = Math.floor(Math.random()*colors.length)
    return colors[random]
}



    function penColor(num){
    var arr = []
    for (let i=0 ; i<num ; i++){
    arr.push(makeColor())
}
    return (arr)
}

    function makeColor(){
    var r = Math.floor(Math.random()*256)
    var g = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)

    return "rgb("+ r +", "+ g +", "+ b +")"
}


