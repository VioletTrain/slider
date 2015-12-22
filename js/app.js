document.getElementById( 'grides' ).addEventListener( 'click', function (elem) {

    if (elem.toElement.tagName === 'IMG') {
        var parentElement = elem.toElement.parentNode;
        this.removeChild(parentElement);
    }

}, false);
