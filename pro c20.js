function preload(){
bg= loadImage("images/iss.png")
sleep = loadAnimation("Images/sleep.png")
brush = loadAnimation("images/brush.png")
gym = loadAnimation("image/gym.png")
eat = loadAnimation(https://www.pinterest.com/pin/361836151306705925/)
drink = loadAnimation(https://dribbble.com/shots/9074443-Beer-drinking-guy-frame-by-frame-animation)
move = loadAnimation(https://www.artstation.com/artwork/GwQbV)
}
astronaut = createSprite(300,230)
astronaut.addAnimation("sleeping",sleep)
astronaut.scale = 0.1

if(keyDown("Up_Arrow")){
    astronaut.addAnimation("brushing",brush)
    astronaut.y=350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
}

if(keyDown("Down_Arrow")){
    astronaut.addAnimation("Gymming",gym)
    astronaut.y=350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
}

if(keyDown("Down_Arrow")){
    astronaut.addAnimation("Gymming",gym)
    astronaut.y=350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
}

if(keyDown("Left_arrow")){
    astronaut.addAnimation("eating",eat)
    astronaut.y=350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
}

if(keyDown("Right_Arrow")){
    astronaut.addAnimation("bathing",bath)
    astronaut.y=350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
}

if(keyDown("M_key")){
    astronaut.addAnimation("Moving",move)
    astronaut.y=350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
}