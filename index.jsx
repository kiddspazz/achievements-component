import ReactDOM from 'react-dom';
import React from 'react';

import Achievements from './Achievements';

import { mockAchievements } from './mocks';

const mountNode = document.getElementById('app');
ReactDOM.render(<Achievements achievements={mockAchievements}/>, mountNode);
