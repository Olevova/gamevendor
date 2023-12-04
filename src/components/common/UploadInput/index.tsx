import { FC } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import s from './UploadInput.module.scss';

interface IImageUploadProps {
  register: any;
  errors: any;
  name: string;
  label: string;
  className?: string;
}

export const ImageUpload: FC<IImageUploadProps> = ({
  register,
  errors,
  name,
  label,
  className,
}) => {
  const [image, setImage] = useState<string | null>(null);
  const [filename, setFilename] = useState('No selected Files');

  const classNames = `${s.upload_input} ${className ? className : ''} ${
    errors[name] ? s.fieldBox_invalid : ''
  }`.trim();

  const handleClick = () => {
    const fileInput = document.getElementsByName(name)[0] as
      | HTMLInputElement
      | undefined;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;

    if (files.length > 0) {
      setFilename(files[0].name);
      setImage(URL.createObjectURL(files[0]));
    }
  };

  return (
    <div
      className={image ? s.upload_input_image : classNames}
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <label className={s.label}>{label}</label>
      <div className={image ? s.input_elimage__image : s.input_el}>
        {image ? (
          <Image
            src={image}
            width={300}
            height={170}
            alt={filename}
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <>
            <span>Drag or click to choose a file</span>
            <span>Max size: 2 mg, only PNG or JPEG</span>
          </>
        )}
      </div>
      <input
        hidden
        className={s.input_field}
        type="file"
        accept="image/*,.png,.jpg"
        {...register(name, { required: 'This field is required' })}
        onChange={({ target: { files } }) => {
          if (files && files[0]) {
            setFilename(files[0].name);
            setImage(URL.createObjectURL(files[0]));
          }
        }}
      />

      {errors[name] && <span>{errors[name]?.message}</span>}
    </div>
  );
};
