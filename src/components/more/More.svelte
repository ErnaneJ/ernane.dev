<section class="project section">
  <div class="project__bg">
    <div class="project__container container grid">
      <div class="project__data">
        <h2 class="project__title">You have a new project</h2>
        <p class="project__description">
          Contact me now and get a 30% discount on your new project.
        </p>
        <a href="/#contact" class="button button--flex button--white">
          Contact Me
          <i class="far fa-paper-plane project__icon button__icon"></i>
        </a>
      </div>

      <img loading="lazy" src="https://toppng.com/uploads/preview/happy-person-11545688398rslqmyfw4g.png" alt="" class="project__img">
    </div>
  </div>
</section>

<style>
.project{
	text-align: center;
}
.project__bg{
	background-color: var(--first-color-second);
	padding-top: 3rem;
}

.project__title{
	font-size: var(--h2-font-size);
	margin-bottom: var(--mb-0-75);
}
.project__description{
	margin-bottom: var(--mb-1-5);
}
.project__title, .project__description{
	color: #fff;
}
.project__img{
	width: 232px;
	justify-self: center;
}
</style>