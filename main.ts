namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    ispl1facingleft = false
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
	
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
	
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -110
    }
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (ispl1facingleft) {
        mySprite3 = sprites.create(img`
2 2 2 . . 
2 2 2 2 2 
2 2 2 . . 
`, SpriteKind.Player)
        mySprite3.setPosition(mySprite.x, mySprite.y)
        mySprite3.setVelocity(-100, 0)
        pause(50)
        mySprite3.setVelocity(0, 0)
    } else if (!(ispl1facingleft)) {
        mySprite3 = sprites.create(img`
. . 2 2 2 
2 2 2 2 2 
. . 2 2 2 
`, SpriteKind.Player)
        mySprite3.setPosition(mySprite.x, mySprite.y)
        mySprite3.setVelocity(100, 0)
        pause(50)
        mySprite3.setVelocity(0, 0)
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (mySprite2.vy == 0) {
        mySprite2.vy = -110
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    ispl2facingleft = true
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (mySprite2.vy == 0) {
        mySprite2.vy = -110
    }
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (ispl2facingleft) {
        mySprite3 = sprites.create(img`
3 3 3 . . 
3 3 3 3 3 
3 3 3 . . 
`, SpriteKind.Player)
        mySprite3.setPosition(mySprite2.x, mySprite2.y)
        mySprite3.setVelocity(-100, 0)
        pause(50)
        mySprite3.setVelocity(0, 0)
    } else if (!(ispl2facingleft)) {
        mySprite3 = sprites.create(img`
. . 3 3 3 
3 3 3 3 3 
. . 3 3 3 
`, SpriteKind.Player)
        mySprite3.setPosition(mySprite2.x, mySprite2.y)
        mySprite3.setVelocity(100, 0)
        pause(50)
        mySprite3.setVelocity(0, 0)
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -110
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    ispl2facingleft = false
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    ispl1facingleft = true
})
let mySprite3: Sprite = null
let ispl1facingleft = false
let ispl2facingleft = false
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
`, SpriteKind.Player)
mySprite.setPosition(130, 27)
controller.player1.moveSprite(mySprite, 100, 0)
mySprite2 = sprites.create(img`
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 
`, SpriteKind.Player)
mySprite2.setPosition(30, 27)
controller.player2.moveSprite(mySprite2, 100, 0)
tiles.setTilemap(tiles.createTilemap(
            hex`0a0007000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d0c0c0c0c0c0c0c0c0e`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.hazardSpike,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight2,sprites.castle.tilePath5,sprites.builtin.forestTiles18,sprites.builtin.forestTiles17,sprites.builtin.forestTiles19,sprites.builtin.forestTiles6,sprites.builtin.forestTiles5,sprites.builtin.forestTiles25,sprites.builtin.forestTiles20,sprites.builtin.forestTiles22,sprites.builtin.forestTiles21,sprites.builtin.forestTiles23,sprites.builtin.forestTiles1],
            TileScale.Sixteen
        ))
mySprite.ay = 200
mySprite2.ay = 200
ispl2facingleft = true
ispl1facingleft = false
