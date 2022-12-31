simplyCountdown('#cuenta', {
    year: 2022,
    month: 12,
    day: 31,
    hours: 19,
    minutes: 1,
    seconds: 0,
    words: {
        days: 'Día',
        hours: 'Hora',
        minutes: 'Minuto',
        seconds: 'Segundo',
        pluralLetter: 's'
    },
    plural: true,
    inline: false,
    inlineClass: 'simply-countdown-inline',
    enableUtc: true,
    onEnd: function(){
        document.getElementById('portada').classList.add('oculta');
        return;
    },
    refresh: 1000,
    sectionClass : 'simply-section',
    amountClass: 'simply-amount',
    wordClass: 'simply-word',
    zeroPad: false,
    countUp: false
});