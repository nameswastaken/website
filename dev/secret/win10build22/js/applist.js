// applist of all apps installed on computer, this is bundled and may not represent 1:1 to what the user has installed if that is ever implemented
// the UID is a unique identifier for every app generated to prevent duplicates.
// this would exist as a json file however it cannot as json files do not work in html files locally.
const applist = [
    { id: 1, program: "edge", icon: './icns/edge.svg', launch: 'index.html', displayname: "Microsoft Edge", uid: '150728' },
    { id: 2, program: "testapp", icon: './icns/wifi-0.ico', launch: 'index.html', displayname: "Test Program", uid: '128919' }
];