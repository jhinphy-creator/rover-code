hummingbird.startHummingbird()
hummingbird.setRotationServo(FourPort.One, 50)
hummingbird.setRotationServo(FourPort.Two, -50)
hummingbird.setPositionServo(FourPort.One, 90)
hummingbird.setTriLED(
TwoPort.One,
1,
0,
0
)
hummingbird.setTriLED(
TwoPort.Two,
1,
0,
0
)
basic.forever(function () {
	
})
