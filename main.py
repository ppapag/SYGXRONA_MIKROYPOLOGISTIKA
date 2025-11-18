def on_forever():
    basic.show_leds("""
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        """)
    basic.pause(100)
    basic.show_leds("""
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        """)
    basic.pause(100)
    basic.show_leds("""
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        """)
    basic.pause(100)
    basic.show_leds("""
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        """)
basic.forever(on_forever)
