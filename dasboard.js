// Initialize mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const simpleMenu = document.querySelector('.simple-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        if (sidebar) sidebar.classList.toggle('active');
        if (simpleMenu) simpleMenu.classList.toggle('active');
    });
}

// Dashboard initialization
function initDashboard() {
    // Add any dashboard-specific initialization code here
    console.log('Dashboard initialized');
}

// Event listeners for dashboard components
document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
    
    // Add event listeners for other dashboard elements
    const dashboardElements = document.querySelectorAll('.dashboard-element');
    dashboardElements.forEach(element => {
        element.addEventListener('click', handleDashboardClick);
    });
});

function handleDashboardClick(event) {
    // Handle dashboard element clicks
    console.log('Dashboard element clicked:', event.target);
}

// Window resize handler for responsive adjustments
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        if (sidebar) sidebar.classList.remove('active');
        if (simpleMenu) simpleMenu.classList.remove('active');
    }
});

// Export functions if needed
export { initDashboard, handleDashboardClick };
