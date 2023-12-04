import { ROUTES } from 'constants/routes';
import { ISidebarConfig } from '../layout';

import { DashboardIcon } from 'components/icons/DashboardIcon';
import { MessageIcon } from 'components/icons/MessageIcon';
import { SectionsIcon } from 'components/icons/SectionsIcon';
import { KeyIcon } from 'components/icons/KeyIcon';
import { SellersIcon } from 'components/icons/SellersIcon';
import { BuyersIcon } from 'components/icons/BuyersIcon';
import { FinancialIcon } from 'components/icons/FinancialIcon';
import { AchievementsIcon } from 'components/icons/AchievementsIcon';
import { FlagIcon } from 'components/icons/FlagIcon';
import { LogoutIcon } from 'components/icons/LogoutIcon';

export const buyerConfig: ISidebarConfig = {
  items: [
    {
      icon: <DashboardIcon />,
      title: 'dashboard',
      href: ROUTES.PRIVATE.DASHBOARD,
    },
    { icon: <MessageIcon />, title: 'messages', href: ROUTES.PRIVATE.MESSAGES },
    {
      icon: <SectionsIcon />,
      title: 'sections',
      href: ROUTES.PRIVATE.SECTIONS,
    },
    { icon: <SellersIcon />, title: 'sellers', href: ROUTES.PRIVATE.SELLERS },
    { icon: <BuyersIcon />, title: 'buyers', href: ROUTES.PRIVATE.BUYERS },
    {
      icon: <FinancialIcon />,
      title: 'financial',
      href: ROUTES.PRIVATE.FINANCIALICON,
    },
    {
      icon: <AchievementsIcon />,
      title: 'achievements',
      href: ROUTES.PRIVATE.ACHIEVEMENTS,
    },
    { icon: <KeyIcon />, title: 'security', href: ROUTES.PRIVATE.SECURITY },
    { icon: <FlagIcon />, title: 'report', href: ROUTES.PRIVATE.REPORT },
    { icon: <LogoutIcon />, title: 'logout', href: '/logout' },
  ],
};
