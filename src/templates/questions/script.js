var toggleSlider = function() {
    var eventListener = function() {
        var items = document.getElementsByClassName('questions__trigger');
        Array.prototype.forEach.call(items, function(item) {
            item.addEventListener('click', _toggleQuestion);
        });
    };

    var _toggleQuestion = function(event) {
        event.preventDefault();
        var items = document.getElementsByClassName('questions__trigger');
        Array.prototype.forEach.call(items, function(item) {
            item.classList.remove('questions__trigger_active');
        });
        event.target.classList.add('questions__trigger_active');
    };

    return {
        init: eventListener
    }
}();

toggleSlider.init();