class image {
    //the constructor for the component
    constructor(entities, sprite) {
        this.sprite = sprite; //the name of the image file to be loaded
        this.entities = entities; //the reference to the entities which contains the component image
        this.image = new Image(); //instantiating the javascript image
        this.image.src = 'assets/' + this.sprite; //defines the source image to be the sprite parameter
        this.entities.self.appendChild(this.image);
    }
    draw() {
        //draw the image in the canvas with the position and size of the attached entities
        canvasContext.drawImage(this.image, this.entities.x, this.entities.y, this.entities.width, this.entities.height);
    }
}