function draggable(elem) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const root = elem.getRootNode();
    const header = root.getElementById ? root.getElementById(elem.id + "header") : document.getElementById(elem.id + "header");
    const target = header || elem.shadowRoot?.querySelector('.titlebar') || elem.querySelector('.titlebar') || elem;

    target.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elem.style.top = (elem.offsetTop - pos2) + "px";
        elem.style.left = (elem.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
// stolen