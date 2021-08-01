import React from 'react';
import IconButton from '../../components/IconButton';
import IconInfoCircle from '../../icons/IconInfoCircle';
import Tooltip, { TooltipContainer } from '../../components/Tooltip';
import PriceSummary from './PriceSummary';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { ISummary } from '../../interfaces';

interface PriceInfoProps {
  summary: ISummary[];
  totalPrice: string;
}

const PriceInfo: React.FC<PriceInfoProps> = ({ summary, totalPrice }) => {
  const ref = React.useRef();
  const [isTooltipOpen, setTooltipOpen] = React.useState(false);
  // Close on click outside of the tooltip
  useOnClickOutside({ ref, handler: () => setTooltipOpen(false) });

  return (
    <TooltipContainer ref={ref}>
      <IconButton data-test-id="summary-info-button" onClick={() => setTooltipOpen(!isTooltipOpen)}>
        <IconInfoCircle size="20" />
      </IconButton>
      {isTooltipOpen ? (
        <Tooltip>
          <PriceSummary summary={summary} totalPrice={totalPrice} />
        </Tooltip>
      ) : null}
    </TooltipContainer>
  );
};

export default PriceInfo;
