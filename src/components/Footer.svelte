<script>
	import { fade } from 'svelte/transition'

	const footerLinks = [ 
		{name: 'Site', icon: 'fas fa-home', path: `/`},
		 // {name: 'Blog', icon: 'fas fa-blog', path: `/blog`}, breve
		{name: 'Sobre', icon: 'fas fa-user', path: `/#sobre`}
	];
	const socialLinks = [
    {name: 'github', class: "github", link: 'https://github.com/ErnaneJ'},
		{name: 'Instagram', class: "instagram", link: 'https://www.instagram.com/ernane.jx/'},
		{name: 'Telegram', class: "telegram", link: 'https://t.me/ErnaneJR'}
  ]
</script>
<footer class="footer" in:fade={{delay: 1000, duration: 1000}}>
	<div class="footer__bg">
		<div class="footer__container container grid">
			<div class="footer__logo">
				<h1 class="footer__title">Ernane.dev</h1>
				<span class="footer__subtitle">Desenvolvedor de Software</span>
			</div>

			<ul class="footer__links">
				{#each footerLinks as link}
					<li>
						<a href="{link.path}" class="footer__link">{link.name}</a>
					</li>
				{/each}
			</ul>
			<div class="footer__socials">
				{#each socialLinks as link}
					<a href="{link.link}" title="{link.name}" class="footer__social" target="_blank" rel="noreferrer">
						<i class="fab fa-{link.class}"></i>
					</a>
				{/each}
			</div>
		</div>
		<p class="footer__copy">&#169; 2021 - 2021 Ernane.dev</p>
	</div>
</footer>
<style>
.aNoneEvents{pointer-events: none; cursor: pointer;}
.footer{
	padding-top: 2rem;
}
.footer__container{
	row-gap: 3.5rem;
}
.footer__bg{
	background-color: var(--first-color-second);
	padding: 2rem 0 3rem;
}
.footer__title{
	font-size: var(--h1-font-size);
	margin-bottom: var(--mb-0-25);
}
.footer__logo{
	transform: translateY(-10px);
}
.footer__subtitle{
	font-size: var(--small-font-size);
}
.footer__links{
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
	cursor: pointer;
}
.footer__link:hover{
	color: var(--first-color-lighter)
}
.footer__social{
	font-size: 1.25rem;
	margin-right: var(--mb-1-5);
}
.footer__social:hover{
	color: var(--first-color-lighter);
}
.footer__copy{
	font-size: var(--smaller-font-size);
	text-align: center;
	color: var(--text-color-light);
	margin-top: var(--mb-3);
}
.footer__title,
.footer__subtitle,
.footer__link,
.footer__social{
	color: #fff;
}

@media screen and (min-width: 768px) {
	.footer__container{
		padding: 0 1rem;
	}
	.footer__container{
		grid-template-columns: repeat(3, 1fr);
	}
	.footer__bg{
		padding: 3rem 0 3.5rem;
	}
	.footer__links{
		flex-direction: row;
		column-gap: 2rem;
	}
	.footer__socials{
		justify-self: flex-end;
	}
	.footer__copy{
		margin-top: 4.5rem;
	}
}

/* For large devices */
@media screen and (min-width: 1024px) {
	.footer{
		padding: 0;
	}
}
</style>