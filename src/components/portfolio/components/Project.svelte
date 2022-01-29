<script>
  export let project;
</script>
<div class="portfolio__content grid">
  <img width="256px" height="160px" src="{project.image}" alt="preview project {project.title}" class="portfolio__img">
  <div class="portfolio__data">
    <h3 class="portfolio__title"> {project.title} </h3>
    <p class="portfolio__description"> {project.description} </p>
    <a href="{project.linkDemo}" target="_blank" rel="noreferrer" class="button button--flex button--small portfolio__button">
      Ir para o Projeto
      <i class="fas fa-arrow-right button__icon"></i>
    </a>
  </div>
</div>

<style>
.portfolio__content{
	padding: 0 1.5rem;
}
.portfolio__img{
	width: 256px;
	border-radius: .5rem;
	justify-self: center;
}
.portfolio__title{
	font-size: var(--h3-font-size);
	margin-bottom: var(--mb-0-5);
}
.portfolio__description{
	margin-bottom: var(--mb-0-75);
}
.portfolio__button:hover .button__icon{
	transform: translate(.25rem);
}
</style>