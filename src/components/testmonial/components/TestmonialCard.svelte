<script>
  export let testmonial;
</script>

<div class="testmonial__content">
  <div class="testmonial__data">
    <div class="testmonial__header">
      <img loading="lazy" src="{testmonial.image}" alt="" class="testmonial__img">
    
      <div>
        <h3 class="testmonial__name">{testmonial.name}</h3>
        <span class="testmonial__client">{testmonial.client}</span>
      </div>
    </div>
    <div>
      <i class="fas fa-star testmonial__icon-star"></i>
      <i class="fas fa-star testmonial__icon-star"></i>
      <i class="fas fa-star testmonial__icon-star"></i>
      <i class="fas fa-star testmonial__icon-star"></i>
      <i class="fas fa-star testmonial__icon-star"></i>
    </div>
  </div>
  <p class="testmonial__description"> {testmonial.content} </p>
</div>

<style>
.testmonial__data, .testmonial__header{
	display: flex;
}
.testmonial__data{
	justify-content: space-between;
	margin-bottom: var(--mb-1);
}

.testmonial__img{
	width: 60px;
	height: 60px;
	border-radius: 50%;
	margin-right: var(--mb-0-75);
}
.testmonial__name{
	font-size: var(--h3-font-size);
	font-weight: var(--font-medium);
}
.testmonial__client{
	font-size: var(--small-font-size);
	color: var(--text-color-light);
}
.testmonial__description{
	margin-bottom: var(--mb-2-5);
}
.testmonial__icon-star{
	color: var(--first-color);
}
/* For small devices */
@media screen and (min-width: 350px) {
	.testmonial__data,
	.testmonial__header{
		flex-direction: column;
		align-items: center;
	}
	.testmonial__img{
		margin-right: 0;
		margin-bottom: var(--mb-0-25);
	}
	.testmonial__data,
	.testmonial__description{
		text-align: center;
	}
}
</style>