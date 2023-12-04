'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { LinkButton, MinorLinkButton } from 'ui/components/Button';
import { PlusAdd } from 'components/icons/PlusAddIcon';
import { ExclamationIcon } from 'components/icons/ExclamationIcon';
import { SectionItems } from './SectionItems';
import { Section } from 'components/common/profile/Section';
import { ROUTES } from 'constants/routes';

import s from './Sections.module.scss';

export const Sections: FC = () => {
  const t = useTranslations('ProfilePage.Sections');

  return (
    <Section>
      <Section.Header>
        <div className={s.header}>
          <h3>{t('title')}</h3>
          <div className={s.header_btn}>
            <MinorLinkButton href="">
              <ExclamationIcon />
              {t('section_reports_btn')}
            </MinorLinkButton>
            <LinkButton href={ROUTES.PRIVATE.CREATESECTION}>
              <PlusAdd />
              {t('add_sections_btn')}
            </LinkButton>
          </div>
        </div>
      </Section.Header>
      <Section.Body>
        <SectionItems itemsPerPage={10} />
      </Section.Body>
    </Section>
  );
};
