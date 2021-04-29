import React, { useState } from 'react';
import styled from 'styled-components';

const UnstyledAchievement = ({ className, data: { name, achieved, description } }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={className}
      onClick={!achieved ? () => setShowTooltip(!showTooltip) : () => []}
      data-testid='achievement'
    >
      {name}
      {showTooltip ? description : ''}
    </div>
  );
}

const Achievement = styled(UnstyledAchievement)`
`;

export default Achievement;
