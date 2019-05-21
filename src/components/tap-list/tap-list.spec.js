import test from 'ava';
import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import TapList from './tap-list';

const getTapListDetailsFactory = (tapList) => {
  return async function() {
    return {
      taplistDetails: tapList
    };
  }
}

const tapListFactory = (getTapListDetails) => {
  return shallowMount(TapList, {
    methods: {
      getTapListDetails
    }
  });
}

test('it renders the correct initial markup when taplist details are present', async t => {
  // Check that the component is at least created in it's most basic sense

  const tapListDetails = {
    beverageList: [
        { beverageName: 'Even Sharks Need Water',
          breweryName: 'Verdant',
          beverageStyle: 'IPA - New England',
          ABV: 'Unknown'
        }
    ]
  };

  let getTapList = getTapListDetailsFactory(tapListDetails);
  let wrapper = tapListFactory(getTapList);

  await flushPromises();

  t.true(wrapper.is('ul'));
});


test('it renders the correct initial markup when taplist details are missing', async t => {
  // Check that the component is at least created in it's most basic sense
  const tapListDetails = {
    beverageList: []
  };

  let getTapList = getTapListDetailsFactory(tapListDetails);
  let wrapper = tapListFactory(getTapList);

  await flushPromises();

  t.true(wrapper.is('p'));
  t.is(wrapper.find('p').text(), 'No details currently available.');
});

test('it renders a single list item when there is one beverage in the taplist', async t => {
  const tapListDetails = {
    beverageList: [
        { beverageName: 'Even Sharks Need Water',
          breweryName: 'Verdant',
          beverageStyle: 'IPA - New England',
          ABV: 'Unknown'
        }
    ]
  };

  let getTapList = getTapListDetailsFactory(tapListDetails);
  let wrapper = tapListFactory(getTapList);

  await flushPromises();

  t.true(wrapper.is('ul'));
  t.is(wrapper.findAll('li').length, 1);
});

test('it renders multiple list items when there are multiple beverages in the taplist', async t => {
  const tapListDetails = {
    beverageList: [
        { beverageName: 'Even Sharks Need Water',
          breweryName: 'Verdant',
          beverageStyle: 'IPA - New England',
          ABV: '6.5%'
        },
        { beverageName: 'Fields Forever',
          breweryName: 'Tiny Rebel Brewing Co',
          beverageStyle: 'IPA - New England',
          ABV: '6.5%'
        }
    ]
  };

  let getTapList = getTapListDetailsFactory(tapListDetails);
  let wrapper = tapListFactory(getTapList);

  await flushPromises();

  t.true(wrapper.is('ul'));
  t.is(wrapper.findAll('li').length, 2);
});

test('it renders ABV and beverage style if they aren\'t unknown', async t => {
  const tapListDetails = {
    beverageList: [
        { beverageName: 'Even Sharks Need Water',
          breweryName: 'Verdant',
          beverageStyle: 'IPA - New England',
          ABV: '6.5%'
        }
    ]
  };

  let getTapList = getTapListDetailsFactory(tapListDetails);
  let wrapper = tapListFactory(getTapList);

  await flushPromises();

  t.true(wrapper.is('ul'));
  const infoList = wrapper.findAll('span');
  t.is(infoList.at(0).text(), '6.5%');
  t.is(infoList.at(1).text(), 'IPA - New England');
});

test('it doesn\'t render ABV if it is unknown', async t => {
  const tapListDetails = {
    beverageList: [
        { beverageName: 'Even Sharks Need Water',
          breweryName: 'Verdant',
          beverageStyle: 'IPA - New England',
          ABV: 'Unknown'
        }
    ]
  };

  let getTapList = getTapListDetailsFactory(tapListDetails);
  let wrapper = tapListFactory(getTapList);

  await flushPromises();

  t.true(wrapper.is('ul'));
  const infoList = wrapper.findAll('span');
  t.is(infoList.length, 1);
  t.is(infoList.at(0).text(), 'IPA - New England');
});

test('it doesn\'t render beverage style if it is unknown', async t => {
  const tapListDetails = {
    beverageList: [
        { beverageName: 'Even Sharks Need Water',
          breweryName: 'Verdant',
          beverageStyle: 'Unknown',
          ABV: '6.5%'
        }
    ]
  };

  let getTapList = getTapListDetailsFactory(tapListDetails);
  let wrapper = tapListFactory(getTapList);

  await flushPromises();

  t.true(wrapper.is('ul'));
  const infoList = wrapper.findAll('span');
  t.is(infoList.length, 1);
  t.is(infoList.at(0).text(), '6.5%');
});

test('it renders correctly if there is no brewery name', async t => {
  const tapListDetails = {
    beverageList: [
        { beverageName: 'Even Sharks Need Water',
          breweryName: '',
          beverageStyle: 'IPA - New England',
          ABV: '6.5%'
        }
    ]
  };

  let getTapList = getTapListDetailsFactory(tapListDetails);
  let wrapper = tapListFactory(getTapList);

  await flushPromises();

  t.true(wrapper.is('ul'));
  t.is(wrapper.findAll('li').length, 1);
  t.is(wrapper.find('h3').text(), 'Even Sharks Need Water by');
});

test('it renders correctly if there is no beverage name', async t => {
  const tapListDetails = {
    beverageList: [
        { beverageName: '',
          breweryName: 'Verdant',
          beverageStyle: 'IPA - New England',
          ABV: '6.5%'
        }
    ]
  };

  let getTapList = getTapListDetailsFactory(tapListDetails);
  let wrapper = tapListFactory(getTapList);

  await flushPromises();

  t.true(wrapper.is('ul'));
  t.is(wrapper.findAll('li').length, 1);
  t.is(wrapper.find('h3').text(), 'by Verdant');
});
