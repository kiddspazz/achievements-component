import React from 'react';
import { render, screen } from '@testing-library/react';

import StyledAchievementsList from '..';

import { mockAchievements } from '../../mocks';

it('renders names of passed achievements', () => {
  render(<StyledAchievementsList achievements={mockAchievements}/>);

  mockAchievements.forEach((achievement) => {
    expect(screen.queryByText(achievement.name)).toBeTruthy();
  });
});
