const icannon = document.createElement('iframe');
icannon.style = `
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
	z-index:99999;
	border:none;
`;
icannon.src = 'https://idmk.snowsore.com/cannon/';
document.body.appendChild(icannon);
