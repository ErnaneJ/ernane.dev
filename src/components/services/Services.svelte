<script>
  import Service from './components/Services.svelte';
  const services = [
    {name: 'Ui/Ux', function: 'Designer', icon: 'fas fa-border-all', content: [' I position your company brand.', 'I create ux element interactions.','Web page development.','I develop the user interface.', ], status: false},
    {name: 'Frontend', function: 'Developer', icon: 'fas fa-code', content: [' Sistemas de gerenciamento de conteúdo','Otimização do mecanismo de pesquisa (SEO)','Design de interação ou interface do usuário.','Sistemas de comércio eletrônico','Desempenho da web móvel', 'Testes de performance', 'Web design responsivo', 'Programação Orientada a Objetos', 'Segurança da web / navegador', 'Outros..'], status: false},
    {name: 'Brandding', function: 'Designer', icon: 'fas fa-pen', content: [' I position your company brand.', 'I create ux element interactions.','Web page development.','I develop the user interface.', ], status: false}
  ];
</script>

<section class="services section" id="servicos">
  <h2 class="section__title">Serviços</h2>
  <span class="section__subtitle">Pontos importantes</span>
  
  <div class="services__container container grid">
    {#each services as service}
      <Service {service}/>
    {/each}
  </div>
</section>

<style>
.services__container{
	gap: 1.5rem;
	grid-template-columns: repeat(2, 1fr);
}


/* For small devices */
@media screen and (min-width: 350px) {
	.container{
		margin-left: var(--mb-1);
		margin-right: var(--mb-1);
	}
	.services__container{
		grid-template-columns: max-content;
		justify-content: center;
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
	.services__container{
		grid-template-columns: repeat(3, 218px);
		justify-content: center;
	}
}

/* For large devices */
@media screen and (min-width: 1024px) {
	.services__container{
		grid-template-columns: repeat( 3, 238px );
	}
}
</style>