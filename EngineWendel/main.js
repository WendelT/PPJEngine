//declare os objetos antes
var paddle;
var ball;
var rect;

//instancie os componentes 

function start() { //this function is called once when the window is loaded
    ball = new entities(300, 400, 50, 50);
    ball.image = new image(ball, 'bola.png');
    ball.boundsCollison = true;
    ball.setVelocity(0.2, 0.2); 
    //paddle.setVelocity(0.2, 0.2); //set velocity example
    paddle = new entities(0, 200, 64, 128);
    paddle.image = new image(paddle, 'paddle.png');
    ball.setColision(paddle, keyBoard);
    paddle.onClick(changeSize, paddle);
    rect = new entities(750, 200, 64, 128);
    ball.setColision(rect, keyBoard);
    //paddle.keyPressed(keyBoard);
    ball.keyPressed(keyBoard);


}

function changeSize() {
    paddle.setSize(paddle.width * 0.9, cube.height * 0.9);
    if (paddle.width < 30) {
        paddle.setSize(100, 100);
    }

}
//testa chamada do teclado
function keyBoard() {
    ball.setVelocity(-ball.speedX, -ball.speedY);
    //paddle.setVelocity(-paddle.speedY, +paddle.speedY);

}
//this function is called according to your set fps (default is 60 frames by seconds)
function update(deltaP) {
    ball.movement(deltaP);
    //paddle.move(deltaP);
}

//draw your game objects here
//this funcion is called after the update function. First you callculate, the you render
function render() {
    paddle.draw();
    ball.draw();
    rect.draw();
    colorText('Projecto Engine', canvasWidth - 460, canvasHeight - 300, 20, 'blue');
}