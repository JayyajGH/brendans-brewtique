<template>
	<main class="wrapper" id="main">
		<section>
			<h1 class="heading--dark u-align--center">
				<div class="heading1">
					<span class="heading__item">TAPROOM</span>
					<span class="heading__spacer">.</span>
					<span class="heading__item">BOTTLESHOP</span>
					<span class="heading__spacer">.</span>
					<span class="heading__item">EVENTS</span>
				</div>
				<div class="heading2">Exploring craft beer in Bristol</div>
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
		data() {
        return {
            structuredData: {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Brendan's Brewtique",
              "description": "Craft beer shop, bottles & taps - Clifton, Bristol",
							"image": "http://brendansbrewtique.s3-website-eu-west-1.amazonaws.com/apple-touch-icon.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Clifton",
                "addressRegion": "Bristol",
                "addressCountry": "GB",
                "postalCode": "BS8 1NF",
                "streetAddress": "104-106 Queens Road"
              },
							"hasMap": "https://www.google.co.uk/maps/place/Brendans+Brewtique/@51.4581284,-2.6138011,17z/data=!3m1!4b1!4m5!3m4!1s0x48718d7fa7a08a87:0x5e229b2210aa3d69!8m2!3d51.4581284!4d-2.6116124",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.457960",
                "longitude": "-2.611940"
             	},
							"openingHoursSpecification": [
							  {
							    "@type": "OpeningHoursSpecification",
							    "dayOfWeek": [
							      "Monday",
							      "Tuesday",
							      "Wednesday",
							      "Thursday"
							    ],
							    "opens": "10:00",
							    "closes": "19:00"
							  },
							  {
							    "@type": "OpeningHoursSpecification",
							    "dayOfWeek": [
							      "Saturday"
							    ],
							    "opens": "11:00",
							    "closes": "22:00"
							  },
								{
							    "@type": "OpeningHoursSpecification",
							    "dayOfWeek": [
							      "Sunday"
							    ],
							    "opens": "00:00",
							    "closes": "00:00"
							  }
							],
              "telephone": "+4401179831836",
							"email":"mailto:beer@brendansbrewtique.co.uk",
              "url": "http://www.brendansbrewtique.co.uk",
              "sameAs": [
                "https://facebook.com/BrendansBrewtique",
                "https://twitter.com/brendansbrewti2",
                "https://instagram.com/brendansbrewtique",
                "https://untappd.com/v/brendans-brewtique/8306452" ],
							"priceRange": "£3 - £30",
							"aggregateRating": {
								"@type": "AggregateRating",
								"ratingValue": "5",
								"bestRating": "5",
								"ratingCount": "18"
							}
            },
						structuredDataEvent: {
							"@context": "https://schema.org",
						  "@type": "Event",
						  "name": "Belgian beer tasting with Tim Webb",
						  "startDate": "2019-04-25T19:00",
						  "endDate": "2019-04-25T22:00",
						  "location": {
						    "@type": "Place",
						    "name": "Brendan's Brewtique",
						    "address": {
									"@type": "PostalAddress",
	                "addressLocality": "Clifton",
	                "addressRegion": "Bristol",
	                "addressCountry": "GB",
	                "postalCode": "BS8 1NF",
	                "streetAddress": "104-106 Queens Road"
						    }
						  },
						  "offers": {
						    "@type": "Offer",
						    "url": "https://www.eventbee.com/v/brewtique/event?eid=168576862#/tickets",
						    "price": "15",
						    "priceCurrency": "GBP",
						    "availability": "https://schema.org/InStock",
						    "validFrom": "2019-03-20T12:00"
						  },
						  "image": [
						    "https://example.com/photos/1x1/photo.jpg"
						   ],
						  "description": "Join us for an evening of Belgian beer tasting with Tim Webb, author of the Good Beer Guide Belgium",
						  "performer": {
						    "@type": "PerformingGroup",
						    "name": "Tim Webb"
						  }
						}
        }
    },
		head () {
				return {
						__dangerouslyDisableSanitizers: ['script'],
						script: [{
								innerHTML: JSON.stringify(this.structuredData),
								type: 'application/ld+json'
						},
						{
								innerHTML: JSON.stringify(this.structuredDataEvent),
								type: 'application/ld+json'
						}]
				}
		}
	}
</script>

<style scoped lang="scss">
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

	.heading__item {
	  padding-left: 0;
	  padding-right: 0;
	}

	@media (min-width: 50em) {
		.heading__item {
		  padding-left: 1rem;
		  padding-right: 1rem;
		}
	}

	.heading__spacer {
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
