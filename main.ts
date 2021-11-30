let arrêt = 0
function feux_circulation () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(arrêt)
}
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
basic.forever(function () {
    feux_circulation()
    if (input.buttonIsPressed(Button.A)) {
        arrêt = 14000
    }
})
