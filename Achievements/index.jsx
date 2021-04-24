import React from 'react';

const AchievementsList = ({ achievements }) =>
  achievements.map(achievement => {
    return <div key={achievement}>{achievement}</div>
  });

export default AchievementsList;
