// sections
import { QuestionsAndAnswersSendView } from 'src/sections/sense-learn/view';

// ----------------------------------------------------------------------

type Props = {
  params: {
    id: string;
  };
};

export const metadata = {
  title: 'Questions and Answers',
};

export default function QuestionsAndAnswersSendPage({ params }: Props) {
  const { id } = params;

  return <QuestionsAndAnswersSendView id={id} />;
}
