import { Breadcrumbs } from '@mui/material';
import { colors } from 'presentation/style';
import { useNavigate } from 'react-router-dom';
import { usePath } from 'data/hooks';
import type { FC } from 'react';

interface HeaderCoreContainerProps {
  title?: string;
  subTitle?: string;
  hasBreadcrumbs?: boolean;
  replaceId?: {
    id: string;
    text: string;
  };
}
export const HeaderCoreContainer: FC<HeaderCoreContainerProps> = ({
  title,
  subTitle,
  hasBreadcrumbs,
  replaceId
}) => {
  const { allPathname, lastPathname, getLink } = usePath();
  const navigate = useNavigate();

  return (
    <div className={`flex  ${title || subTitle ? 'justify-between' : 'justify-end'}`}>
      {title || subTitle ? (
        <div className={'flex flex-col border-l-4 rounded-sm border-primary pl-4 ml-2 mt-3'}>
          <h2 className={'font-light'}>{subTitle}</h2>
          <h1 className={'text-primary font-medium uppercase text-[24px]'}>{title}</h1>
        </div>
      ) : null}

      {hasBreadcrumbs ? (
        <div className={'flex items-center'}>
          <Breadcrumbs className={'text-blue'} color={colors.blue}>
            {allPathname.map((path, index) => {
              if (path === lastPathname)
                return (
                  <div key={path}>
                    {replaceId ? path.replace(replaceId.id, replaceId.text) : path}
                  </div>
                );
              return (
                <button
                  key={path}
                  className={'hover:underline'}
                  onClick={(): void => {
                    navigate(getLink(allPathname, index));
                  }}
                  type={'button'}
                >
                  {replaceId ? path?.replace(replaceId.id, replaceId.text) : path}
                </button>
              );
            })}
          </Breadcrumbs>
        </div>
      ) : null}
    </div>
  );
};

HeaderCoreContainer.defaultProps = {
  hasBreadcrumbs: true
};
