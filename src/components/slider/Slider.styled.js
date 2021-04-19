import styled from 'styled-components';
import { COLOR } from '../../utils/constants';

export const StyledSlider = styled.div`
  width: 100%;

  .rc-slider-rail,
  .rc-slider-track {
    height: 10px;
  }

  .rc-slider-rail {
    background-color: ${COLOR.BIG_STONE};
  }

  .rc-slider-tooltip-inner {
    padding: 0.5rem 0.75rem;
    min-width: auto;
    height: 100%;
    font-size: 16px;
    line-height: 1;
    color: #fff;
    border-radius: 2rem; /* move to constant */
    box-shadow: initial;
    cursor: grab;
  }
`;

export const StyledSliderToolTip = styled.div`
  .rc-slider-tooltip-arrow.rc-slider-tooltip-arrow.rc-slider-tooltip-arrow {
    bottom: 3px;
    left: 50%;
    margin-left: -8px;
    border-width: 10px 10px 0;
    border-top-color: ${COLOR.BLUEBERRY};
  }

  .rc-slider-tooltip-inner,
  .rc-slider-track {
    background-color: ${COLOR.BLUEBERRY};
  }

  .rc-slider-handle {
    border: 4px solid ${COLOR.BLUEBERRY};
    height: 28px;
    margin-top: -8px;
    width: 28px;
  }
`;
