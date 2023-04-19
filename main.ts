basic.showString("SELINA")
basic.showLeds(`
    # . . . #
    # . . . #
    # # # # #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    # # # # .
    # . . . .
    # # # # .
    # . . . .
    # # # # .
    `)
basic.showLeds(`
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    . # # # .
    `)
basic.showLeds(`
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    . # . # .
    . # . # .
    . . # . .
    `)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
