'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowLeft } from 'components/icons/ArrowIcons';
import { ROUTES } from 'constants/routes';

import { Section } from 'components/common/profile/Section';
import { MinorLinkButton } from 'ui/components/Button';
import s from './Create.module.scss';
import { CreateDetailSectinForm } from '../CreateDetailSectionForm';

export const Create: FC = () => {
  const t = useTranslations('ProfilePage.Sections');

  return (
    <Section>
      <Section.Header>
        <div className={s.header}>
          <MinorLinkButton
            children={<ArrowLeft />}
            className={s.btn}
            href={ROUTES.PRIVATE.SECTIONS}
          />
          <h3 className={s.header_title}>{t('create_new_section')}</h3>
          <div className={s.header_btn}></div>
        </div>
      </Section.Header>
      <Section.Body>
        <CreateDetailSectinForm section_name={'create'} />
      </Section.Body>
    </Section>
  );
};
