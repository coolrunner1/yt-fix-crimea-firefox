const swap = () => {
	const playerContainer = document.querySelector("#player");
	playerContainer.innerHTML = '';
	const iframe = document.createElement("iframe");
	iframe.src="https://www.youtube.com/embed/"+window.location.search.substring(3).split("&")[0]+"?autoplay=1";
	iframe.allow='autoplay';
	iframe.style.height='100%';
	iframe.style.minHeight="40vw";
	iframe.style.width='100%';
	playerContainer.append(iframe);
}

if (window.location.pathname === "/watch") {
	const button = document.createElement('button');
	button.innerText = 'Click Me!';
	button.style.position = 'fixed';
	button.style.top = '10px';
	button.style.right = '10px';
	button.style.zIndex = '1';
	button.style.padding = '10px';
	button.style.marginTop = '50px';
	button.style.backgroundColor = '#ff0000';
	button.style.color = '#ffffff';
	button.style.border = 'none';
	button.style.borderRadius = '5px';
	button.style.cursor = 'pointer';

	button.addEventListener('click', () => swap());
	document.body.addEventListener('keyup', (event) => {
		if (event.code === "KeyR") {
			swap();
		}
	});

	document.body.appendChild(button);
}
