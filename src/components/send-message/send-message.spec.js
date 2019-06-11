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
  const submitButton = wrapper.find("button[type='button']");
  submitButton.trigger('click');

  t.is(wrapper.findAll('.form-field__error').length, 3);
  t.is(wrapper.findAll('#name-error').length, 1);
  t.is(wrapper.findAll('#email-error').length, 1);
  t.is(wrapper.findAll('#message-error').length, 1);
});

test('it correctly validates a valid email address', (t) => {
  let wrapper = shallowMount(SendMessage);
  wrapper.setData({contactEmail: 'bob.smith@gmail.com'});
  t.true(wrapper.vm.isEmailAddressValid());
});

test('it correctly determines if the email address for a component is initially invalid', (t) => {
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

test('it correctly sets up component data when detecting an invalid contact name', (t) => {
  let wrapper = shallowMount(SendMessage);

  wrapper.setData({contactName: ''});
  t.false(wrapper.vm.formValid());
  t.is(wrapper.vm.errors.contactNameError, 'Please enter your name');

  wrapper.setData({contactName: ' '});
  t.false(wrapper.vm.formValid());
  t.is(wrapper.vm.errors.contactNameError, 'Please enter your name');
});

test('it correctly sets up component data when detecting an invalid email address', (t) => {
  let wrapper = shallowMount(SendMessage);

  wrapper.setData({contactEmail: ''});
  t.false(wrapper.vm.formValid());
  t.is(wrapper.vm.errors.contactEmailError, 'Please enter a valid email address');
});

test('it correctly sets up component data when detecting an invalid message', (t) => {
  let wrapper = shallowMount(SendMessage);

  wrapper.setData({contactMessage: ''});
  t.false(wrapper.vm.formValid());
  t.is(wrapper.vm.errors.contactMessageError, 'Please enter a message');
});

test('it correctly sets up component data when detecting a valid data', (t) => {
  let wrapper = shallowMount(SendMessage);

  wrapper.setData({contactName: 'Bob Smith'});
  wrapper.setData({contactEmail: 'bob.smith@gmail.com'});
  wrapper.setData({contactMessage: 'Test message'});

  t.true(wrapper.vm.formValid());
  t.is(wrapper.vm.errors.contactNameError, '');
  t.is(wrapper.vm.errors.contactEmailError, '');
  t.is(wrapper.vm.errors.contactMessageError, '');
});

test('fireContactRequest throws an error if passed an empty token', async t => {
  let wrapper = shallowMount(SendMessage);

  await t.throwsAsync(
    wrapper.vm.fireContactRequest(''),
	  {instanceOf: Error, message: 'Invalid parameter'});
});


test('fireContactRequest throws an error if not passed a token', async t => {
  let wrapper = shallowMount(SendMessage);

  await t.throwsAsync(
    wrapper.vm.fireContactRequest(),
    {instanceOf: Error, message: 'Invalid parameter'});
});


test.skip('fireContactRequest correctly calls the API to send the message', async t => {
  let wrapper = shallowMount(SendMessage);

  wrapper.setData({contactName: 'Bob Smith'});
  wrapper.setData({contactEmail: 'bob.smith@gmail.com'});
  wrapper.setData({contactMessage: 'Test message'});

  wrapper.vm.fireContactRequest('TEST-RECAPTCHA-TOKEN');

  // Test that fireContactRequestWithMessage has been called once
  // Test that fireContactRequestWithMessage has been called with the correct parameters
});
