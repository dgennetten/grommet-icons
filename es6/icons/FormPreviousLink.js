var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var FormPreviousLink = function FormPreviousLink(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'FormPreviousLink' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8', transform: 'translate(12.000000, 12.400000) scale(-1, 1) translate(-12.000000, -12.400000) ' })
      )
    )
  );
};

export default FormPreviousLink;