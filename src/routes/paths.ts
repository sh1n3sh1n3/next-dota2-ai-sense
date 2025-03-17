const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  root: '/',
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',

  // AUTH
  auth: {
    steam: {
      login: `${ROOTS.AUTH}/login`,
      register: `${ROOTS.AUTH}/register`,
    },
  },

  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    senseLearn: {
      howItWorks: `${ROOTS.DASHBOARD}/sense-learn/how-it-works`,
      howToWorks: `${ROOTS.DASHBOARD}/sense-learn/how-to-works`,
      questionsAndAnswers: {
        root: `${ROOTS.DASHBOARD}/sense-learn/questions-and-answers`,
        send: (id: string) => `${ROOTS.DASHBOARD}/sense-learn/questions-and-answers/${id}/send`,
      },
      savedAnswers: {
        root: `${ROOTS.DASHBOARD}/sense-learn/saved-answers`,
        send: (id: string) => `${ROOTS.DASHBOARD}/sense-learn/saved-answers/${id}/send`,
      },
    },
    senseRealTime: {
      howToWorks: `${ROOTS.DASHBOARD}/sense-real-time/how-to-works`,
    },
    pricing: `${ROOTS.DASHBOARD}/pricing`,
  },
};
