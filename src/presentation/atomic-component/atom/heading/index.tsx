import { colors } from 'presentation/style';
import Divider from '@mui/material/Divider';
import type { FC, ReactNode } from 'react';

interface HeadingProps {
  title: ReactNode | string;
  startElement?: ReactNode;
  endElement?: ReactNode;
}

export const Heading: FC<HeadingProps> = ({ title, startElement, endElement }) => (
  <div className={'flex justify-around items-center gap-2'}>
    {startElement || null}

    {typeof title === 'string' ? (
      <h2 className={'uppercase z-10 font-semibold text-lg min-w-max'}>{title}</h2>
    ) : (
      <div className={'z-10 min-w-max'}>{title}</div>
    )}

    <span className={'w-full'}>
      <Divider color={colors.primary} />
    </span>

    {endElement || null}
  </div>
);
