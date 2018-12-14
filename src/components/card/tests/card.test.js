import React from 'react';
import Card from "../card";
import { withStyles } from '@material-ui/core/styles';
import {styles} from '../card.style';
import { createShallow } from '@material-ui/core/test-utils';

const StyledCard = withStyles(styles)(Card);

describe('StyledCard', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow(<StyledCard />);
  });

  it('Card renders with style', () => {
    const wrapper = shallow(<StyledCard />);
    expect(wrapper).toMatchSnapshot();
  });
});