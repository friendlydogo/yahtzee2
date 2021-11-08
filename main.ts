let SD3 = 0
let d3 = 0
let SD1 = 0
let d1 = 0
let SD5 = 0
let d5 = 0
let SD2 = 0
let d2 = 0
let SD4 = 0
let d4 = 0
let shakeCount = 0
input.onPinPressed(TouchPin.P0, function () {
    if (SD3 == 0) {
        SD3 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        SD3 = d3
    }
})
input.onButtonPressed(Button.A, function () {
    if (SD1 == 0) {
        SD1 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        SD1 = d1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (SD5 == 0) {
        SD5 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        SD5 = d5
    }
})
input.onButtonPressed(Button.B, function () {
    if (SD2 == 0) {
        SD2 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        SD2 = d2
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (SD4 == 0) {
        SD4 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        SD4 = d4
    }
})
input.onGesture(Gesture.Shake, function () {
    shakeCount = shakeCount + 1
    d1 = randint(1, 6)
    d2 = randint(1, 6)
    d3 = randint(1, 6)
    d4 = randint(1, 6)
    d5 = randint(1, 6)
})
basic.forever(function () {
    if (shakeCount > 2 || SD1 != 0 && (SD2 != 0 && (SD3 != 0 && (SD4 != 0 && SD5 != 0)))) {
        shakeCount = 0
        basic.showString("Shake")
    } else {
        if (input.buttonIsPressed(Button.AB)) {
            if (SD1 > 0) {
                basic.showString("D#1:")
                basic.showNumber(SD1)
            } else {
                basic.showString("D#1:")
                basic.showIcon(IconNames.No)
            }
            if (SD2 > 0) {
                basic.showString("D#2:")
                basic.showNumber(SD2)
            } else {
                basic.showString("D#2:")
                basic.showIcon(IconNames.No)
            }
            if (SD3 > 0) {
                basic.showString("D#3:")
                basic.showNumber(SD3)
            } else {
                basic.showString("D#3:")
                basic.showIcon(IconNames.No)
            }
            if (SD4 > 0) {
                basic.showString("D#4:")
                basic.showNumber(SD4)
            } else {
                basic.showString("D#4:")
                basic.showIcon(IconNames.No)
            }
            if (SD5 > 0) {
                basic.showString("D#5:")
                basic.showNumber(SD5)
            } else {
                basic.showString("D#5:")
                basic.showIcon(IconNames.No)
            }
        } else {
            if (d1 == 0) {
                basic.showString("Shake")
            } else {
                if (SD1 > 0) {
                    basic.showString("D#1:")
                    basic.showNumber(SD1)
                } else {
                    basic.showString("D#1:")
                    basic.showNumber(d1)
                }
                if (SD2 > 0) {
                    basic.showString("D#2:")
                    basic.showNumber(SD2)
                } else {
                    basic.showString("D#2:")
                    basic.showNumber(d2)
                }
                if (SD3 > 0) {
                    basic.showString("D#3:")
                    basic.showNumber(SD3)
                } else {
                    basic.showString("D#3:")
                    basic.showNumber(d3)
                }
                if (SD4 > 0) {
                    basic.showString("D#4:")
                    basic.showNumber(SD4)
                } else {
                    basic.showString("D#4:")
                    basic.showNumber(d4)
                }
                if (SD5 > 0) {
                    basic.showString("D#5:")
                    basic.showNumber(SD5)
                } else {
                    basic.showString("D#5:")
                    basic.showNumber(d5)
                }
            }
        }
    }
})
