<script>
  import Modal from '../../Modal.svelte';
  export let service;
</script>

<div class="services__content">
  <div>
    <i class="{service.icon} services__icon"></i>
    <h3 class="services__title">{service.name} <br/> {service.function}</h3>
  </div>

  <span class="button button--flex button--small button--link services__button" on:click={() => service.status =  true}>
    View More
		<i class="fas fa-chevron-right button__icon"></i>
  </span>

  <Modal status={service.status} title={service.name} subtitle={service.function}>
      <ul class="services__modal-services grid">
        {#each service.content as content}
          <li class="services__modal-service">
            <i class="fas fa-check-circle services__modal-icon"></i>
            <p>{content}</p>
          </li>
        {/each}
      </ul>
  </Modal>
</div>

<style>
.services__content{
	position: relative;
	background-color: var(--container-color);
	padding: 3.5rem .5rem 1.25rem 1.5rem;
	transition: .3s;
}
.services__content:hover{
	box-shadow: 0 4px 8px rgba(0, 0, 0, .15); 
}

.services__icon{
	font-style: 1.5rem;
	color: var(--first-color);
	margin-bottom: var(--mb-1);
}

.services__title{
	font-size: var(--h3-font-size);
	margin-bottom: var(--mb-1);
	font-weight:var(--font-medium);
}
.services__button{
	cursor: pointer;
	font-size: var(--small-font-size);
}
.services__button:hover .button__icon{
	transform: translate(.25rem);
}
.services__modal-services{
	row-gap: 1rem;
}
.services__modal-service{
	display: flex;
}

.services__modal-icon{
	color: var(--first-color);
	margin-right: var(--mb-0-25);
}

/* Active Modal */
.active-modal{
	opacity: 1;
	visibility: visible;
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
	.services__content{
		padding: 3.5rem
	}
	.services__modal{
		padding: 0 .5rem;
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
	.services__icon{
		font-size: 2rem;
	}	
	.services__content{
		padding: 6rem 0 2rem 2.5rem;
		border-radius: 1rem;
	}
	.services__modal-content{
		width: 450px;
	}
}

/* For large devices */
@media screen and (min-width: 1024px) {
	.services__container{
		grid-template-columns: repeat( 3, 238px );
	}
}
</style>