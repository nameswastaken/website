// program manager v1.0.0
function launch(uid) {
    alert("is functioning");
    const appfind = applist.find(element => String(element.uid) === String(uid));
    const app = document.createElement("window-elem");
    app.setAttribute('iframe-source', `./programs/${uid}/${appfind.launch}`);
    app.setAttribute('window-name', appfind.displayname);
    document.body.appendChild(app);
    alert(appfind);
}