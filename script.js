        let display = document.getElementById('display');

        // Append a value to the display
        function appendToDisplay(value) {
            display.value += value;
        }

        // Clear the display
        function clearDisplay() {
            display.value = '';
        }

        // Perform the calculation
        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }