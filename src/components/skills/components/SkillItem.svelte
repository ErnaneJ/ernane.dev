<script>
  export let item;
</script>

<div class="skills__data">
  <div class="skills__title">
    <h4 class="skills__name">{item.name}</h4>
    <span class="skills__number">{item.percent}%</span>
  </div>
  <div class="skills__bar">
    <span class="skills__percentage" style="width: {item.percent}%;"></span>
  </div>
</div>

<style>
.skills__bar, .skills__percentage{
	display: block;
	height: 5px;
	border-radius: .25rem;
}
.skills__bar{
	background-color: var(--first-color-lighter);
}
.skills__percentage{
	background-color: var(--first-color);
}
.skills__title{
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (min-width: 350px) {
	.skills__title{
		font-size: var(--normal-font-size);
	}
}
</style>