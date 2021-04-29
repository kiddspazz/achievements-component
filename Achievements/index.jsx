import React, { useState } from 'react';
import styled from 'styled-components';

import Achievement from './Achievement/';

const UnstyledAchievements = ({ achievements, className }) =>
  <div className={className}>
    {
      achievements.map((achievement) =>
        <Achievement data={achievement} key={achievement.name} />)
    }
  </div>

const Achievements = styled(UnstyledAchievements)`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default Achievements;
