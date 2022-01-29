<script>
  import '../../app.css';

  const socialLinks = [
    {name: 'linkedin', class: "linkedin", link: 'https://www.linkedin.com/in/ernane/'},
    {name: 'github', class: "github", link: 'https://github.com/ErnaneJ'},
		{name: 'Instagram', class: "instagram", link: 'https://www.instagram.com/ernane.jx/'},
		{name: 'Telegram', class: "telegram", link: 'https://t.me/ErnaneJR'},
		{name: 'Lattes', class: " fas fa-file-invoice", link: 'http://buscatextual.cnpq.br/buscatextual/visualizacv.do'},
  ]
</script>

<section class="home section" id="inicio">
  <div class="home__container container grid">
    <div class="home__content grid">
      <div class="home__social">
        {#each socialLinks as link}
          <a href="{link.link}" title="{link.name}" class="home__social-icon" target="_blank" rel="noreferrer">
            <i class="fab fa-{link.class}"></i>
          </a>
        {/each}
      </div>
      
      <div class="home__img">
				<img width="350px" height="305px" src="./assets/home-img.webp" alt="Imagem de perfil"/>
      </div>

      <div class="home__data">
        <h1 class="home__title">Hi, I'am Ernane</h1>
        <h2 class="home__subtitle">Desenvolvedor de Software</h2>
        <p class="home__description">
          Técnico eletrônico amante da tecnologia e entusiasta do desenvolvimento de software.
        </p>
        <a href="/#contato" class="button button--flex">
          Entre em contato <i class="far fa-paper-plane button__icon"></i>
        </a>
      </div>
    </div>

    <div class="home__scroll">
      <a href="/#sobre" class="home__scroll-button button-flex">
        <i class="fas fa-chevron-circle-down home__scroll-mouse"></i>
        <span class="home__scroll-name">Role para baixo</span>
      </a>
    </div>
  </div>
</section>

<style>
.home__container{
	gap: 1rem;
}
.home__img{
	display: flex;
	align-items: center;
	justify-content: center;
}
.home__content{
	grid-template-columns: .5fr 3fr;
	padding-top: 3.5rem;
	align-items: center;
}
.home__social{
	display: grid;
	grid-template-columns: max-content;
	row-gap: 1rem;
}
.home__social-icon{
	font-size: 1.25rem;
	color: var(--first-color);
}
.home__social-icon:hover{
	color: var(--first-color-alt);
}

.home__data{
	grid-column: 1/3;
}

.home__title{
	font-size: var(--big-font-size);
}
.home__subtitle{
	font-size: var(--h3-font-size);
	color: var(--text-color);
	font-weight: var(--font-medium);
	margin-bottom: var(--mb-0-75);
}

.home__description {
	margin-bottom: var(--mb-2);
}

.home__scroll{
	display: none;
	transition: .3s;
}
.home__scroll:hover{
	transform: translateY(.25rem);
}
.home__scroll-button{
	color: var(--first-color);
}

.home__scroll-mouse{
	font-size: 1.5rem;
	margin-right: 5px;
	transform: translateY(3px);
}

.home__scroll-name{
	font-size: var(--small-font-size);
	color: var(--title-color);
	font-weight: var(--font-medium);
	margin-right: var(--mb-0-25);
}

.home__scroll-arrow{
	font-size: 1.25rem;
}

/* For small devices */
@media screen and (min-width: 350px) {
	.home__content{
		grid-template-columns: .25fr 3fr;
	}
}
/* For medium devices */
@media screen and (min-width: 568px) {
	.home__content{
		grid-template-columns: max-content 1fr 1fr;
	}
	.home__data{
		grid-column: initial;
	}
	.home__img{
		order: 1;
		justify-self: center;
	}
}

@media screen and (min-width: 768px) {
	.home__container{
		row-gap: 5rem;
	}
	.home__content{
		padding-top: 5.5rem;
		column-gap: 2rem;
	}
	.home__scroll{
		display: block;
	}
	.home__scroll-button{
		margin-left: 3rem;
		display: block;
		animation: homeScroll 1.5s linear infinite;
	}
	@keyframes homeScroll{
		0%{
			transform: translateY(0);
		}
		50%{
			transform: translateY(10px);
		}
		100%{
			transform: translateY(0);
		}
	}
}

/* For large devices */
@media screen and (min-width: 1024px) {
	.home__social{
		transform: translateX(-6rem);
	}
}
</style>