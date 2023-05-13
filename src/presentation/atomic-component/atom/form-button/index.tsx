import { Button, CircularProgress } from '@mui/material';
import type { FC } from 'react';

interface FormButtonProps {
  isSubmitting: boolean;
  label: string;
}

export const FormButton: FC<FormButtonProps> = ({ isSubmitting, label }) => (
  <Button
    className={'w-full flex gap-2'}
    size={'large'}
    type={isSubmitting ? 'button' : 'submit'}
    variant={'contained'}
  >
    {isSubmitting ? (
      <span className={'h-[20px]'}>
        <CircularProgress color={'secondary'} size={20} sx={{ padding: '0' }} thickness={5} />
      </span>
    ) : null}

    {isSubmitting ? <span>Carregando</span> : <span>{label}</span>}
  </Button>
);
