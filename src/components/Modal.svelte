<script>
	import { fade } from 'svelte/transition';
  export let status=false, title='', subtitle='';
</script>
<div class="modal" in:fade out:fade class:active-modal={status}>
  <div class="modal-content">
    <h4 class="modal-title"> {title} <br/> {subtitle}</h4>
    <i class="fas fa-times modal-close" on:click={() => status = false}></i>
    <slot/>
  </div>
</div>

<style>
.modal{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, .5);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 1rem;
	z-index: var(--z-modal);
	opacity: 0;
	visibility: hidden;
	transition: .3s;
}
.modal-close{
	position: absolute;
	top: 1rem;
	right: 1rem;
	font-size: 1.5rem;
	color: var(--first-color);
	cursor: pointer;
}
.modal-content{
	position: relative;
	background-color: var(--container-color);
	padding: 1.5rem;
	border-radius: .5rem;
}

/* Active Modal */
.active-modal{
	opacity: 1;
	visibility: visible;
}
/* For small devices */
@media screen and (min-width: 350px) {
	.modal{
		padding: 0 .5rem;
	}
}

@media screen and (min-width: 768px) {
	.modal-content{
		width: 450px;
	}
}

.modal-title{
	font-size: var(--h3-font-size);
	font-weight: var(--font-medium);
	margin-bottom: var(--mb-1-5);
}
</style>