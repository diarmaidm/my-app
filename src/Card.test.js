import React from 'react';
import { expect } from 'chai';
import {
  shallow
} from 'enzyme';
import Card from './Card';

describe('<Card />', () => {
  it('renders the card', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper.find('img')).to.have.length(1);
    expect(wrapper.find('div')).to.have.length(4);
  });
});