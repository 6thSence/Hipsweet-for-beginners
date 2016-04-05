var toggleSlider = function() {
    var eventListener = function() {
        var items = document.getElementsByClassName('main-section__toggle-item');
        Array.prototype.forEach.call(items, function(item) {
            item.addEventListener('click', _toggleSlid);
        });
    };

    var _toggleSlid = function(event) {
        event.preventDefault();
        var items = document.getElementsByClassName('main-section__toggle-item');
        Array.prototype.forEach.call(items, function(item) {
            item.classList.remove('main-section__toggle-item_active');
        });
        event.target.classList.add('main-section__toggle-item_active');
        var left = event.target.getAttribute('data-left');
        document.getElementById('slider-list').style.left=-left+'px';
    };

    return {
        init: eventListener
    }
}();

toggleSlider.init();