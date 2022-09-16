
export function menuInit() {
	if (document.querySelector('.icon-menu')) {
		document.addEventListener("click", function (e) {
			if (e.target.closest('.icon-menu')) {
				// bodyLockToggle();
				document.documentElement.classList.toggle("menu-open");
			}
		});
	};
}
export function menuOpen() {
	bodyLock();
	document.documentElement.classList.add("menu-open");
}
export function menuClose() {
	bodyUnlock();
	document.documentElement.classList.remove("menu-open");
}

