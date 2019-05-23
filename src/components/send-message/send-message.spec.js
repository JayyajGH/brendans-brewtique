import test from 'ava';
import { shallowMount } from '@vue/test-utils';
import SendMessage from './send-message';

let wrapper;

test.beforeEach(() => {
  wrapper = shallowMount(SendMessage);
});

test('it renders the correct initial markup', (t) => {
  // Check that the component is at least created in it's most basic sense
  t.true(wrapper.is('div'));
});

test('it doesn\'t render any error messages on form load', (t) => {
  t.is(wrapper.findAll('.form-field__error').length, 0);
});

test('it renders the correct error messages when missing form data', (t) => {
  const submitButton = wrapper.find("input[type='submit']");
  submitButton.trigger('click');

  t.is(wrapper.findAll('.form-field__error').length, 3);
  t.is(wrapper.findAll('#name-error').length, 1);
  t.is(wrapper.findAll('#email-error').length, 1);
  t.is(wrapper.findAll('#message-error').length, 1);
});
