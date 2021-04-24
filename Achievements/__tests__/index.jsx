import React from 'react';
import { render, screen } from '@testing-library/react';

import StyledAchievementsList from '..';

it('renders names of passed achievements', () => {
  const mockAchievements=[{ name: 'foo' }, { name: 'bar' }];
  render(<StyledAchievementsList achievements={mockAchievements}/>);

  mockAchievements.forEach((achievement) => {
    expect(screen.queryByText(achievement.name)).toBeTruthy();
  });
});
