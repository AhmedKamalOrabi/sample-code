import React from 'react';
import { Box, List, ListItem, Flex, Text } from '../../components';
import { ISummary } from '../../interfaces';
import { parseRawPrice } from './price';

interface PriceSummaryProps {
  summary: ISummary[];
  totalPrice: string;
}

const PriceSummary: React.FC<PriceSummaryProps> = ({ summary, totalPrice }) => (
  <Box width={['290px', '450px']}>
    <List data-test-id="price-list">
      {summary.map(({ chargeText, chargeValue }) => (
        <ListItem paddingBottom="xs" key={chargeText}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight="regular" lineHeight="md" fontFamily="secondary" fontSize="md">
              {chargeText}
            </Text>
            <Text
              data-test-id="item-price"
              fontWeight="regular"
              lineHeight="md"
              fontFamily="secondary"
              fontSize="md">
              {parseRawPrice(chargeValue)}
            </Text>
          </Flex>
        </ListItem>
      ))}
      <ListItem paddingTop="xs" borderTopWidth="sm" borderTopColor="border" borderTopStyle="solid">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold" lineHeight="md" fontFamily="secondary" fontSize="md">
            Total
          </Text>
          <Text
            data-test-id="total-price"
            fontWeight="bold"
            lineHeight="md"
            fontFamily="secondary"
            fontSize="md">
            {totalPrice}
          </Text>
        </Flex>
      </ListItem>
    </List>
  </Box>
);

export default PriceSummary;
