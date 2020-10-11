
light.set_brightness(10)

while True:
    light.set_pixel_color(0, light.rgb(255,0,0))
    light.set_pixel_color(1, light.rgb(0, 0, 255))
    light.set_pixel_color(2, light.rgb(0, 255, 0))

