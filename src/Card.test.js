import React from 'react';
import { expect } from 'chai';
import {
  shallow
} from 'enzyme';
import Card from './Card';

// function mockItem(overrides) {
//   // … create mock ToDo Item
// }

describe('<Card />', () => {
  it('renders the card', () => {
    // const item = mockItem();
    const wrapper = shallow(<Card />);

    expect(wrapper.contains(<img src="http://placehold.it/75" alt="card"/>)).to.equal(true);
    expect(wrapper.contains(<div>Name here...</div>)).to.equal(true);
    expect(wrapper.contains(<div>Company Name here...</div>)).to.equal(true);
    expect(wrapper.find('div')).to.have.length(4);
  });
});