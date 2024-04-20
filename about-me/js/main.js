/*==================== FLOATING ICON =====================*/

document.addEventListener("DOMContentLoaded", function() {
	
    const _floatingIcon = document.getElementById("floatingIcon");

    window.addEventListener("scroll", function() {
        // Code to handle scrolling if needed
    });
});

/*==================== SHOW SIDE MENU ====================*/

	const showMenu = (toggleId, navId) =>
	{
		const _toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)

		if(_toggle && nav){
			_toggle.addEventListener('click', ()=>{
				nav.classList.toggle('show')
			})
		}
	}
	showMenu('nav-toggle','nav-menu')


/*==================== REMOVE SIDE MENU - MOBILE ====================*/

	const navLink = document.querySelectorAll('.nav_link')

	function linkAction() 
	{
		const _navMenu = document.getElementById('nav-menu')
		_navMenu.classList.remove('show')
	}
	navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

	const sections = document.querySelectorAll('section[id]')

	const scrollActive = () =>
	{
		const _scrollDown = window.scrollY

		sections.forEach(current =>
		{
			const _sectionHeight = current.offsetHeight,
				  _sectionTop = current.offsetTop - 58,
				  _sectionId = current.getAttribute('id'),
				  _sectionsClass = document.querySelector('.nav_menu a[href*=' + _sectionId + ']')
			
			if(_scrollDown > _sectionTop && _scrollDown <= _sectionTop + _sectionHeight) {
				_sectionsClass.classList.add('active-link')
			}
			else {
				_sectionsClass.classList.remove('active-link')
			}                                                    
		})
	}
	window.addEventListener('scroll', scrollActive)


/*==================== SCROLL REVEAL ANIMATION ====================*/

	const sr = ScrollReveal
	({
		origin: 'top',
		distance: '80px',
		duration: 1600,
		delay: 160,
	});

	sr.reveal('.about_img, .technologies_subtitle, .technologies_text',{}); 
	sr.reveal('.about_subtitle, .about_text, .skills_img',{delay: 300}); 
	sr.reveal('.technologies_data, .projects_img',{interval: 100}); 