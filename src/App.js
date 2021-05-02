import { useState } from 'react';
import DatePicker from 'react-datepicker';
import {
  StyledApp,
  StyledRow,
  StyledFlex,
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
  const [startDate, setStartDate] = useState('');
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
   * preferred start and due date with 21 day offset (i.e. 3 weeks)
   */

  const calculateMonthlyDiff = () => {
    const OFFSET_IN_DAYS = 21;
    const getMillisecondsOffset =
      new Date(dueDate) - 24 * 60 * 60 * 1000 * OFFSET_IN_DAYS;
    const timeDiff = new Date(getMillisecondsOffset) - new Date(startDate);
    const monthlyDiff = timeDiff / (1000 * 60 * 60 * 24);

    return Math.ceil(monthlyDiff / 30);
  };

  const calculateFornight = () => calculateMonthlyDiff() * 2;
  const calculateWeekly = () => calculateMonthlyDiff() * 4;

  /**
   * Return result based on registration frequency
   */

  const getFrequencyAmount = (callback, fee) => amount / callback + fee;

  /**
   * Render payment frequency result
   * (i.e. month, fortnight, week)
   */
  const renderRegistrationCost = () => {
    const value = 0;

    // date range does not exceed a minimum of 1 month
    if (
      calculateMonthlyDiff() <= value ||
      calculateFornight() <= value ||
      calculateWeekly() <= value
    ) {
      return amount + REGISTRATION_ADMIN_FEE.MONTHLY;
    }

    // start date must exist to trigger output
    if (!startDate) {
      return 0;
    }

    switch (paymentFrequency) {
      case 'monthly':
        return getFrequencyAmount(
          calculateMonthlyDiff(),
          REGISTRATION_ADMIN_FEE.MONTHLY
        );
      case 'fortnightly':
        return getFrequencyAmount(
          calculateFornight(),
          REGISTRATION_ADMIN_FEE.FORNIGHTLY
        );
      case 'weekly':
        return getFrequencyAmount(
          calculateWeekly(),
          REGISTRATION_ADMIN_FEE.WEEKLY
        );
      default:
        break;
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
          <StyledFlex>
            <StyledDatePicker>
              <StyledHeading3>Your preferred start date?</StyledHeading3>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Please select"
                className="date-picker"
                dateFormat="MMMM d, yyyy"
                isClearable
              />
            </StyledDatePicker>
            <StyledDatePicker>
              <StyledHeading3>When is it due?</StyledHeading3>
              <DatePicker
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                placeholderText="Please select"
                className="date-picker"
                dateFormat="MMMM d, yyyy"
                isClearable
              />
            </StyledDatePicker>
          </StyledFlex>
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
