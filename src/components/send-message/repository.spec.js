import test from 'ava';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import fireContactRequestWithMessage from './repository.js';

test('fireContactRequestWithMessage throws an error when not passed an HTTP client', async t => {
  await t.throwsAsync(fireContactRequestWithMessage(null, 'Test message'), {instanceOf: Error, message: 'Invalid parameter'});
});

test('fireContactRequestWithMessage throws an error when not passed a message', async t => {
  await t.throwsAsync(fireContactRequestWithMessage(axios), {instanceOf: Error, message: 'Invalid parameter'});
});

test('fireContactRequestWithMessage throws an error when not passed any parameters', async t => {
  await t.throwsAsync(fireContactRequestWithMessage(), {instanceOf: Error, message: 'Invalid parameter'});
});

test('fireContactRequestWithMessage correctly calls the api endpoint to fetch the taplist details', async t => {
  const message = "Test message";

  let mock = new MockAdapter(axios);

  mock.onPost('https://501n7ggn65.execute-api.eu-west-1.amazonaws.com/prod').replyOnce(function(config) {
      return new Promise(function(resolve, reject) {
        resolve([200]);
      });
    });

  let result = await fireContactRequestWithMessage(axios, message);

  t.is(mock.history.post.length, 1); // There has been one call to post
  t.is(result.status, 200);
  t.is(result.config.method, 'post');
  t.is(result.config.url, 'https://501n7ggn65.execute-api.eu-west-1.amazonaws.com/prod');

  mock.restore();
});
