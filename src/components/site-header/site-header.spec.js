import test from 'ava';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import SiteHeader from './site-header';

let wrapper;

test.beforeEach(() => {
  wrapper = shallowMount(SiteHeader, {
    stubs: {
      RouterLink: RouterLinkStub
    }
  });
});

test('it renders the correct initial markup', (t) => {
  // Check that the component is at least created in it's most basic sense
  t.true(wrapper.is('header'));
});

test("href should exist on generated contact link", (t) => {
  t.is(wrapper.find(RouterLinkStub).props("to"), "/contact");
})
