document.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.querySelector('.menu-toggle');
	const sidebar = document.querySelector('aside');

	menuToggle.addEventListener('click', () => {
		sidebar.classList.toggle('open');
	});
});