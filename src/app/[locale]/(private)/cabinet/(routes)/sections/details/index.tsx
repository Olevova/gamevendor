import { Section } from 'components/common/profile/Section';
import { MinorLinkButton } from 'ui/components/Button';
import s from '../create/Create.module.scss';
import { CreateDetailSectinForm } from '../CreateDetailSectionForm';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { ArrowLeft } from 'components/icons/ArrowIcons';
import { ROUTES } from 'constants/routes';

export const Detail: FC = () => {
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
          <h3 className={s.header_title}>{t('sections_details')}</h3>
          <div className={s.header_btn}></div>
        </div>
      </Section.Header>
      <Section.Body>
        <CreateDetailSectinForm section_name={'details'} />
      </Section.Body>
    </Section>
  );
};
