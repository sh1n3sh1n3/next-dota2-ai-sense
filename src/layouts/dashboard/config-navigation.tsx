import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// locales
import { useLocales } from 'src/locales';
// components
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/images/${name}.svg`} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  chat: <Iconify icon="fluent-mdl2:office-chat" />,
  film: <Iconify icon="ph:film-strip-duotone" />,
  home: icon('home'),
  light: icon('light'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useLocales();

  const data = useMemo(
    () => [
      // HOME
      // ----------------------------------------------------------------------
      {
        subheader: t(''),
        items: [
          {
            title: t('Home'),
            path: paths.dashboard.root,
            icon: ICONS.home,
          },
        ],
      },

      // SENSE LEARN
      // ----------------------------------------------------------------------
      {
        subheader: t('Sense Learn '),
        items: [
          {
            title: t('How it works'),
            path: paths.dashboard.senseLearn.howItWorks,
            icon: ICONS.chat,
          },
          {
            title: t('Questions and Answers'),
            path: paths.dashboard.senseLearn.questionsAndAnswers.root,
            icon: ICONS.light,
          },

          {
            title: t('Saved'),
            path: paths.dashboard.senseLearn.savedAnswers.root,
            icon: ICONS.film,
          },
        ],
      },

      // SENSE REALTIME
      {
        subheader: t(t('Sense Real Time')),
        items: [
          {
            title: t('How to works'),
            path: paths.dashboard.senseRealTime.howToWorks,
            icon: ICONS.chat,
          },
        ],
      },
    ],
    [t]
  );

  return data;
}
