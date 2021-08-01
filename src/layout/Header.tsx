import React from 'react';
import { Flex } from '../components';
import { translate } from '../constants';

export const Header: React.FC = () => (
  <Flex
    data-test-id="header"
    boxShadow="md"
    backgroundColor="white"
    justifyContent="center"
    alignItems="center"
    padding="sm">
    <a href="/" title={translate('header.logo.title')}>
      <img height="30px" src="/HelloFreshLogo.png" alt={translate('header.logo.alt')} />
    </a>
  </Flex>
);

export default Header;
