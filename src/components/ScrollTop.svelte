<script>
  let scrollY = 0;
</script>

<span name="scroll-up" title="scroll-up" class="scrollup" id="scroll-up" on:click={() => scrollY = 0} class:show-scroll={scrollY >= 400}>
  <i class="fas fa-arrow-up scrollup__icon"></i>
</span>
<svelte:window bind:scrollY={scrollY}/>

<style>
.scrollup{
	position: fixed;
	right: 1rem;
	bottom: -20%;
	background-color: var(--first-color);
	opacity: 0.8;
	padding: 0 .3rem;
	border-radius: .4rem;
	z-index: var(--z-tooltip);
	transition: .4s;
	cursor: pointer;
}

.scrollup:hover{
	background-color: var(--first-color-alt);
}

.scrollup__icon{
	font-size: 1.0rem;
	color: #fff;
	padding: .5rem .3rem;;
}

/* Show scroll */
.show-scroll{
	bottom: 5rem;
}
</style>