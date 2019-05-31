import test from 'ava';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getTapListDetailsForVenue from './repository.js';

test('getTapListDetailsForVenue correctly calls the api endpoint to fetch the taplist details', async t => {
  const responseData = [
      { beverageName: 'Even Sharks Need Water',
        breweryName: 'Verdant',
        beverageStyle: 'IPA - New England',
        ABV: 'Unknown'
      }
  ];

  let mock = new MockAdapter(axios);

  mock.onGet('https://cwhgp6hr8i.execute-api.eu-west-2.amazonaws.com/prod?venueID=436469').replyOnce(function(config) {
    return new Promise(function(resolve, reject) {
      resolve([200, responseData]);
    });
  });

  let result = await getTapListDetailsForVenue(axios);

  t.is(mock.history.get.length, 1); // There has been one call to get
  t.is(result.status, 200);
  t.is(result.config.method, 'get');
  t.is(result.config.url, 'https://cwhgp6hr8i.execute-api.eu-west-2.amazonaws.com/prod?venueID=436469')
  t.deepEqual(result.data, responseData);

  mock.restore();
});
