import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import EmpitySection from 'assets/images/empty-section.png';
import { ROUTES } from 'constants/routes';
import { LinkButton } from 'ui/components/Button';

import s from './Sections.module.scss';

export const NoSection: FC = () => {
  const t = useTranslations('ProfilePage.Sections');

  return (
    <section className={s.create}>
      <div className={s.create_context}>
        <Image
          src={EmpitySection}
          width={136}
          height={130}
          alt={`${t('create_section_btn')}`}
        />
        <h1 className={s.create_title}>{t('no_section_text')}</h1>
        <p className={s.create_paragraf}>{t('no_section_paragraf')}</p>
        <LinkButton href={ROUTES.PRIVATE.CREATESECTION}>
          {t('create_section_btn')}
        </LinkButton>
      </div>
    </section>
  );
};
