import test from 'ava';
import { shallowMount } from '@vue/test-utils';
import SiteFooter from './site-footer';

let wrapper;

test.beforeEach(() => {
  wrapper = shallowMount(SiteFooter);
});

test('it renders the correct initial markup', (t) => {
  // Check that the component is at least created in it's most basic sense
  t.true(wrapper.is('footer'));
});
