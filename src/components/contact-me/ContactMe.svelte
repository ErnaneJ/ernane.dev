<script>
  import ConfirmMessage from './ConfirmMessage.svelte';
  let confirmMessage = false;
  let triedToSend = false;
  let message = {name: '', email: '', title: '', message: ''};
  let invalidField = {name: false, email: false, title: false, message: false};

  const validateInput = () => {
    if(!triedToSend) return;
    invalidField.name = message.name == '' ? true : false;
    invalidField.email = message.email == '' ?  true : false;
    invalidField.title = message.title == '' ?  true : false;
    invalidField.message = message.message == '' ?  true : false;
  };
  const sendForm = () => {
    triedToSend = true;
    if(message.name !== '' && message.email !== '' && message.title !== '' && message.message !== ''){
      const form = new FormData(document.getElementById('message-form'));
      fetch("https://formsubmit.co/fe641c406e217dcd749b4d1fccebfb5e", {
        method: "POST",
        body: form
      });
      confirmMessage = true;
      message = {name: '', email: '', title: '', message: ''};
    }else{
      validateInput();
    }
  };
  

</script>

<section class="contact section" id="contato">
  <h2 class="section__title">Entre em contato</h2>
  <span class="section__subtitle">Me mande uma mensagem</span>
  
  <div class="contact__container container grid">
    <div>
      <div class="contact__information">
        <i class="fas fa-phone-alt contact__icon"></i>

        <div>
          <h3 class="contact__title">Telefone</h3>
          <a href="tel:+5584992207080" class="contact__subtitle contact__link">+55 (84) 9 9220-7080</a>
        </div>
      </div>

      <div class="contact__information">
        <i class="far fa-envelope contact__icon"></i>

        <div>
          <h3 class="contact__title">Email</h3>
          <span class="contact__subtitle"></span>
          <a href="mailto:ernane.junior25@gmail.com?subject=Contato%20via%20portfolio." class="contact__subtitle contact__link">ernane.junior25@gmail.com</a>
        </div>
      </div>

      <div class="contact__information">
        <i class="fab fa-telegram contact__icon"></i>

        <div>
          <h3 class="contact__title">Telegram</h3>
          <a href="https://t.me/ErnaneJR" target="_blank" rel="noreferrer" class="contact__subtitle contact__link">t.me/ErnaneJR</a>
        </div>
      </div>

      <div class="contact__information">
        <i class="fas fa-map-marker-alt contact__icon"></i>

        <div>
          <h3 class="contact__title">Localização</h3>
          <span class="contact__subtitle">Parnamirim/RN - Brasil</span>
        </div>
      </div>
    </div>

    <form id="message-form" action="https://formsubmit.co/fe641c406e217dcd749b4d1fccebfb5e" method="POST" class="contact__form grid">
      <input type="hidden" name="_subject" value="New submission!">
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_template" value="table">
      <div class="contact__inputs grid">
        <div class="contact__content" class:invalid={invalidField.name}>
          <label for="name" class="contact__label">Name</label>
          <input type="text" name="name" id="name" class="contact__input" on:input={validateInput} bind:value={message.name} required>
        </div>
        <div class="contact__content" class:invalid={invalidField.email}>
          <label for="email" class="contact__label">Email</label>
          <input type="email" name="email" id="email" class="contact__input" on:input={validateInput} bind:value={message.email} required>
        </div>
      </div>
      <div class="contact__content" class:invalid={invalidField.title}>
        <label for="_subject" class="contact__label">Titulo da Menssagem</label>
        <input type="text" name="_subject" id="_subject" class="contact__input" on:input={validateInput} bind:value={message.title} required>
      </div>
      <div class="contact__content" class:invalid={invalidField.message}>
        <label for="message" class="contact__label">Menssagem</label>
        <textarea name="message" id="message" cols="0" rows="7" class="contact__input" on:input={validateInput} bind:value={message.message} required></textarea>
      </div>

      <div class="contact__content-action">
        <button type="submit" class="button button--flex" on:click|preventDefault={sendForm}>
          Enviar
          <i class="far fa-paper-plane button__icon"></i>
        </button>
      </div>
    </form>
  </div>
</section>
<ConfirmMessage {confirmMessage}/>

<style>
.contact__container{
	row-gap: 3rem;
}
.contact__information{
	display: flex;
	margin-bottom: var(--mb-2);
}
.contact__icon{
  font-size: 1.5rem;
  transform: translateY(5px);
  color: var(--first-color);
  margin-right: var(--mb-1);
}
.contact__title{
	font-size: var(--h3-font-size);
	font-weight: var(--font-medium);
}

.contact__subtitle{
	font-size: var(--small-font-size);
	color: var(--text-color-light);
}

.contact__content{
  position: relative;
	background-color: var(--input-color);
	border-radius: .5rem;
	padding: .75rem 1rem .25rem;
  border-bottom: 1px solid transparent;
  transition: all ease .3s;
}
.contact__content::before{
  content: "Preencha corretamente este campo";
  display: block;
  position: absolute;
  width: 100%;
  font-size: 10px;
  top: 102%;
  left: 10px;
  color: transparent;
}
.contact__content.invalid{
  border-bottom: 1px solid hsl(0, 70%, 59%);
}
.contact__content.invalid::before{
  color: hsl(0, 70%, 59%);
}
.contact__content-action{
  margin-top: 10px;
}
.contact__label{
	font-size: var(--small-font-size);
	color: var(--title-color)
}
.contact__link:hover{text-decoration: underline; cursor:pointer;}
.contact__input{
	width: 100%;
	background-color: var(--input-color);
	color: var(--text-color);
	font-family: var(--body-font);
	font-size: var(--normal-font-size);
	border: none;
	outline: none;
	padding: .25rem .5rem .5rem 0;
	resize: none;
}

/* For small devices */
@media screen and (min-width: 350px) {
	.container{
		margin-left: var(--mb-1);
		margin-right: var(--mb-1);
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
}

/* For large devices */
@media screen and (min-width: 1024px) {
	.contact__form{
		width: 460px;
	}
	.contact__inputs{
		grid-template-columns: repeat( 2,1fr);
	}
}
</style>