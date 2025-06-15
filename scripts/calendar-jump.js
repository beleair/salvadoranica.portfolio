
// JavaScript for the "Jump to Month" functionality
    function jumpToMonth() {
        var selectBox = document.getElementById("month-select");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;

        if (selectedValue) {
            var targetElement = document.getElementById(selectedValue);
            if (targetElement) {
                var headerOffset = 80; 
                var elementPosition = targetElement.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                if (Math.abs(window.pageYOffset - offsetPosition) < 5) { 
                    window.scrollTo(0, 0); 
                    setTimeout(function() {
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }, 50); 
                } else {
                    window.scrollTo({
                    top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        }
    }

// JavaScript for the "Jump to Holiday" functionality
    function jumpToHoliday() {
        var selectBox = document.getElementById("holiday-select");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;

        if (selectedValue) {
            var targetElement = document.getElementById(selectedValue);
            if (targetElement) {
                var headerOffset = 80; // Assuming header height is 80px
                var elementPosition = targetElement.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                if (Math.abs(window.pageYOffset - offsetPosition) < 5) {
                    window.scrollTo(0, 0); 
                    setTimeout(function() {
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }, 50);
                } else {
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        }
    }
