<script>
  import Skill from './components/Skill.svelte';
  let skilsStatus = [];
  const skills = [
    {
      id: 0,
      title: 'Frontend developer',
      subtitle: 'Onde a vida ganha cor',
      icon: 'fas fa-code',
      list: [
        {name: 'HTML', percent: 96},
        {name: 'CSS', percent: 87},
        {name: 'Javascript', percent: 89},
        {name: 'Jquery', percent: 78},
        {name: 'Bootstrap', percent: 69},
        {name: 'Svelte', percent: 83},
        {name: 'React', percent: 67},
        {name: 'Rails', percent: 78},
      ]
    },
    {
      id: 1,
      title: 'Backend developer',
      subtitle: 'Onde as informações se compõem',
      icon: 'fas fa-server',
      list: [
        {name: 'Ruby Rails', percent: 76},
        {name: 'MySql', percent: 79},
        {name: 'Postgress', percent: 74},
        {name: 'Node Js', percent: 62},
        {name: 'Firebase', percent: 68},
      ]
    },
    {
      id: 2,
      title: 'Designer',
      subtitle: 'Onde as ideias surgem',
      icon: 'fas fa-swatchbook',
      list: [
        {name: 'Figma', percent: 58},
      ]
    }
  ];
</script>

<section class="skills section" id="skills">
  <h2 class="section__title">Skills</h2>
  <span class="section__subtitle">Meu nível técnico</span>

  <div class="skills__container container grid">
    {#each skills as skill}
      <Skill {skill} bind:skilsStatus={skilsStatus}/>
    {/each}
  </div>
</section>

<style>
.skills__container{
	row-gap: 0;
}
@media screen and (min-width: 568px) {
	.skills__container{
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>