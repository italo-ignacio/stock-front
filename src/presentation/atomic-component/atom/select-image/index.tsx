/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable unused-imports/no-unused-vars */
import { Button } from '@mui/material';
import { SelectImageMessage } from 'main/utils';
import { useState } from 'react';
import type { FC } from 'react';

interface SelectImageProps {
  multiple?: boolean;
}

export const SelectImage: FC<SelectImageProps> = ({ multiple }) => {
  const [img, setImg] = useState('');

  return (
    <div>
      <div className={'w-full'}>
        {img ? (
          <div className={'flex flex-col gap-4 items-center'}>
            <img
              className={
                'w-[86%] mx-auto rounded-md shadow-[0px_0px_5px_5px] shadow-[#00000025] cursor-pointer'
              }
              onClick={(): void => document.getElementById('select-image')?.click()}
              src={img}
            />

            <Button color={'error'} onClick={(): void => setImg('')} variant={'text'}>
              Remover imagem
            </Button>
          </div>
        ) : (
          <SelectImageMessage />
        )}
      </div>

      <input
        accept={'image/*'}
        className={'hidden'}
        id={'select-image'}
        multiple={multiple}
        onChange={(event): void => {
          if (event.target.files) setImg(URL.createObjectURL(event.target.files[0]));
          Object.assign(event.target, { value: '' });
        }}
        type={'file'}
      />
    </div>
  );
};