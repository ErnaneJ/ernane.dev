<script>
  import TestmonialCard from './components/TestmonialCard.svelte';

  const testimonials = [
    {name: 'Sara Smith', client: 'Client', image: 'https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg', content: 'I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.'},
    {name: 'Sara Smith', client: 'Client', image: 'https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg', content: 'I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.'},
    {name: 'Sara Smith', client: 'Client', image: 'https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg', content: 'I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.'}
  ];
</script>
<section class="testimonial section">
  <h2 class="section__title">Testimonial</h2>
  <span class="section__subtitle">My client saying</span>

  <div class="testimonial__container container">
    <div class="">
      {#each testimonials as testmonial}
        <TestmonialCard {testmonial}/>
      {/each}
    </div>
  </div>
</section>

<style>
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
</style>