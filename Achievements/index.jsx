import React from 'react';
import styled from 'styled-components';

import Achievement from './Achievement/';

const UnstyledAchievements = ({ achievements, className }) =>
  achievements.map((achievement) => <Achievement data={achievement} key={achievement.name} />);

const Achievements = styled(UnstyledAchievements)`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export default Achievements;
