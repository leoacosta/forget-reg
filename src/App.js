import { useState } from 'react';
import DatePicker from 'react-datepicker';
import {
  StyledApp,
  StyledRow,
  StyledCalculator,
  StyledDatePicker,
  StyledHeading3,
  StyledLink,
  StyledResult,
} from './App.styled';
import Button from './components/button/Button';
import RangeSlider from './components/slider/Slider';
import 'react-datepicker/dist/react-datepicker.css';
import {
  REGISTRATION_ADMIN_FEE,
  REGISTRATION_TERM,
  REGISTRATION_FREQUENCY,
  DEFAULT_REGISTRATION_AMOUNT,
  DEFAULT_REGISTRATION_DURATION,
  DEFAULT_PAYMENT_FREQUENCY,
} from './utils/constants';

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
   * Return result based on registration frequency
   */

  const getFrequencyAmount = (callback) =>
    amount / callback + REGISTRATION_ADMIN_FEE;

  /**
   * Render payment frequency result
   * (i.e. month, fortnight, week)
   */
  const renderRegistrationCost = () => {
    const value = 0;
    const isMonthly = paymentFrequency === 'monthly';
    const isFornightly = paymentFrequency === 'fortnightly';
    const isWeekly = paymentFrequency === 'weekly';

    if (
      calculateMonthlyDiff() <= value ||
      calculateFornight() <= value ||
      calculateWeekly() <= value
    ) {
      return amount + REGISTRATION_ADMIN_FEE;
    }

    if (isMonthly) return getFrequencyAmount(calculateMonthlyDiff());
    if (isFornightly) return getFrequencyAmount(calculateFornight());
    if (isWeekly) return getFrequencyAmount(calculateWeekly());
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
          <StyledDatePicker>
            <DatePicker
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              placeholderText="Please select"
              className="date-picker"
              dateFormat="MMMM d, yyyy"
              isClearable
            />
          </StyledDatePicker>
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
