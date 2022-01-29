export const toggleTheme = () => {
  const themeButton = document.getElementById('theme-button');
  if(!themeButton) return;
  const darkTheme = 'dark-theme';
  const iconTheme = 'fa-sun';

  if(localStorage.getItem('selected-theme') == undefined){
    localStorage.setItem('selected-theme', 'dark');
    localStorage.setItem('selected-icon', 'fa-moon');
  }

  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme);
  }

  themeButton.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
  });
}

export const setActiveLink = () => {
  window.addEventListener('scroll', scrollActive);
}

const scrollActive = () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;
  
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    
    let sectionLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if((scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) && sectionLink) sectionLink.classList.add('active-link');
    else if(sectionLink) sectionLink.classList.remove('active-link');
  });
}