var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Cafeteria = function Cafeteria(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Cafeteria' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M12,1 L12,7.99967027 C12,9.65670662 10.6526091,11 9.00313032,11 L5.99686968,11 C4.34174426,11 3,9.6513555 3,7.99967027 L3,1 M6,7 C6,7 6,6.54902482 6,6.00922203 L6,1 M9,7 C9,7 9,6.54902482 9,6.00922203 L9,1 M6,11 L6,21.5044548 C6,22.3304216 6.66579723,23 7.5,23 L7.5,23 C8.32842712,23 9,22.3204455 9,21.5044548 L9,11 M15,18 L15,21.4998351 C15,22.3283533 15.6657972,23 16.5,23 L16.5,23 C17.3284271,23 18,22.3316845 18,21.4952612 L18,15 C18,15 21,15 21,12 C21,9 21,10 21,7 C21,4 19,2 15,2 C15,2 15,9.99456145 15,18 L15,18 Z' })
      )
    )
  );
};

export default Cafeteria;