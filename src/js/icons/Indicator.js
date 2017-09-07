import React from 'react';

import Icon from '../Icon';

const Indicator = props => (
  <Icon a11yTitle='Indicator' {...props}>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'><g stroke='#000000' strokeWidth='2'><path d='M12,11 C13.6568542,11 15,9.65685425 15,8 C15,6.34314575 13.6568542,5 12,5 C10.3431458,5 9,6.34314575 9,8 C9,9.65685425 10.3431458,11 12,11 Z M19,8 C19,4.13400675 15.8659932,1 12,1 C8.13400675,1 5,4.13400675 5,8 C5,9.93299662 5.5,11 7,13 C8.5,15 10,16.5 10,19 L10,23 L14,23 L14,19 C14,16.5 15.5,15 17,13 C18.5,11 19,9.93299662 19,8 Z' /></g></g>
  </Icon>
);

export default Indicator;