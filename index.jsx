import ReactDOM from 'react-dom';
import React from 'react';

import Achievements from './Achievements';

const mountNode = document.getElementById('app');
ReactDOM.render(<Achievements achievements={[{ name: 'foo', description: 'baz' }, { name: 'bar', description: 'qux' }]}/>, mountNode);
