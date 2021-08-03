import React from 'react';
import { render } from '@testing-library/react';
import { SelectionButton } from '../SelectionButton';

describe('Test SelectionButton component', () => {
  it('SelectionButton component render properly', () => {
    const { container } = render(<SelectionButton />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="sc-bdnylx iejPTT"
      />
    `);
  });
});
