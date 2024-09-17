input.onButtonPressed(Button.AB, function () {
    Counter += randint(0, 25)
    basic.showString("Hello!")
})
let Temp = 0
let Num = 0
let LUZ = 0
let Counter = 0
basic.forever(function () {
    LUZ = input.lightLevel()
    if (LUZ == 100) {
        basic.showString("Cambiar lugar de planta")
        music.play(music.stringPlayable("B F G E C5 A B C ", 200), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    Num = 0
    Num += randint(0, 3)
    if (Num == 1) {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
    } else if (Num == 2) {
        basic.showIcon(IconNames.Sad)
        basic.pause(100)
    } else if (Num == 3) {
        basic.showIcon(IconNames.Surprised)
        basic.pause(100)
    }
})
basic.forever(function () {
    Temp = input.temperature()
    if (Temp == 23) {
        basic.showString("Cerrar las puertas")
    } else if (Temp == 25) {
        basic.showString("Abrir puertas")
    } else if (Temp > 23.5 && Temp > 24.9) {
        basic.showString("OK")
    }
})
