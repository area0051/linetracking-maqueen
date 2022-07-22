def maqStop():#止まる
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)

def maqForward(n):#進む
    if n==0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 197)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)

    else:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 197)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        basic.pause(6600*n)
        maqStop()

def maqBack(n):#後退する
    if n==0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 197)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)

    else:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 197)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        basic.pause(6600*n)
        maqStop()

def maqBlinkLedR():#ウインカー右
    music.play_tone(262, music.beat(BeatFraction.WHOLE))

    for i in range(3):
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
        basic.pause(100)
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
        basic.pause(100)


def maqBlinkLedL():#ウインカー左
    music.play_tone(330, music.beat(BeatFraction.WHOLE))

    for i in range(3):
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
        basic.pause(100)
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
        basic.pause(100)

def maqTurnLeft():#左に曲がる（直角コース向け）
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 197)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)


def maqTurnRight():#右に曲がる）
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(780)
    maqStop()



def maqSteerLeft():#右に曲がる（ハンドル操作向け)
    maqBlinkLedR()
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 197)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(780)
    maqStop()

def maqSteerRight():#左に曲がる（ハンドル操作向け）
    maqBlinkLedL()
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(780)
    maqStop()

def maqSlightRight():#右に曲がる（ライントレース用)
    if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) ==1 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) ==0 :
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        #basic.show_string("R")右に曲がりたい

def maqSlightleft():#左に曲がる（ライントレース用）
    if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) ==0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) ==1 :
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        #basic.show_string("L")左に曲がりたい
    pass



##########################
def on_forever():
    maqSlightRight()
    maqSlightleft()


basic.forever(on_forever)
