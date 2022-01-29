<script>
  export let qualification;
  export let items;
</script>

<div class="qualification__data">
  {#if qualification.id % 2 === 0}
    <div></div>
    <div>
      <span class="qualification__rounder"></span>
      {#if qualification.id !== items[items.length-1].id}
        <span class="qualification__line"></span>
      {/if}
    </div>
  {/if}

  <div>
    <h3 class="qualification__title">{qualification.title}</h3>
    <span class="qualification__subtitle">{qualification.locality}</span>
    <div class="qualification__calendar">
      <i class="fas fa-calendar-day"></i>
      {qualification.date}
    </div>
  </div>

  
  {#if qualification.id%2 !== 0}
    <div>
      <span class="qualification__rounder"></span>
      {#if qualification.id !== items[items.length-1].id}
        <span class="qualification__line"></span>
      {/if}
    </div>
  {/if}
</div>

<style>
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

@media screen and (min-width: 350px) {
	.qualification__data{
		gap: .5rem;
	}
}
</style>