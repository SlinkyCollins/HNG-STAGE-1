document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().slice(-12, -4);
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
    }

    function updateDay() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        const currentDay = days[now.getUTCDay()];
        document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
    }

    updateTime();
    updateDay();
    setInterval(updateTime, 1000); // Updates the time every second
});
