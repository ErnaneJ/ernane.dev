<script>
  import { onMount } from 'svelte';
  import Project from './components/Project.svelte';

  let Carousel, carousel;
  onMount(async () => {
    Carousel = (await import('svelte-carousel')).default;
  })

  const projects = [
    {title: 'Renan & Joyce', description: 'Site de casamento completo com API de presentes implementado com svelte e Ruby - sinatra. Contando com toda a delicadesa e amor do casal.', linkDemo: 'https://www.renanejoyce.com.br/', image: '/assets/renanejoyce.webp'},
    {title: 'Whatsapp - Clone & Redesign', description: 'Uma junção entre a aplicação dos conhecimentos adquiridos ao longo do estudo do ReactJs e um breve redesign minimalista da aplicação Whatsapp em sua versão desktop.', linkDemo: 'https://clone-whatsapp.netlify.app/', image: '/assets/clonewhatsapp.webp'},
    {title: 'Math Star', description: 'Jogo educacional e divertido inpirado na serie de filmes Star Wars. O intuito e ajudar criancas que necessitam das habilidades (EF03MA07) e (EF03MA03) descritas pelo MEC a desenvolvelas de uma forma descontraida.', linkDemo: 'https://ernanej.github.io/MathStar-P5.js/', image: '/assets/mathstar.webp'},
  ];
</script>

<section class="portfolio section" id="portfolio">
  <h2 class="section__title">Portfólio</h2>
  <span class="section__subtitle">Alguns dos meus projetos</span>

  <div class="portfolio__container container">
    {#if Carousel}
      <svelte:component this={Carousel} bind:this={carousel} perPage={1} loop={true} dots={false} >
        <span class="control" slot="left-control">
          <i class="fas fa-angle-left swiper-portfolio-icon"></i>
        </span>
        {#each projects as project}
          <Project {project}/>
        {/each}
        <span class="control" slot="right-control">
          <i class="fas fa-angle-right swiper-portfolio-icon"></i>
        </span>
      </svelte:component>
    {/if}
  </div>
</section>

<style>
.portfolio__container{
  position: relative;
  overflow: hidden;
  min-height: 250px;
}
/* For small devices */
@media screen and (min-width: 350px) {
	.container{
		margin-left: var(--mb-1);
		margin-right: var(--mb-1);
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
}
</style>