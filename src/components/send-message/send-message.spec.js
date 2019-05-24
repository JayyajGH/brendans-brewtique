import test from 'ava';
import { shallowMount } from '@vue/test-utils';
import SendMessage from './send-message';

test('it renders the correct initial markup', (t) => {
  // Check that the component is at least created in it's most basic sense
  let wrapper = shallowMount(SendMessage);
  t.true(wrapper.is('div'));
});

test('it doesn\'t render any error messages on form load', (t) => {
  let wrapper = shallowMount(SendMessage);
  t.is(wrapper.findAll('.form-field__error').length, 0);
});

test('it renders the correct error messages when missing form data', (t) => {
  let wrapper = shallowMount(SendMessage);
  const submitButton = wrapper.find("input[type='submit']");
  submitButton.trigger('click');

  t.is(wrapper.findAll('.form-field__error').length, 3);
  t.is(wrapper.findAll('#name-error').length, 1);
  t.is(wrapper.findAll('#email-error').length, 1);
  t.is(wrapper.findAll('#message-error').length, 1);
});

test('it correctly validates an email address', (t) => {
  let wrapper = shallowMount(SendMessage);
  wrapper.setData({contactEmail: 'bob.smith@gmail.com'});
  t.true(wrapper.vm.isEmailAddressValid());
});

test('it correctly detects an invalid email address when component is created', (t) => {
  let wrapper = shallowMount(SendMessage);
  t.false(wrapper.vm.isEmailAddressValid());
});

test('it correctly detects an invalid email address', (t) => {
  let wrapper = shallowMount(SendMessage);
  wrapper.setData({contactEmail: ''});
  t.false(wrapper.vm.isEmailAddressValid());

  wrapper.setData({contactEmail: 'bob'});
  t.false(wrapper.vm.isEmailAddressValid());

  wrapper.setData({contactEmail: 'bob.smith'});
  t.false(wrapper.vm.isEmailAddressValid());

  wrapper.setData({contactEmail: 'bob@smith'});
  t.false(wrapper.vm.isEmailAddressValid());
});
