<template>
	<main class="wrapper" id="main">
		<section>
			<h1 class="heading1 heading--dark">
				<span class="heading--item">TAPROOM</span>
				<span class="heading--spacer">.</span>
				<span class="heading--item">BOTTLESHOP</span>
				<span class="heading--spacer">.</span>
				<span class="heading--item">EVENTS</span>
			</h1>
			<div class="wrapper--small u-align--center">
				<p class="u-margin-bottom--medium">
					Brendan's Brewtique is the culmination of our never ending search for great craft beer and cider.
				</p>
				<p class="u-margin-bottom--medium">
					We stock hundreds of different craft beers from across the UK, Europe and beyond.
				</p>
				<p class="u-margin-bottom--medium">
					Additionally we have up to 5 different draught beers available at any one time.
					You are free to enjoy any of our great beers and ciders on or off the premises.
				</p>
			</div>
		</section>

		<section class="image-text__panel image-text__panel--dark u-margin-bottom--large" id="about">
			<div class="image-text__image image--brendan"></div>
			<div class="image-text__text u-padding--small">
				<h2 class="heading2 heading--light">About</h2>
				<p class="u-margin-bottom--medium">
					Bristol is very fortunate to have some of the best breweries in the country.  Unfortunately, Bristol has had a shortage of places where you can buy beer from breweries across Bristol, the UK, Europe and beyond - all under one roof.
				</p>
				<p class="u-margin-bottom--medium">
					Brendan's Brewtique is the solution to this problem.
				</p>
			</div>
		</section>

		<section class="image-text__panel u-margin-bottom--large" id="events">
			<div class="image-text__text u-padding--small">
				<h2 class="heading2 heading--dark">Events</h2>
				<p class="u-margin-bottom--medium">
					We regularly hold tasting events with various breweries and beer experts.  In the past we've had events with breweries like Moor and Arbor.
				</p>
				<p class="u-margin-bottom--medium">
					Our next event is an introduction to Belgian beer with Tim Webb, author of the Good Beer Guide Belgium, on 25th April 2019.
				</p>
				<a href="https://www.eventbee.com/v/brewtique/event?eid=168576862#/tickets" target="_blank" rel="noopener noreferrer" class="button button--primary body--bold">Book tickets</a>
			</div>
			<div class="image-text__image image--tasting"></div>
		</section>

		<section class="image-text__panel image-text__panel--dark u-margin-bottom--large" id="ontap">
			<div class="image-text__image image--taps"></div>
			<div class="image-text__text u-padding--small">
				<h2 class="heading2 heading--light">What's on tap?</h2>
				<tap-list></tap-list>
			</div>
		</section>
	</main>
</template>

<script>
	import TapList from '~/components/tap-list/tap-list';

	export default {
		components: { TapList },
	}
</script>

<style>
	.wrapper--small {
	  padding-left: 10px;
	  padding-right: 10px;
	  margin: 0 auto;
	}

	@media (min-width: 50em) {
	  .wrapper--small {
			max-width: 600px;
	    padding-left: 0;
	    padding-right: 0;
	  }
	}

	.heading--item {
	  padding-left: 10px;
	  padding-right: 10px;
	}

	.heading--spacer {
	  vertical-align: text-top;
	}

	.image-text__panel {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-between;
	}

	.image-text__panel--dark {
	  background-color: var(--grey-base);
	  color: var(--white);
	}

	.image-text__text {
	  width: 100%;
	}

	@media (min-width: 50em) {
	  .image-text__text {
	    width: 50%;
	  }
	}

	.image-text__image {
		width: 100%;
	}

	@media (min-width: 50em) {
		.image-text__image {
			width: 50%;
		}
	}

	.image--brendan {
	  background-image: url('~assets/images/brendan.png');
	  background-repeat: no-repeat;
	  background-size: cover;
	  height: 400px;
	}

	.image--tasting {
	  display: none;
	}

	@media (min-width: 50em) {
	  .image--tasting {
	    background-image: url('~assets/images/tasting.jpg');
	    background-repeat: no-repeat;
	    background-size: cover;
	    height: 400px;
	    display: block;
	  }
	}

	.image--taps {
	  display: none;
	}

	@media (min-width: 50em) {
	  .image--taps {
	    background-image: url('~assets/images/taps.jpg');
	    background-repeat: no-repeat;
	    background-size: cover;
	    height: 400px;
	    display: block;
	  }
	}
</style>
