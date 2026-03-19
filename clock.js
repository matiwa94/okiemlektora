function updateClock() {
    const clockContainer = document.getElementById('clock-container');
    if (!clockContainer) return;

    const now = new Date();

    // Dzień tygodnia i data
    const day = now.toLocaleDateString('pl-PL', { weekday: 'long' });
    const date = now.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
    const time = now.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    clockContainer.innerHTML = `
        <div class="modern-widget">
            <div class="widget-day">${day}</div>
            <div class="widget-date">${date}</div>
            <div class="widget-time">${time}</div>
        </div>
    `;
}
setInterval(updateClock, 1000);
updateClock();