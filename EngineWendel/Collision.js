class Collision {


	//Colisões ebtre duas bolas ou dois retangulos

	static circleCollision( dx, dy, circle1, circle2  ) {
    var distance = Math.sqrt(dx*dx + dy*dy);

    if (distance < circle1.radius + circle2.radius) {
    // collision detected!
}


}

  static rectCollision( x, x2, y, y2, width1, width2, height1, height2, rect1, rect2  ) {

      if (rect1.x < rect2.x2 + rect2.width2 && rect1.x + rect.width1 > rect2.x2 && rect1.y < rect2.y2 + rect2.height2 && rect1.y + rect1.height1 > rect2.y2) {
      // collision detected!
  }
  }

}