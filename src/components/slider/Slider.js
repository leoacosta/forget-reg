/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Slider, { SliderTooltip, Handle } from 'rc-slider';
import 'rc-slider/assets/index.css';

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`$${value}`}
      placement="top"
      key={index}
      visible
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  );
};

const RangeSlider = ({ defaultValue }) => (
  <Slider
    min={0}
    max={1600}
    step={0.01}
    defaultValue={defaultValue}
    handle={handle}
  />
);

export default RangeSlider;
