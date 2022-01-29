<script>
  import SkillItem from './SkillItem.svelte';
  export let skill;
  export let skilsStatus;

  skilsStatus[skill.id] = skill.id == 0 ? true : false;

  const toggleSkill = () => {
    skilsStatus.forEach((s, i) => {
      if (i !== skill.id) { skilsStatus[i] = false};
    });
    skilsStatus[skill.id] = !skilsStatus[skill.id];
  };

  
</script>

<div>
  <div class="skills__content">
    <div class="skills__header" on:click={() => toggleSkill()}>
      <i class="{skill.icon} skills__icon"></i>

      <div>
        <h3 class="skills__title">{skill.title}</h3>
        <span class="skills__subtitle">{skill.subtitle}</span>
      </div>
      <i class="fas fa-angle-down skills__arrow" class:skills__arrow-rotate180={skilsStatus[skill.id]}></i>
    </div>

    <div class="skills__list grid" class:skills__open={skilsStatus[skill.id]}>
      {#each skill.list as item}
        <SkillItem {item}/>
      {/each}
    </div>
  </div>
</div>

<style>
.skills__header{
	display: flex;
	align-items: center;
	margin-bottom: var(--mb-2-5);
	cursor: pointer;
}
.skills__icon, .skills__arrow{
	font-size: 2rem;
	color: var(--first-color);
}
.skills__icon{
	margin-right: var(--mb-1-5);
}
.skills__title{
	font-size: var(--h3-font-size);
}
.skills__subtitle{
	font-size: var(--small-font-size);
	color: var(--text-color-light);
}
.skills__arrow{
	margin-left: auto;
	transition: .4s;
}
.skills__list{
	transition: .3s;
	row-gap: 1.5rem;
	padding-left: 2.7rem;
  overflow: hidden;
  height: 0;
  overflow: auto;
  padding-right: 1rem;
}
.skills__title{
	display: flex;
	justify-content: space-between;
	margin-bottom: var(--mb-0-5);
}
.skills__name{
	font-size: var(--normal-font-size);
	font-weight: var(--font-medium);
}
.skills__open{
  height: 200px;
	margin-bottom: var(--mb-2-5);	
}

.skills__arrow-rotate180{
	transform: rotate(180deg);
}
</style>