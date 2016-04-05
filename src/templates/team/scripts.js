var toggleTeam = function() {
    var eventListener = function() {
        var items = document.getElementsByClassName('team__name-link');
        Array.prototype.forEach.call(items, function(item) {
            item.addEventListener('click', _toggleTeam);
        });
    };

    var _toggleTeam = function(event) {
        event.preventDefault();
        var cook = '';
        document.getElementsByClassName('team__name-link_active')[0].classList.remove('team__name-link_active');
        if (event.target.classList.contains('team__name-link')) {
            event.target.classList.add('team__name-link_active');
            cook = event.target.getAttribute('data-name');
        } else {
            event.target.parentElement.classList.add('team__name-link_active');
            cook = event.target.parentElement.getAttribute('data-name');
        }
        document.getElementsByClassName('team__content_item_shown')[0].classList.remove('team__content_item_shown');
        document.getElementById(cook).classList.add('team__content_item_shown');
    };

    return {
        init: eventListener
    }
}();

toggleTeam.init();
