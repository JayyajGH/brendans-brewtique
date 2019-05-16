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
