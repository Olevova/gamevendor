'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { SearchSectionForm } from 'components/common/forms/SectionForm';

export const SectionForm: FC = () => {
  const t = useTranslations('ProfilePage.Sections.seaching_form');

  return <SearchSectionForm />;
};
