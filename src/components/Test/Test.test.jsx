import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Test } from './Test.jsx';

describe('Test', () => {
  it('renders magnificent monkeys', () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<Test />);
    expect(container).toMatchSnapshot();
  });

  it('renders radical rhinos after button click', async () => {
    // Arrange
    const user = userEvent.setup();
    1;

    render(<Test />);
    const button = screen.getByRole('button', { name: 'Click Me' });

    // Act
    await user.click(button);

    // Assert
    expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i);
  });
});
