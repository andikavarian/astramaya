function removeClass(elements, myClass) {
    // if there are no elements, we're done
    if (!elements) { return; }

    // if we have a selector, get the chosen elements
    if (typeof(elements) === 'string') {
        elements = document.querySelectorAll(elements);
    }
    // if we have a single DOM element, make it an array to simplify behavior
    else if (elements.tagName) { elements=[elements]; }
    // create pattern to find class name
    var reg = new RegExp('(^| )'+myClass+'($| )','g');
    // remove class from all chosen elements
    for (var i=0; i<elements.length; i++) {
        elements[i].className = elements[i].className.replace(reg,' ');
    }
}

function removeClass2(elements, myClass) {
    // if there are no elements, we're done
    if (!elements) { return; }

    // if we have a selector, get the chosen elements
    if (typeof(elements) === 'string') {
        elements = document.querySelectorAll(elements);
    }
    // if we have a single DOM element, make it an array to simplify behavior
    else if (elements.tagName) { elements=[elements]; }
    // create pattern to find class name
    var reg = new RegExp('(^| )'+myClass+'($| )','g');
    // remove class from all chosen elements
    for (var i=0; i<elements.length; i++) {
        elements[i].className = elements[i].className.replace(reg,' ');
    }
}


export default {removeClass}