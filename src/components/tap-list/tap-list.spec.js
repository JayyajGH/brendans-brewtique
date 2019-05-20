import test from 'ava';
import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import TapList from './tap-list';

const getTapListDetailsForVenueFactory = (tapList) => {
  return async function() {
    return {
      taplistDetails: tapList
    };
  }
}

const tapListFactory = (getTapListDetailsForVenue) => {
  return shallowMount(TapList, {
    methods: {
      getTapListDetailsForVenue
    }
  });
}

test('it renders the correct initial markup when taplist details are present', async t => {
  // Check that the component is at least created in it's most basic sense

  const tapListDetails = {
    beverageList: [
        { beverageName: 'Even Sharks Need Water',
          breweryName: 'Verdant',
          beverageStyle: 'IPA',
          ABV: 'Unknown'
        }
    ]
  };

  let getTapList = getTapListDetailsForVenueFactory(tapListDetails);
  let wrapper = tapListFactory(getTapList);

  await flushPromises();

  t.true(wrapper.is('ul'));
});


test('it renders the correct initial markup when taplist details are missing', async t => {
  // Check that the component is at least created in it's most basic sense

  const tapListDetails = {
    beverageList: []
  };

  let getTapList = getTapListDetailsForVenueFactory(tapListDetails);
  let wrapper = tapListFactory(getTapList);

  await flushPromises();

  t.true(wrapper.is('p'));
});
