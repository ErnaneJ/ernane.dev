<script>
  import QualificationData from './QualificationData.svelte';
  export let qualificationsGroups;

  
  const toggleGroupActive = group => {
    qualificationsGroups.forEach((gp,i) => {
      qualificationsGroups[i].active = false;
    });
    group.active = true;
  }
</script>

<div class="qualification__tabs">
  {#each qualificationsGroups as group}
    <div class="qualification__button button--flex" class:qualification__tab--active={group.active} data-target="/#{group.name}" on:click={toggleGroupActive(group)}>
      <i class="{group.icon} qualification__icon"></i>
      {group.title}
    </div>
  {/each}
</div>
<div class="qualification__container container">
  <div class="qualification__sections">
    {#each qualificationsGroups as group}
			{#if group.active}
				<div class="qualification__content" class:qualification__active={group.active} data-content id={group.name}>
					{#each group.items as qualification}
						<QualificationData {qualification} items={group.items}/>
					{/each} 
				</div>
			{/if}
    {/each}
  </div>
</div>

<style>
.qualification__tabs{
	display: flex;
	justify-content: space-evenly;
	margin-bottom: var(--mb-2);
}

.qualification__button{
	font-size: var(--h3-font-size);
	font-weight: var(--font-medium);
	cursor: pointer;
	padding-bottom: 10px;
	transition: .5s all ease;
	position: relative;
	overflow:hidden;
}
.qualification__button::before{
	content: '';
	width: 100%;
	height: 1px;
	background-color: var(--first-color);
	position: absolute;
	bottom: 0;
	transition: .3s all ease;
	left: 100vh;
}
.qualification__tab--active::before{
	left: 0;
}
.qualification__button:hover{
	color: var(--first-color);
}
.qualification__icon{
	font-size: 1.8rem;
	margin-right: var(--mb-1);
}
.qualification__data{
	display: grid;
	grid-template-columns: 1fr max-content 1fr;
	column-gap: 1.5rem;
}

.qualification__title{
	font-size: var(--normal-font-size);
	font-weight: var(--font-medium);
}

.qualification__subtitle{
	display: inline-block;
	font-size: var(--small-font-size);
	margin-bottom: var(--mb-1);
}

.qualification__calendar{
	font-size: var(--smaller-font-size);
	color: var(--text-color-light);
}

.qualification__rounder{
	display: inline-block;
	width: 13px;
	height: 13px;
	background-color: var(--first-color);
	border-radius: 50%;
}

.qualification__line{
	display: block;
	width: 1px;
	height: 100%;
	background-color: var(--first-color);
	transform: translate(6px, -7px);
}

.qualification__content[data-content]{
	display: none;
}
.qualification__active[data-content]{
	display: block;
}
.qualification__tab--active{
	color: var(--first-color);
}

/* For small devices */
@media screen and (min-width: 350px) {
	.container{
		margin-left: var(--mb-1);
		margin-right: var(--mb-1);
	}
  .qualification__sections{
    display: flex;
    align-items: center;
    justify-content: center;
		flex-direction: row;
  }
}

/* For medium devices */
@media screen and (min-width: 568px) {
	.qualification__sections{
		display: grid;
		grid-template-columns: .6fr;
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
	.qualification__tabs{
		justify-content: center;
	}
	.qualification__button{
		margin: var(--mb-1);

	}
	.qualification__sections{
		grid-template-columns: .5fr;
		justify-content: center;
	}
}
</style>
