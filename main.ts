function motor_vorwaerts () {
    servos.P0.run(50)
    pins.servoWritePin(AnalogPin.P1, 90)
}
function motor_drehe_rechts () {
    servos.P3.run(50)
}
basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.C16) < 50) {
        motor_drehe_rechts()
    } else {
        motor_vorwaerts()
    }
})
