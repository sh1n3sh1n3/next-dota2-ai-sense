export const _questions = [
  { id: '1', text: 'Which items would be most recommended for this Match ID?' },
  { id: '2', text: 'Which items would be most recommended for this Match ID?' },
  { id: '3', text: 'Which items would be most recommended for this Match ID?' },
  { id: '4', text: 'Which items would be most recommended for this Match ID?' },
  { id: '5', text: 'Which items would be most recommended for this Match ID?' },
  { id: '6', text: 'Which items would be most recommended for this Match ID?' },
  { id: '7', text: 'Which items would be most recommended for this Match ID?' },
  { id: '8', text: 'Which items would be most recommended for this Match ID?' },
  { id: '9', text: 'Which items would be most recommended for this Match ID?' },
  { id: '10', text: 'Which items would be most recommended for this Match ID?' },
];

export const _answers = [
  { text: 'Fugiat deserunt consectetur fugiat mollit excepteur tempor proident au' },
  { text: 'Fugiat deserunt consectetur fugiat mollit excepteur tempor proident au' },
  { text: 'Fugiat deserunt consectetur fugiat mollit excepteur tempor proident au' },
  { text: 'Fugiat deserunt consectetur fugiat mollit excepteur tempor proident au' },
  { text: 'Fugiat deserunt consectetur fugiat mollit excepteur tempor proident au' },
  { text: 'Fugiat deserunt consectetur fugiat mollit excepteur tempor proident au' },
  { text: 'Fugiat deserunt consectetur fugiat mollit excepteur tempor proident au' },
  { text: 'Fugiat deserunt consectetur fugiat mollit excepteur tempor proident au' },
];

export const _simple_answer = ` Your Performance Overview
    Hero Played: [Hero X]
    Team Composition: [Hero 1, Hero 2, Hero 3, Hero 4, Hero 5]
    XPM: [X] | GPM: [Y] | KDA: [1/1/10]
    Item Build Used: [Item 1, Item 2, Item 3, Item 4]
    Lane Matchup: You laned against [Enemy Hero X]
    1. Early Game Recommendations
    Optimal Starting Items: Based on statistical trends, the best starting items against [Enemy Hero X] would be:
    [Item 1] (Reason)
    [Item 2] (Reason)
    [Item 3] (Reason)`;

export const _answer = `Match Analysis - ID [Match ID]
    Your Performance Overview
    Hero Played: [Hero X]
    Team Composition: [Hero 1, Hero 2, Hero 3, Hero 4, Hero 5]
    XPM: [X] | GPM: [Y] | KDA: [1/1/10]
    Item Build Used: [Item 1, Item 2, Item 3, Item 4]
    Lane Matchup: You laned against [Enemy Hero X]
    1. Early Game Recommendations
    Optimal Starting Items: Based on statistical trends, the best starting items against [Enemy Hero X] would be:
    [Item 1] (Reason)
    [Item 2] (Reason)
    [Item 3] (Reason)

    2. Mid-Game Itemization Suggestions
    Considering the enemy lineup, including [Enemy Hero 1] and [Enemy Hero 2], who deal high [physical/magical] damage, a more effective mid-game build would be:
    [Item 1] – (Reason: Counters enemy damage/sustain)
    [Item 2] – (Reason: Provides mobility/utility)
    [Item 3] – (Reason: Enhances survivability/damage)

    3. Macro & Playstyle Improvements
    Laning Phase: [Tips on positioning, harassing, or creep management]
    Objective Control: [When to push, rotate, or take fights]
    Farming Patterns: [How to maximize efficiency and avoid unnecessary risks]
    Team Fight Role: [What your hero’s ideal role should be in fights]

    4. Final Thoughts & Adjustments
    To further optimize your performance, consider:
    ✅ Alternative item choices depending on enemy scaling
    ✅ Adjusting lane approach to handle difficult matchups
    ✅ Better timing for rotations and map control`;

export const _questions_answers = [
  { type: 'question', text: 'Which items would be most recommended for this Match ID?' },
  { type: 'answer', text: _simple_answer },
];
