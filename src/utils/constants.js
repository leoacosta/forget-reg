/**
 * Theming
 */

export const COLOR = {
  BLUEBERRY: '#4baef7',
  BIG_STONE: '#173146',
};

export const BREAKPOINT = {
  MD: '768px',
};

/**
 * Defaults
 */

export const REGISTRATION_TERM = [
  { label: '3 months', value: 3 },
  { label: '6 months', value: 6 },
  { label: '12 months', value: 12 },
];

export const REGISTRATION_FREQUENCY = [
  { label: 'weekly', suffix: '/pw' },
  { label: 'fortnightly', suffix: '/pf' },
  { label: 'monthly', suffix: '/pm' },
];

export const DEFAULT_REGISTRATION_AMOUNT = 850;
export const DEFAULT_REGISTRATION_DURATION = REGISTRATION_TERM[2].label;
export const DEFAULT_PAYMENT_FREQUENCY = REGISTRATION_FREQUENCY[0].label;

export const REGISTRATION_ADMIN_FEE = {
  MONTHLY: 5.5,
  FORNIGHTLY: 2.53,
  WEEKLY: 1.26,
};
