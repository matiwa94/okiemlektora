function updateClock() {
    const now = new Date();

    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    const date = now.toLocaleDateString('pl-PL', options);
    const time = now.toLocaleTimeString('pl-PL');
    
    const clock = document.getElementById('clock-container');
    if(clock) {
        clock.innerHTML = date + "<br>" + time;
    }
}

// Aktualizuj co sekundę
setInterval(updateClock, 1000);
updateClock();