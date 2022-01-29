<script>
  import QualificationsList from './components/QualificationsList.svelte';
  let qualificationsGroups = [
    {
      active: true,
      title: 'Educação',
      name: 'education',
      icon: 'fas fa-graduation-cap',
      items: [
        {id:0, title:'Ciências e Tecnologia', locality: 'UFRN', date: '2019 – Em atividade'},
        {id:1, title:'B7WEB – Full Stack', locality: 'B7WEB', date: '2020 – Em atividade'},
        {id:2, title:'Elements of AI.', locality: 'University of Helsinki', date: '2020 - 2020'},
        {id:3, title:'Programador de Dispositivos Móveis', locality: 'IMD - UFRN', date: '2020 – 2020'},
        {id:4, title:'Programador WEB', locality: 'IMD - UFRN', date: '2020 - 2020'},
        {id:5, title:'Técnico em Eletrônica', locality: 'IMD - UFRN', date: '2017 – 2019'},
      ]
    },
    {
      active: false,
      title: 'Trabalho',
      name: 'work',
      icon: 'fas fa-briefcase',
      items: [
        {id:0, title:'Estagiario de Desenvolvimento de Software e Sistemas', locality: 'Real Seguro Viagem', date: '2021 – Em atividade'},
        {id:1, title:'Bolsista de Apoio Técnico', locality: 'Escola de Música, EMUFRN', date: '2020 – 2021'},
      ]
    },
  ];
</script>

<section class="qualification section">
  <h2 class="section__title">Qualificações</h2>
  <span class="section__subtitle">Minha jornada pessoal</span>
  <QualificationsList bind:qualificationsGroups={qualificationsGroups}/>
</section>

<style>
@media screen and (min-width: 768px) {
	.section{
		padding: 6rem 0 2rem;
	}
	.section__subtitle{
		margin-bottom: 4rem;
	}
}
</style>