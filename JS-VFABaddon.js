// Add this if JS-HorizontalNavigationFAB.js is running : <script src="./JS-VFABaddon.js"></script>

if (!document.getElementById("TFAB")) {
	if (document.readyState === "complete" || document.readyState === "interactive") HFAB(); else window.addEventListener("load", VFAB);
}

function VFAB() {
		var B = document.createElement("div"), T = document.createElement("div");
		B.className = T.className = "FABdo";
		B.id = "BFAB"; B.setAttribute("X",0);
		T.id = "TFAB"; T.setAttribute("X",0);
	var oldY = 0, Z=122;

	// function scrollpause() {
	// function SP(e) {e.preventDefault();e.stopPropagation();}
	// window.addEventListener('scroll', SP, {passive: false});
	// window.addEventListener('wheel', SP, {passive: false});
	// setTimeout(function(){window.removeEventListener('scroll', SP);window.removeEventListener('wheel', SP)}, 500);}

	function home() {window.scrollTo({top: 0, behavior: (CSS.supports("-moz-user-select","none")?"auto":"smooth")})}
	B.addEventListener("click", home, {passive: true});

	function reload() {location.reload();}
	T.addEventListener("click", reload, {passive: false});

	function wheel(e) {
			if ((!oldY || Math.abs(oldY)>Z) && Math.abs(e.deltaY)>Z) {
				if (!window.pageYOffset && oldY<-Z && (T.getAttribute("X")==0)) {
				T.setAttribute("X",1); B.setAttribute("X",0);
				setTimeout(function(){T.setAttribute("X",0);}, 1500);
				//e.preventDefault();
				}
			else if (oldY>Z && ((window.innerHeight + window.scrollY + 2) >= document.body.offsetHeight) && (B.getAttribute("X")==0)) {
				B.setAttribute("X",1); T.setAttribute("X",0);
				setTimeout(function(){B.setAttribute("X",0);}, 1500);
				//e.preventDefault();
				}
			}
			oldY = Math.round(e.deltaY/10)*10
	}

	window.addEventListener('wheel', wheel, {passive: false});

	const css = document.createElement("style");
	css.textContent = `
	#TFAB {
		top: 0; left: 50%;
		transform: translate(-50%, 0) rotate(360deg);
	}

	#TFAB:before {
		clip-path: circle(50% at 50% 50%);
		top: 0;
	}

	#TFAB:not([X="1"]):not(:hover) {
		transform: translate(-50%, -100%);
	}

	#BFAB {
		transform: translate(0);
		bottom: 0; right: 0;
	}

	#BFAB:not([X="1"]):not(:hover) {
		transform: translate(0, 100%);
	}
	`
	document.head.appendChild(css);
		document.body.appendChild(B);
		document.body.appendChild(T);
}






		
