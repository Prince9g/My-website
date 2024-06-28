document.addEventListener('DOMContentLoaded', function() {
    // Get all checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Add event listener to each checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Uncheck all checkboxes except the one that was just clicked
            checkboxes.forEach(cb => {
                if (cb !== this) {
                    cb.checked = false;
                }
            });
        });
    });
});
