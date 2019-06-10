const icanvas = document.createElement('iframe');
icanvas.style = `
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
	pointer-events:none;
	z-index:9999;
	border:none;
`;
icanvas.src = 'https://idmk.snowsore.com/canvas/';
document.body.appendChild(icanvas);
