# Brendan's Brewtique
The website is built and deployed as a statically rendered (pre-rendered) app.

It is currently hosted here as the company has now closed
http://www.brendansbrewtique.co.uk.s3-website-eu-west-1.amazonaws.com/

## Technologies used

### Runtime
* Vue.js
* Nuxt as a Vue.js framework
* Axios for HTTP calls
* Google reCAPTCHA v3 for spam prevention

### Test
* Ava as a test runner
* Sinon for mocking
* Instanbul/NYC for code coverage

### External dependencies
* The taplist data comes from an external API hosted as an AWS Lambda
* The send message functionality comes from an external AWS Lambda protected by Google reCAPTCHA
