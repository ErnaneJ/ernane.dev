<script>
  import { fly } from 'svelte/transition';
  export let message, status;
</script>
{#if status}
  <div class="message_container" transition:fly="{{ y: -200, duration: 1000 }}">
    <div class="message">
      <span>{message}</span>
      <i class="fas fa-times close" on:click={()=>{status=false}}></i>
    </div>
  </div>
{/if}

<style>
  .message_container{
    position: fixed;
    top: 1rem;
    width: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .message{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--container-color);
    padding: 1rem 2rem;
    border-radius: 1rem;
  }
  .close{
    margin-left: 1.5rem;
    color: var(--first-color);
    font-size: 1.25rem;
    cursor: pointer;
    transition: .3s all ease;
  }
  .close:hover{
    opacity: .7;
  }
  @media only screen and (max-width: 900px) {
	.message{
    font-size: .85rem;
    margin: 0 1rem
  }
}
</style>

