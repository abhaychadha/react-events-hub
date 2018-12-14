import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Facebook from '../facebook';
import {facebookLink} from '../facebook.style';
import { withStyles } from '@material-ui/core/styles';

const StyledFacebook = withStyles(facebookLink)(Facebook);
describe('StyledFacebook', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow(<StyledFacebook/>);
  });

  it('facebook renders with style', () => {
    const wrapper = shallow(<StyledFacebook />);
    expect(wrapper).toMatchSnapshot();
  });
});
