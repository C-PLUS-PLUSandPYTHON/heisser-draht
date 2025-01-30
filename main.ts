let anzahl = 0
basic.forever(function () {
    anzahl = 0
    basic.showIcon(IconNames.Sad)
    while (!(input.buttonIsPressed(Button.A))) {
        basic.showIcon(IconNames.Sad)
    }
    while (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Sad)
    }
    while (!(input.buttonIsPressed(Button.A))) {
        basic.showNumber(anzahl)
        if (input.pinIsPressed(TouchPin.P0)) {
            anzahl += 1
            music.ringTone(988)
            while (input.pinIsPressed(TouchPin.P0)) {
                basic.showIcon(IconNames.No)
            }
            music.stopAllSounds()
        }
    }
    basic.showIcon(IconNames.Heart, 600)
    basic.showNumber(anzahl)
})
