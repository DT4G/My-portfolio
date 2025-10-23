// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all column elements
    const columns = document.querySelectorAll('.column');
    const subpages = document.querySelectorAll('.subpage');
    const backButtons = document.querySelectorAll('.back-button');
    
    // Add click event to each column
    columns.forEach(column => {
        column.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Hide all subpages
            subpages.forEach(subpage => {
                subpage.classList.remove('active');
            });
            
            // Show the target subpage
            document.getElementById(target).classList.add('active');
            
            // Scroll to the subpage
            document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Add click event to back buttons
    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide all subpages
            subpages.forEach(subpage => {
                subpage.classList.remove('active');
            });
            
            // Scroll back to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Hide all subpages when Escape key is pressed
            subpages.forEach(subpage => {
                subpage.classList.remove('active');
            });
            
            // Scroll back to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});