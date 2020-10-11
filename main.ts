light.setBrightness(10)
while (true) {
    light.setPixelColor(0, light.rgb(255, 0, 0))
    light.setPixelColor(1, light.rgb(0, 0, 255))
    light.setPixelColor(2, light.rgb(0, 255, 0))
}
