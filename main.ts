let nombre = 0
let etat_passé = 0
let etat_actuel = 0
servos.P0.setRange(0, 150)
basic.forever(function () {
    etat_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (etat_actuel != etat_passé) {
        if (etat_actuel == 1) {
            etat_passé += 1
            servos.P0.setAngle(60)
            basic.pause(2000)
            servos.P0.setAngle(-60)
        }
    }
    etat_passé = 0
})
