let s = 0

basic.forever(function () {
    // draw and erase in one pass
    for (let i = 0; i < 5; i++) {
        led.unplot(i, i)
        led.unplot(4 - i, i)
        led.unplot(2, i)
        led.unplot(i, 2)
    }

    if (s == 0) for (let i = 0; i < 5; i++) led.plot(i, i)
    if (s == 1) for (let i = 0; i < 5; i++) led.plot(2, i)
    if (s == 2) for (let i = 0; i < 5; i++) led.plot(4 - i, i)
    if (s == 3) for (let i = 0; i < 5; i++) led.plot(i, 2)

    s = (s + 1) % 4
})
