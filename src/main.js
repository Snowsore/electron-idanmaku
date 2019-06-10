const {app, BrowserWindow, Menu, Tray, globalShortcut, shell} = require('electron');

let canvasWindow;
let cannonWindow;

app.once('ready', () => setTimeout(createCanvasWindow, 300));

function createCannonWindow() {
	cannonWindow = new BrowserWindow({
		transparent: true,
		frame: false,
		parent: canvasWindow,
		width:520,
		height:50
	});
	cannonWindow.loadURL(`file://${__dirname}/html/icannon.html`);

	cannonWindow.on('closed', function () {
		cannonWindow = null;
	})
}

function createCanvasWindow () {
	canvasWindow = new BrowserWindow({
		transparent: true,
		frame: false
	})
	canvasWindow.maximize();
	canvasWindow.setIgnoreMouseEvents(true);
	canvasWindow.setSkipTaskbar(true)
	canvasWindow.loadURL(`file://${__dirname}/html/icanvas.html`)
	setInterval(() => {canvasWindow.setAlwaysOnTop(true, "floating")}, 1000);

	globalShortcut.register('command+shift+d', () => {
		if(cannonWindow) {
			cannonWindow.close();
		} else {
			createCannonWindow();
			cannonWindow.focus();
		}
	})

	tray = new Tray(`${__dirname}/res/icon.png`)
	const contextMenu = Menu.buildFromTemplate([
		{
			label: 'Show Danmaku',
			type: 'checkbox',
			checked: true,
			click: () => {
				if(contextMenu.items[0].checked) {
					canvasWindow.show();
				} else {
					canvasWindow.hide();
				}
			}
		},
		{
			label: 'Setting',
			click: () => {
				shell.openItem(`${__dirname}`);
			}
		},
		{
			role: 'quit'
		},

	]);
	tray.setContextMenu(contextMenu)
}
