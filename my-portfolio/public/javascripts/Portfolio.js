// Portfolio.js
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the clicked section
    document.getElementById(sectionId).style.display = 'block';
}
