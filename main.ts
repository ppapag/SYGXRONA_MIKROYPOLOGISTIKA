function forever_(body: () => void) {
    control.inBackground(() => {
        while (true) {
            body();
            basic.pause(20);
        }
    });
}
forever_(() => {
    led.toggle(0, 0); // Toggle the LED at (0,0) on the micro:bit
    basic.showNumber(input.temperature()); // Display the temperature
});
