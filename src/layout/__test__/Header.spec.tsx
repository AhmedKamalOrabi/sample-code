import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { translate } from 'constants/translation';
import { Header } from '../Header';

describe('Test Header component', () => {
  it('Header component render properly', () => {
    const { getByTestId, container } = render(<Header />);
    expect(getByTestId('header')).toBeInTheDocument();
    const anchor = container.querySelector('a');
    const logo = container.querySelector('img');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', '/');
    expect(anchor).toHaveAttribute('title', translate('header.logo.title'));
    userEvent.click(anchor);
    expect(global.window.location.pathname).toEqual('/');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/HelloFreshLogo.png');
    expect(logo).toHaveAttribute('alt', translate('header.logo.alt'));
  });
});
