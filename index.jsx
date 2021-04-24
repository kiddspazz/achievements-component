import ReactDOM from 'react-dom';
import React from 'react';

import AchievementsList from './Achievements';

const mountNode = document.getElementById('app');
ReactDOM.render(<AchievementsList achievements={['thing1', 'thing2']}/>, mountNode);
