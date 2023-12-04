'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { sectionSchema } from 'utils/schemes/sectionFinder-schema';
import { MinorButton, Button } from 'ui/components/Button';
import { FieldBox } from 'components/common/FieldBox';
import { ImageUpload } from 'components/common/UploadInput';
import { PlusIcon } from 'components/icons/PlusIcon';

import s from './Sections.module.scss';

interface IChangePassword {
  sections_title: string;
  subcategories: string[];
}

interface ISectionsType {
  section_name: string;
}

export const CreateDetailSectinForm: FC<ISectionsType> = ({
  section_name: create,
}) => {
  const t = useTranslations('ProfilePage.Sections.creation_form');

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<IChangePassword>({});

  const handleCreateSection = ({
    sections_title,
    subcategories,
  }: IChangePassword) => {};

  const handelCategory = () => {
    reset({
      ...watch(),
      subcategories: [...(watch().subcategories || []), ''],
    });
  };

  const fields = [
    {
      name: 'sections_title',
      label: t('section_title'),
      placeholder: t('section_title_label'),
    },
    {
      name: 'subcategory',
      label: t('subcategory'),
      placeholder: t('subcategory_label'),
    },
  ];

  return (
    <form className={s.form} onSubmit={handleSubmit(handleCreateSection)}>
      <div className={s.form_fields}>
        <FieldBox
          register={register}
          errors={errors}
          name={fields[0].name}
          label={fields[0].label}
          type="text"
          placeholder={fields[0].placeholder}
          className={s.form_field}
        />
        <div className={s.subcategory}>
          <FieldBox
            register={register}
            errors={errors}
            name={fields[1].name}
            label={fields[1].label}
            type="text"
            placeholder={fields[1].placeholder}
            className={s.form_field}
          />
          {watch().subcategories &&
            watch().subcategories.map((_, index) => (
              <FieldBox
                key={index}
                register={register}
                errors={errors}
                name={`subcategories[${index}]`} // Змінюємо ім'я поля для масиву
                label={fields[1].label}
                type="text"
                placeholder={fields[1].placeholder}
                className={s.form_field}
              />
            ))}

          <MinorButton
            children={<PlusIcon />}
            className={s.btn}
            onClick={handelCategory}
          />
        </div>
        <ImageUpload
          register={register}
          errors={errors}
          name="image"
          label={t('cover')}
        />
      </div>
      <div className={s.form_footer}>
        {create === 'create' ? (
          <Button className={s.form_submit} type="submit">
            {t('create_section_btn')}
          </Button>
        ) : (
          <div className={s.btn_section}>
            <Button className={s.form_submit} type="submit">
              {t('discard')}
            </Button>{' '}
            <Button className={s.form_submit} type="submit">
              {t('save_changes')}
            </Button>
          </div>
        )}
      </div>
    </form>
  );
};
