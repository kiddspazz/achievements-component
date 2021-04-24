import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Achievement from '..';

it('clicking unachieved shows tooltip', () => {
  const mockAchievementData = {
    name: 'testUnachievedAchievement',
    achieved: false,
    description: 'foo',
  };
  const descriptionRegex = new RegExp(mockAchievementData.description, 'i');

  render(<Achievement data={mockAchievementData}/>);

  expect(screen.queryByText(descriptionRegex)).toBeFalsy();

  userEvent.click(screen.getByTestId('achievement'));

  expect(screen.queryByText(descriptionRegex)).toBeTruthy();
});

it('clicking achieved does not show tooltip', () => {
  const mockAchievementData = {
    name: 'testAchievedAchievement',
    achieved: true,
    description: 'bar',
  };
  const descriptionRegex = new RegExp(mockAchievementData.description, 'i');

  render(<Achievement data={mockAchievementData}/>);

  expect(screen.queryByText(descriptionRegex)).toBeFalsy();

  userEvent.click(screen.getByTestId('achievement'));

  expect(screen.queryByText(descriptionRegex)).toBeFalsy();
});
