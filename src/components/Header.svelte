<script>
	import { onMount } from 'svelte';
	import { toggleTheme, setActiveLink} from '../lib/helper';

	let showMenu = false;
	let scrollY = 0, lastScroll = -1, headerHiddenScroll = false;
	let links = [];
	
	onMount(()=>{toggleTheme();setActiveLink();});
	
	const normalizeString = link => link.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g,'-').toLowerCase();
  
	const handleScroll = () =>{
		if ( scrollY > lastScroll ){ headerHiddenScroll = true; } 
		else{ headerHiddenScroll = false; }
		lastScroll = scrollY;
	}
  links = [
		{name: 'Inicio', icon: 'fas fa-home', path: `/#${normalizeString('Inicio')}`},
		{name: 'Sobre', icon: 'fas fa-user', path: `/#${normalizeString('Sobre')}`},
		{name: 'Skills', icon: 'fas fa-file-code', path: `/#${normalizeString('Skills')}`},
		{name: 'Portfólio', icon: 'fas fa-images', path: `/#${normalizeString('Portfólio')}`}, 
		{name: 'Contato', icon: 'far fa-paper-plane', path: `/#${normalizeString('Contato')}`},
		// {name: 'Blog', path:'/blog', icon: 'fas fa-blog'} em breve
	]
</script>
<svelte:window bind:scrollY={scrollY} on:scroll={handleScroll}/>

<header class="header" id="header" class:headerHiddenScroll={headerHiddenScroll} class:scroll-header={scrollY>=80}>
  <nav class="nav container">
    <a href="/" class="nav__logo"> <i class="fas fa-code-branch"></i> Ernane.dev</a>
    <div class="nav__menu" id="nav-menu" class:show-menu={showMenu}>
      <ul class="nav__list grid">		
        {#each links as link}
					<li class="nav__item" on:click={ () => showMenu=!showMenu }>
						<a href="{link.path}" class="nav__link" class:active-link={normalizeString(link.name) == 'inicio'}>
							<i class="{link.icon} nav__icon"></i> {link.name}
						</a>
					</li>
        {/each}
      </ul>
      <i class="fas fa-times nav__close" id="nav-close" on:click={ () => showMenu=!showMenu }></i>
    </div>
    <div class="nav__btns">
      <i class="fas fa-moon change-theme" id="theme-button"></i>

      <div class="nav__toggle" id="nav-toggle" on:click={ () => showMenu=!showMenu }>
        <i class="fas fa-th-large"></i>
      </div>
    </div>
  </nav>
</header>

<style>
header{
	transition: all .5s ease;
	transform: translateY(0px);
}
.nav{
	max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__logo, .nav__link, .nav__toggle{
	color: var(--title-color);
	font-weight: var(--font-medium);
}
.nav__toggle{
	font-size: 1.1rem;
	cursor: pointer;
}
.nav__link:hover, .nav__toggle:hover, .nav__logo:hover{
	color: var(--first-color)
}
.nav__list{
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
}
.nav__link{
	display:flex;
	flex-direction: column;
	align-items: center;
	font-size: var(--small-font-size);
	color: var(--title-color);
	font-weight: var(--font-medium);
}
.nav__link:hover{
	color: var(--first-color)
}
.nav__icon{
	font-size: 1.2rem;
}
.nav__close{
	position: absolute;
	right: 1.3rem;
	bottom: 0.5rem;
	font-size: 1.5rem;
	cursor: pointer;
	color: var(--first-color);
}
.nav__close:hover{
	color: var(--first-color-alt);
}

.show-menu{
	bottom: 0 !important;
}
.active-link{
	color: var(--first-color);
}
.scroll-header{
	box-shadow: 0 -1px 4px rgba(0,0,0,.15);
}

.change-theme{
	font-size: 1rem;
}

@media screen and (max-width: 767px){
	.nav__menu{
		position: fixed;
		bottom: -100vh;
		left: 0;
		width: 100%;
		background-color: var(--body-color);
		padding: 2rem 1.5rem 4rem;
		box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
		border-radius: 1.5rem 1.5rem 0 0;
		transition: .3s;
	}
	.nav{
		border-top:1px solid #272c44 !important;
	}
}

/* For small devices */
@media screen and (min-width: 350px) {
	.nav{
		border-top: none;
	}
	.container{
		margin-left: var(--mb-1);
		margin-right: var(--mb-1);
	}
	.nav__menu{
		padding: 2rem .25rem 4rem;
	}
	.nav__list{
		column-gap: 0;
	}
}

@media screen and (min-width: 768px) {
	.container{
		margin-left: auto;
		margin-right: auto;
	}
	.section{
		padding: 6rem 0 2rem;
	}
	.section__subtitle{
		margin-bottom: 4rem;
	}
	.header{
		top: 0;
		bottom: initial;
		padding: 0 1rem;
	}
	.nav{
		height: calc(var(--header-height) + 1.5rem);
		column-gap: 1rem;
	}
	.nav__icon,
	.nav__close,
	.nav__toggle{
		display: none;
	}
	.nav__list{
		display: flex;
		column-gap: 2rem;
	}
	.nav__menu{
		margin-left: auto;
	}
	.nav__logo, .nav__btns{
		transform: translateY(-15px);
	}
	.headerHiddenScroll{
		transform: translateY(-1000px);
	}
}

/* For large devices */
@media screen and (min-width: 1024px) {
	.header{
		padding: 0;
	}
}
</style>