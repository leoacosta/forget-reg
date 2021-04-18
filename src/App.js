import { useState } from 'react';
import DatePicker from 'react-datepicker';
import {
  StyledApp,
  StyledRow,
  StyledCalculator,
  StyledHeading3,
  StyledLink,
  StyledResult,
} from './App.styled';
import Button from './components/button/Button';
import RangeSlider from './components/slider/Slider';
import 'react-datepicker/dist/react-datepicker.css';

// TODOs
// 1. Remove all inline styles
// 2. Remove outline in accessible way
// 3. Move constants to constants.js file
// 4. Validate user to enter a due date of >= 3 months ELSE invalid

const REGISTRATION_TERM = [
  { label: '3 months', value: 3 },
  { label: '6 months', value: 6 },
  { label: '12 months', value: 12 },
];

const REGISTRATION_FREQUENCY = [
  { label: 'weekly', suffix: '/pw' },
  { label: 'fortnightly', suffix: '/pf' },
  { label: 'monthly', suffix: '/pm' },
];

// Default values

const DEFAULT_REGISTRATION_AMOUNT = 850;
const DEFAULT_REGISTRATION_DURATION = REGISTRATION_TERM[2].label;
const DEFAULT_PAYMENT_FREQUENCY = REGISTRATION_FREQUENCY[0].label;
const ADMIN_FEE = 5;

const App = () => {
  const [amount, setAmount] = useState(DEFAULT_REGISTRATION_AMOUNT);
  const [term, setTerm] = useState(DEFAULT_REGISTRATION_DURATION);
  const [dueDate, setDueDate] = useState('');
  const [paymentFrequency, setPaymentFrequency] = useState(
    DEFAULT_PAYMENT_FREQUENCY
  );
  const [paymentSuffix, setPaymentSuffix] = useState(
    REGISTRATION_FREQUENCY[0].suffix
  );

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
      if (calculateMonthlyDiff() <= 0) {
        return amount + ADMIN_FEE;
      }
      return amount / calculateMonthlyDiff() + ADMIN_FEE;
    }

    if (paymentFrequency === 'fortnightly') {
      if (calculateFornight() <= 0) {
        return amount + ADMIN_FEE;
      }
      return amount / calculateFornight() + ADMIN_FEE;
    }

    if (paymentFrequency === 'weekly') {
      if (calculateWeekly() <= 0) {
        return amount + ADMIN_FEE;
      }
      return amount / calculateWeekly() + ADMIN_FEE;
    }
  };

  return (
    <StyledApp>
      <StyledCalculator>
        <StyledRow>
          <StyledHeading3 style={{ marginBottom: 70 }}>
            How much is your regristration?
          </StyledHeading3>
          <RangeSlider
            defaultValue={DEFAULT_REGISTRATION_AMOUNT}
            onChange={(value) => setAmount(value)}
          />
        </StyledRow>
        <StyledRow>
          <StyledHeading3>How long is this regristration?</StyledHeading3>
          <Button
            data={REGISTRATION_TERM}
            handleOnClick={(event) => setTerm(event.currentTarget.value)}
            defaultValue={term}
          />
        </StyledRow>
        <StyledRow>
          <StyledHeading3>When is it due?</StyledHeading3>
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            placeholderText="Please select"
            className="date-picker"
            dateFormat="MMMM d, yyyy"
          />
        </StyledRow>
        <StyledRow>
          <StyledHeading3>How often would you pay?</StyledHeading3>
          <Button
            data={REGISTRATION_FREQUENCY}
            handleOnClick={handlePaymentFrequencyOnClick}
            defaultValue={paymentFrequency}
          />
        </StyledRow>
        <StyledRow>
          <StyledHeading3>
            If you join today your registration will cost you
          </StyledHeading3>
          <StyledResult>
            <p>
              {dueDate
                ? `${renderRegistrationCost().toFixed(2)}`
                : (0).toFixed(2)}
              <span>{paymentSuffix}</span>
            </p>
            <StyledLink href="#0">Apply Now</StyledLink>
          </StyledResult>
        </StyledRow>
      </StyledCalculator>
    </StyledApp>
  );
};

export default App;
