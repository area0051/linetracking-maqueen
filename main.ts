function maqStop() {
    // 止まる
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
}

function maqForward(n: number) {
    // 進む
    if (n == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 197)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 197)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        basic.pause(6600 * n)
        maqStop()
    }
    
}

function maqBack(n: number) {
    // 後退する
    if (n == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 197)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 197)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        basic.pause(6600 * n)
        maqStop()
    }
    
}

function maqBlinkLedR() {
    // ウインカー右
    music.playTone(262, music.beat(BeatFraction.Whole))
    for (let i = 0; i < 3; i++) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
}

function maqBlinkLedL() {
    // ウインカー左
    music.playTone(330, music.beat(BeatFraction.Whole))
    for (let i = 0; i < 3; i++) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
}

function maqTurnLeft() {
    // 左に曲がる（直角コース向け）
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 197)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
}

function maqTurnRight() {
    // 右に曲がる）
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(780)
    maqStop()
}

function maqSteerLeft() {
    // 右に曲がる（ハンドル操作向け)
    maqBlinkLedR()
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 197)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(780)
    maqStop()
}

function maqSteerRight() {
    // 左に曲がる（ハンドル操作向け）
    maqBlinkLedL()
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(780)
    maqStop()
}

function maqSlightRight() {
    // 右に曲がる（ライントレース用)
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    }
    
}

// basic.show_string("R")右に曲がりたい
function maqSlightleft() {
    // 左に曲がる（ライントレース用）
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    }
    
    // basic.show_string("L")左に曲がりたい
    
}

// #########################
basic.forever(function on_forever() {
    maqSlightRight()
    maqSlightleft()
})
