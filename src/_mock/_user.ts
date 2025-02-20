export const USER_STATUS_OPTIONS = [
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending' },
  { value: 'banned', label: 'Banned' },
  { value: 'rejected', label: 'Rejected' },
];

export const _userPlans = [
  {
    subscription: 'Free',
    price: 0,
    caption: 'To discovery the tool',
    period: '/month',
    description: 'Free forever',
    lists: ['3 Prototypes', '3 Boards', 'Up To 5 Team Members'],
    labelAction: 'Your current Plan',
  },
  {
    subscription: 'Learn',
    price: 19,
    caption: 'Enhanced AI functionalities',
    period: '/team/month',
    description: 'Monthly subscription per user',
    lists: ['5 chats per day', '30 days history', 'Limited interactions'],
    labelAction: 'Upgrade',
  },
  {
    subscription: 'Learn Real Time',
    price: 49,
    caption: 'Player like a pro',
    period: '/month',
    description: 'Elite VIP Experience: Exclusive per user',
    lists: ['Collaboration features', 'Smart analytics', 'Enterprise-level support'],
    labelAction: 'Upgrade',
  },
];
