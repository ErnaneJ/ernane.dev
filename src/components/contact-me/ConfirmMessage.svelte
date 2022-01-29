<script>
  import Modal from '../Modal.svelte';
  export let confirmMessage;
</script>

{#if confirmMessage}
  <Modal bind:status={confirmMessage} title="Menssagem enviada!">
    <div class="confirmMessage-container">
      <p class="confirmMessage-body">
        Muito obrigado(a) por sua menssagem. Entrarei em contato em breve!
      </p>
      <button type="submit" class="button button--flex" on:click={() => confirmMessage = false}>
        Confirmar <i class="fas fa-check button__icon"></i>
      </button>
    </div>
  </Modal>
{/if}

<style>
  .confirmMessage-body{
    margin-bottom: 20px;
  }
  .confirmMessage-container{
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
