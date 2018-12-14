import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Header from '../header';
import styles from '../../../styles/theme';
import { withStyles } from '@material-ui/core/styles';

describe('Header', () => {
  let shallow;
  const StyledHeader = withStyles(styles)(Header);
  beforeEach(() => {
    shallow = createShallow(<StyledHeader/>);
  });

  it('header renders', () => {
    const wrapper = shallow(<StyledHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
