const taskbar = document.getElementById("taskbar");
const status = document.getElementById("statusicons");
const iconset = [
    { id: 1, program: "edge", icon: './icns/edge.svg', uid: '150728' },
    { id: 2, program: "testapp", icon: './icns/wifi-0.ico', uid: '128919' }
];
function makeIcon(app) {
    const button = document.createElement("button");
    button.innerHTML = `<img src="${app.icon}" alt="${app.program}">`;
    taskbar.insertBefore(button, status);
    button.setAttribute('class', 'taskbarapp');
    button.setAttribute('id', app.uid);
    button.setAttribute('onclick', `launch(${app.uid});`);
}
iconset.forEach((element) => makeIcon(element));