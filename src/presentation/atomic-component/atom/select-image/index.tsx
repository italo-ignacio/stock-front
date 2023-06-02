/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable unused-imports/no-unused-vars */
import { Button, IconButton, ListItemButton } from '@mui/material';
import { PhotoCameraOutlined, RemoveCircleOutline } from '@mui/icons-material';
import { SelectImageMessage } from 'main/utils';
import { colors } from 'presentation/style';
import { toast } from 'react-toastify';
import { useAppSelector } from 'store';
import { useState } from 'react';
import type { FC } from 'react';

interface SelectImageProps {
  multiple?: boolean;
  onChange: (item: File | undefined) => void;
  variant?: 'primary' | 'secondary';
}

export const SelectImage: FC<SelectImageProps> = ({ multiple, onChange, variant }) => {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <div>
      {variant === 'secondary' ? (
        <div>
          {img ? (
            <div
              className={'flex items-center'}
              style={{
                backgroundColor: theme === 'light' ? '' : colors.gray[700],
                borderRadius: '6px',
                boxShadow: theme === 'light' ? '0px 0px 8px 1px rgba(0, 0, 0, 0.2)' : ''
              }}
            >
              <ListItemButton
                onClick={(): void => document.getElementById('select-image')?.click()}
                sx={{
                  display: 'flex',
                  gap: '10px',
                  height: '70px',
                  padding: '15px 8px'
                }}
              >
                <img
                  className={'w-[56px] rounded-md  cursor-pointer'}
                  onClick={(): void => document.getElementById('select-image')?.click()}
                  src={img}
                />

                <span className={'dark:text-white truncate'}>{title}</span>
              </ListItemButton>

              <IconButton
                onClick={(): void => {
                  setImg('');
                  setTitle('');
                  onChange(undefined);
                }}
              >
                <RemoveCircleOutline color={'error'} />
              </IconButton>
            </div>
          ) : (
            <ListItemButton
              onClick={(): void => document.getElementById('select-image')?.click()}
              sx={{
                alignItems: 'center',
                backgroundColor: theme === 'light' ? '' : colors.gray[700],
                borderRadius: '6px',
                boxShadow: theme === 'light' ? '0px 0px 8px 1px rgba(0, 0, 0, 0.2)' : '',
                display: 'flex',
                gap: '10px',
                height: '70px',
                padding: '15px 8px'
              }}
            >
              <span>
                <PhotoCameraOutlined
                  sx={{
                    color: colors.gray[350],
                    fontSize: '50px'
                  }}
                />
              </span>

              <span className={'dark:text-white'}>Selecionar imagem</span>
            </ListItemButton>
          )}
        </div>
      ) : (
        <div className={'w-full'}>
          {img ? (
            <div className={'flex flex-col gap-4 items-center'}>
              <img
                className={
                  'w-[86%] mx-auto rounded-md shadow-[0px 0px 5px 5px] shadow-[#00000025] cursor-pointer'
                }
                onClick={(): void => document.getElementById('select-image')?.click()}
                src={img}
              />

              <Button
                color={'error'}
                onClick={(): void => {
                  setImg('');
                  setTitle('');
                  onChange(undefined);
                }}
                variant={'text'}
              >
                Remover imagem
              </Button>
            </div>
          ) : (
            <SelectImageMessage />
          )}
        </div>
      )}

      <input
        accept={'.jpeg, .png, .webp, .avif, .jpg'}
        className={'hidden'}
        id={'select-image'}
        multiple={multiple}
        onChange={(event): void => {
          if (event.target.files)
            if (event.target.files[0].size > 5000000)
              toast.error('O arquivo deve ter menos de 5MB');
            else {
              onChange(event.target.files[0]);
              setImg(URL.createObjectURL(event.target.files[0]));
              setTitle(event.target.files[0].name);
            }
          else onChange(undefined);
          Object.assign(event.target, { value: '' });
        }}
        type={'file'}
      />
    </div>
  );
};

SelectImage.defaultProps = {
  variant: 'primary'
};
