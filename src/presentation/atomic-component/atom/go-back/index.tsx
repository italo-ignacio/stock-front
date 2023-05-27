import { Button } from '@mui/material';
import { NavigateBefore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { usePath } from 'data/hooks';
import type { FC } from 'react';

export const GoBack: FC = () => {
  const navigate = useNavigate();
  const { allPathname, getLink } = usePath();

  return (
    <Button
      onClick={(): void => {
        const path = getLink(allPathname, allPathname.length - 2);

        navigate(path);
      }}
      startIcon={<NavigateBefore />}
      variant={'contained'}
    >
      Voltar
    </Button>
  );
};
