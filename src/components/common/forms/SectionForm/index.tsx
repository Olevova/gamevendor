'use client';

import React, { FC } from 'react';
import { SeacrhIcon } from 'components/icons/social/SeacrhIcon';
import { MinorButton } from 'ui/components/Button';
import s from '../SeacrhForm/SeachForm.module.scss';
import { useForm } from 'react-hook-form';
import { DropdownField } from 'components/common/DropdownField';

interface IFindCategory {
  category: string;
}

export const SearchSectionForm: FC = () => {
  const { register, handleSubmit, setValue, getValues } =
    useForm<IFindCategory>({});

  const onSubmit = (data: IFindCategory) => {
    console.log(data.category);
    setValue('category', '');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.form_code}>
        <label className={s.form_label} htmlFor="category">
          Category
        </label>
        <div className={s.form_input}>
          <input
            {...register('category')}
            placeholder="Enter category"
            onChange={(e) => setValue('category', e.target.value)}
          />
        </div>
      </div>
      <DropdownField
        register={register}
        label={'Create Date'}
        errors={false}
        placeholder={'From'}
        name={'from'}
        children={<div>1</div>}
      />
      <DropdownField
        register={register}
        errors={false}
        placeholder={'to'}
        name={'to'}
        children={<div>1</div>}
      />
      <MinorButton className={s.form_button} type="submit">
        <SeacrhIcon />
      </MinorButton>
    </form>
  );
};
