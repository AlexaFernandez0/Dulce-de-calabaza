enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Out
}
namespace SpriteKind {
    export const Light = SpriteKind.create()
    export const Batery = SpriteKind.create()
    export const Paso_luz = SpriteKind.create()
    export const Dirección = SpriteKind.create()
    export const Enemigo_sig = SpriteKind.create()
}
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LT, statusbars.ComparisonType.Percentage, 50, function (status) {
    Luz.setImage(assets.image`Luz 2`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLightMoss, function (sprite, location) {
    if (info.score() == 10) {
        game.over(true)
    }
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.GTE, statusbars.ComparisonType.Percentage, 50, function (status) {
    Luz.setImage(assets.image`Luz 1`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 10, 10)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . 4 4 4 7 7 4 4 4 . . . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . 4 4 4 4 b f 4 4 f b 4 4 4 4 . 
        . 4 4 4 4 1 f 4 4 f 1 4 4 4 4 . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . f f 4 4 4 4 4 4 4 4 4 4 f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite2.follow(mySprite4, 30)
})
sprites.onOverlap(SpriteKind.Light, SpriteKind.Batery, function (sprite, otherSprite) {
    Batery.setFlag(SpriteFlag.Invisible, true)
})
sprites.onOverlap(SpriteKind.Enemigo_sig, SpriteKind.Player, function (sprite, otherSprite) {
    if (!(controller.A.isPressed())) {
        game.over(false)
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite)
    mySprite.setImage(img`
        . . . . . . . 7 7 . . . . . . . 
        . . . 4 4 4 4 7 7 4 4 4 . . . . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . 4 4 4 4 b f 4 4 f b 4 4 4 . . 
        . 4 4 4 4 1 f 4 4 f 1 4 4 4 . . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . d f f f 5 5 f f f d . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Batery, function (sprite, otherSprite) {
    Batery.destroy()
    statusbar.value += 10
    Batery = sprites.create(img`
        . . . . 8 8 . . . . 
        . . 8 8 8 8 8 8 . . 
        . . 9 9 9 9 5 9 . . 
        . . 9 9 5 5 9 9 . . 
        . . 9 9 5 5 5 9 . . 
        . . 9 9 9 5 5 9 . . 
        . . 9 9 5 5 9 9 . . 
        . . 9 5 9 9 9 9 . . 
        . . 8 8 8 8 8 8 . . 
        . . . . . . . . . . 
        `, SpriteKind.Batery)
    tiles.placeOnRandomTile(Batery, sprites.castle.tileDarkGrass2)
})
sprites.onOverlap(SpriteKind.Light, SpriteKind.Enemigo_sig, function (sprite, otherSprite) {
    otherSprite.setKind(SpriteKind.Enemy)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Dulce.destroy()
    info.changeScoreBy(1)
    Dulce = sprites.create(img`
        ....................
        ..95..eee...........
        ..595.f2f...ee......
        ...5952f44.e11.777..
        ....77745541127717..
        ...666664482f27177..
        ...f777f2882f2177...
        ...ff1f3f3f3f3ff....
        ...f4f4f4f4f4f4f....
        ...f44444444444f....
        ...f44444444444f....
        ...f44441114444f....
        ...f44411111444f....
        ...f4441f1f1444f....
        ...f44411111444f....
        ...f44411111444f....
        ...f44411111444f....
        ...f44444444444f....
        ...f44444444444f....
        ...fffffffffffff....
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(Dulce, sprites.castle.tileDarkGrass3)
    while (info.score() == 9) {
        Dulce.destroy()
        info.changeScoreBy(1)
        Dulce = sprites.create(img`
            ....................
            ..95..eee...........
            ..595.f2f...ee......
            ...5952f44.e11.777..
            ....77745541127717..
            ...666664482f27177..
            ...f777f2882f2177...
            ...ff1f3f3f3f3ff....
            ...f4f4f4f4f4f4f....
            ...f44444444444f....
            ...f44444444444f....
            ...f44441114444f....
            ...f44411111444f....
            ...f4441f1f1444f....
            ...f44411111444f....
            ...f44411111444f....
            ...f44411111444f....
            ...f44444444444f....
            ...f44444444444f....
            ...fffffffffffff....
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(Dulce, sprites.castle.tileDarkGrass3)
    }
})
sprites.onOverlap(SpriteKind.Light, SpriteKind.Food, function (sprite, otherSprite) {
    Dulce.setFlag(SpriteFlag.Invisible, true)
})
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let Luz: Sprite = null
let statusbar: StatusBarSprite = null
let Batery: Sprite = null
let Dulce: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . 7 7 . . . . . . . 
    . . . . 4 4 4 7 7 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 4 4 b f 4 4 f b 4 4 4 . . 
    . . 4 4 4 1 f 4 4 f 1 4 4 4 . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . f f f f f f f f f . . . . 
    . . 6 d 6 f f f f f f f . . . . 
    . . 8 8 8 f f 5 5 f f d . . . . 
    . . 8 1 8 f f f f f f . . . . . 
    . . 8 8 8 f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLightMoss)
Dulce = sprites.create(img`
    ....................
    ..95..eee...........
    ..595.f2f...ee......
    ...5952f44.e11.777..
    ....77745541127717..
    ...666664482f27177..
    ...f777f2882f2177...
    ...ff1f3f3f3f3ff....
    ...f4f4f4f4f4f4f....
    ...f44444444444f....
    ...f44444444444f....
    ...f44441114444f....
    ...f44411111444f....
    ...f4441f1f1444f....
    ...f44411111444f....
    ...f44411111444f....
    ...f44411111444f....
    ...f44444444444f....
    ...f44444444444f....
    ...fffffffffffff....
    `, SpriteKind.Food)
tiles.placeOnRandomTile(Dulce, sprites.castle.tileDarkGrass3)
Batery = sprites.create(img`
    . . . . 8 8 . . . . 
    . . 8 8 8 8 8 8 . . 
    . . 9 9 9 9 5 9 . . 
    . . 9 9 5 5 9 9 . . 
    . . 9 9 5 5 5 9 . . 
    . . 9 9 9 5 5 9 . . 
    . . 9 9 5 5 9 9 . . 
    . . 9 5 9 9 9 9 . . 
    . . 8 8 8 8 8 8 . . 
    . . . . . . . . . . 
    `, SpriteKind.Batery)
tiles.placeOnRandomTile(Batery, sprites.castle.tileDarkGrass2)
statusbar = statusbars.create(4, 50, StatusBarKind.Health)
statusbar.positionDirection(CollisionDirection.Left)
statusbar.setColor(7, 15)
statusbar.value = 100
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
Luz = sprites.create(assets.image`Luz 1`, SpriteKind.Light)
tiles.placeOnRandomTile(Luz, sprites.dungeon.floorLightMoss)
info.setScore(0)
controller.moveSprite(mySprite)
Batery.setFlag(SpriteFlag.Invisible, true)
Dulce.setFlag(SpriteFlag.Invisible, true)
mySprite2 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........11111.........
    ........11111111........
    .......1111111111.......
    ......11111111111.......
    ......111111111111......
    ......111111111111......
    ......111111111111......
    ......1111111ff1ff......
    ......1111111ff1ff......
    ......111111111111......
    ......111111111111......
    ......111111111111......
    ....11111111111111......
    .....1111111111111......
    .....1111111111111......
    ......111111111111......
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite2, sprites.castle.saplingOak)
let dir_fantasma = 1
dir_fantasma = dir_fantasma * -1
mySprite2.follow(mySprite4, 35)
mySprite2.setFlag(SpriteFlag.Invisible, true)
mySprite2.setFlag(SpriteFlag.GhostThroughWalls, true)
mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Dirección)
tiles.placeOnRandomTile(mySprite4, sprites.dungeon.floorLightMoss)
mySprite4.setVelocity(50 * dir_fantasma, 50 * dir_fantasma)
mySprite4.setFlag(SpriteFlag.Invisible, true)
mySprite4.setBounceOnWall(true)
Luz.follow(mySprite, 80)
game.onUpdateInterval(5000, function () {
    statusbar.value += -5
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (Luz.overlapsWith(value)) {
            value.follow(mySprite4, 50)
            value.setFlag(SpriteFlag.Invisible, true)
        } else {
            value.follow(mySprite, 50)
            value.setKind(SpriteKind.Enemigo_sig)
            value.setFlag(SpriteFlag.Invisible, false)
        }
    }
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        if (Luz.overlapsWith(value)) {
            Dulce.setFlag(SpriteFlag.Invisible, true)
        } else {
            Dulce.setFlag(SpriteFlag.Invisible, false)
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.Batery)) {
        if (Luz.overlapsWith(value)) {
            Batery.setFlag(SpriteFlag.Invisible, true)
        } else {
            Batery.setFlag(SpriteFlag.Invisible, false)
        }
    }
})
