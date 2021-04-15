/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import Slider, { SliderTooltip, Handle } from 'rc-slider';
import Button from './components/Button';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-slider/assets/index.css';

// TODOs
// 1. Remove all inline styles
// 2. Remove outline in accessible way
// 3. Move constants to constants.js file
// 4. Validate user to enter a due date of >= 3 months ELSE invalid

const regDuration = [
  { label: '3 months', value: 3 },
  { label: '6 months', value: 6 },
  { label: '12 months', value: 12 },
];

const frequencyData = [
  { label: 'weekly', suffix: '/pw' },
  { label: 'fortnightly', suffix: '/pf' },
  { label: 'monthly', suffix: '/pm' },
];

// Default values

const DEFAULT_REGISTRATION_AMOUNT = 850;
const DEFAULT_REGISTRATION_DURATION = '12 months';
const DEFAULT_PAYMENT_FREQUENCY = 'weekly';
const ADMIN_FEE = 5;

const App = () => {
  const [amount, setAmount] = useState(DEFAULT_REGISTRATION_AMOUNT);
  const [term, setTerm] = useState(DEFAULT_REGISTRATION_DURATION);
  const [dueDate, setDueDate] = useState('');
  const [paymentFrequency, setPaymentFrequency] = useState(
    DEFAULT_PAYMENT_FREQUENCY
  );
  const [paymentSuffix, setPaymentSuffix] = useState(frequencyData[0].suffix);

  /**
   * TODO
   * 1. Add desc
   */
  const handlePaymentFrequencyOnClick = (event, suffix) => {
    setPaymentSuffix(suffix);
    setPaymentFrequency(event.currentTarget.value);
  };

  /**
   * Calculate how many months exist between
   * present and selected future date
   */

  const calculateMonthlyDiff = () => {
    const today = new Date();
    const timeDiff = new Date(dueDate) - today;
    const monthlyDiff = timeDiff / (1000 * 60 * 60 * 24);
    return Math.floor(monthlyDiff / 30);
  };

  const calculateFornight = () => calculateMonthlyDiff() * 2;
  const calculateWeekly = () => calculateMonthlyDiff() * 4;

  /**
   * Render payment frequency result
   * (i.e. month, fortnight, week)
   */
  const renderRegistrationCost = () => {
    if (paymentFrequency === 'monthly') {
      return amount / calculateMonthlyDiff() + ADMIN_FEE;
    }

    if (paymentFrequency === 'fortnightly') {
      return amount / calculateFornight() + ADMIN_FEE;
    }

    if (paymentFrequency === 'weekly') {
      return amount / calculateWeekly() + ADMIN_FEE;
    }

    return 0;
  };

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

  return (
    <div className="app">
      <div className="app-content">
        <div htmlFor="registration-cost">
          <span className="app-label">How much is your regristration?</span>
          <Slider
            min={0}
            max={1600}
            step={0.01}
            defaultValue={DEFAULT_REGISTRATION_AMOUNT}
            handle={handle}
            onChange={(value) => setAmount(value)}
          />
        </div>
        <h2 className="app-label">How long is this regristration?</h2>
        <Button
          data={regDuration}
          handleOnClick={(event) => setTerm(event.currentTarget.value)}
          defaultValue={term}
        />
        <div>
          <span className="app-label">When is it due?</span>
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            placeholderText="Please select"
            className="date-picker"
            dateFormat="MMMM d, yyyy"
          />
        </div>
        <h2 className="app-label">How often would you pay?</h2>
        <Button
          data={frequencyData}
          handleOnClick={handlePaymentFrequencyOnClick}
          defaultValue={paymentFrequency}
        />
        <p style={{ marginTop: 0 }}>
          If you join today your registration will cost you
        </p>
        <div
          className="result"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2 className="result-title">
            $
            {dueDate
              ? `${renderRegistrationCost().toFixed(2)}`
              : (0).toFixed(2)}
            <span style={{ fontSize: '1rem' }}>{paymentSuffix}</span>
          </h2>
          <a href="#0">Apply Now</a>
        </div>
      </div>
    </div>
  );
};

export default App;
