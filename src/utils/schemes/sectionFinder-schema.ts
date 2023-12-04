import * as yup from 'yup';

export const sectionSchema = {
  createSection: yup.object({
    sectionTitl: yup.string(),
    subcategories: yup.string(),
  }),
};
