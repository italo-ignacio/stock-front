import { PhotoCameraOutlined } from '@mui/icons-material';
import { colors } from 'presentation/style';
import type { FC } from 'react';

const selectImageStyle = `
  flex flex-col w-[80%] p-4 px-6 text-center 
  gap-3 items-center justify-center text-[26px] 
  mx-auto rounded-md shadow-[0px_0px_5px_5px] 
  shadow-[#00000025] cursor-pointer
  dark:bg-gray-700 dark:border dark:border-gray-350
  `;

export const SelectImageMessage: FC = () => (
  <div
    className={selectImageStyle}
    onClick={(): void => document.getElementById('select-image')?.click()}
  >
    <span>
      <PhotoCameraOutlined
        sx={{
          color: colors.gray[350],
          fontSize: '70px'
        }}
      />
    </span>

    <span className={'uppercase text-gray-350 font-bold'}>selecionar imagem</span>
  </div>
);
