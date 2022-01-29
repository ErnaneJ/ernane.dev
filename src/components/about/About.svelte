<script>
	const aboutInfo = [
		{count: '02', firstPhrase: 'Anos de', lastPhrase: 'experiência'},
		{count: '12', firstPhrase: 'Projetos', lastPhrase: 'completos'},
		{count: '08', firstPhrase: 'Linguagens de', lastPhrase: 'programação'},
	];
</script>

<section class="about section" id="sobre">
  <h2 class="section__title">Sobre mim</h2>
  <span class="section__subtitle">Apenas uma introdução</span>
  
  <div class="about__container container grid">
    <img loading="lazy" width="344px" height="229px" src="./assets/me.webp" class="about__img" alt=""/>

    <div class="about__data">
      <p class="about__description">
				Desenvolvedor de Software com conhecimento vasto, mas também com constante vontade de aprender. 
				Atualmente encontro-me atuando em tecnologias web e entregando sempre trabalhos de qualidade.
      </p>
      <!-- <div class="about__info">
				{#each aboutInfo as info}
					<div>
						<span class="about__info-title">{info.count}+</span>
						<span class="about__info-name">{info.firstPhrase}<br/> {info.lastPhrase}</span>
					</div>
				{/each}
      </div> -->
      <div class="about__buttons">
        <a download="" href="/assets/Curriculo-Ernane_Ferreira.pdf" class="button button--flex">
          Download CV<i class="fas fa-download button__icon"></i>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
.about__img{
	width: 200px;
	border-radius: .5rem;
	justify-self: center;
	align-self: center;
}

.about__description{
	text-align: center;
	margin-bottom: var(--mb-2-5)
}

/* .about__info{
	display: flex;
	justify-content: space-evenly;
	margin-bottom: var(--mb-2-5);
}
.about__info-title{
	font-size: var(--h2-font-size);
	font-weight: var(--font-semi-bold);
	color: var(--title-color);
}
.about__info-name{
	font-size: var(--smaller-font-size);
}
.about__info-title, .about__info-name{
	display: block;
	text-align: center;
} */
.about__buttons{
	display: flex;
	justify-content: center;
}

/* For medium devices */
@media screen and (min-width: 568px) {
	.about__container{
		grid-template-columns: repeat(2, 1fr);
	}
}

@media screen and (min-width: 768px) {
	.about__container{
		column-gap: 5rem;
	}
	.about__img{
		width: 350px;
	}
	.about__description{
		text-align: initial;
	}
	/* .about__info{
		justify-content: space-between;
	} */
	.about__buttons{
		justify-content: initial;
	}
}
</style>