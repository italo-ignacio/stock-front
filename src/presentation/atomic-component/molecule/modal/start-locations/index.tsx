/* eslint-disable no-unreachable */
/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Add, Circle, RemoveCircleOutlineOutlined } from '@mui/icons-material';
import { Autocomplete } from '@react-google-maps/api';
import { Button, IconButton, ListItemButton, TextField } from '@mui/material';
import { LabelInput, Modal } from 'presentation/atomic-component/atom';
import { QueryName, apiPaths } from 'main/config';
import { api } from 'infra/http';
import { arrayLocationSchema } from 'validation/schema';
import { colors } from 'presentation/style';
import { queryClient } from 'infra/lib';
import { resolverError } from 'main/utils';
import { useEffect, useState } from 'react';
import { useFindStartLocationsQuery } from 'infra/cache';
import { useModal } from 'data/hooks';
import type { FC } from 'react';
import type { Location } from 'domain/models';

interface StartLocationsModalProps {
  id?: string;
  withGoogle?: boolean;
}

export const StartLocationsModal: FC<StartLocationsModalProps> = ({ id, withGoogle }) => {
  const { closeModal, isOpen, openModal } = useModal();

  const [autoComplete, setAutoComplete] = useState<any | null>(null);

  const [locations, setLocations] = useState<Location[]>([]);
  const [value, setValue] = useState('');
  const startLocationsQuery = useFindStartLocationsQuery({});

  useEffect(() => {
    try {
      const list = JSON.parse(startLocationsQuery.data?.payload.startLocations ?? '[]');

      setLocations(list);
    } catch (error) {
      resolverError(error, 'Erro ao carregar página');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <Modal
      closeModal={closeModal}
      disableBackdrop
      isOpen={isOpen}
      openModal={openModal}
      openModalElement={
        <IconButton id={id} onClick={(): void => openModal()}>
          <Add className={'text-primary dark:text-white'} />
        </IconButton>
      }
      title={'Locais de saída'}
    >
      <div className={'flex flex-col min-h-[250px] gap-2'}>
        <div className={'flex gap-2'}>
          {withGoogle ? (
            <Autocomplete
              className={'w-full'}
              onLoad={(autoC): void => setAutoComplete(autoC)}
              onPlaceChanged={(): void => {
                if (autoComplete) {
                  const location = {
                    description: autoComplete.getPlace().formatted_address ?? '',
                    lat: autoComplete.getPlace().geometry?.location?.lat() ?? 0,
                    lng: autoComplete.getPlace().geometry?.location?.lat() ?? 0
                  };

                  setLocations((oldLocations) => [...oldLocations, location]);
                  setValue('');
                }
              }}
            >
              <LabelInput
                onChange={(event): void => setValue(event.target.value)}
                placeholder={'Digite um local'}
                value={value}
              />
            </Autocomplete>
          ) : (
            <div className={'flex gap-2 w-full'}>
              <TextField
                id={'input'}
                onChange={(event): void => setValue(event.target.value)}
                onKeyDown={(event): void => {
                  if (event.key === 'Enter')
                    document.getElementById('button-to-add-on-list')?.click();
                }}
                placeholder={'Digite um local'}
                value={value}
              />

              <ListItemButton
                className={'max-w-min'}
                id={'button-to-add-on-list'}
                onClick={(): void => {
                  if (value.length > 1) {
                    setLocations((oldLocations) => [
                      ...oldLocations,
                      { description: value, lat: 0, lng: 0 }
                    ]);
                    setValue('');
                  }
                  document.getElementById('input')?.focus();
                }}
              >
                <Add />
                Adicionar
              </ListItemButton>
            </div>
          )}
        </div>

        {locations.length > 0 ? (
          <div className={'flex flex-col gap-2 max-h-[300px] overflow-auto'}>
            <h2 className={'font-semibold'}>Locais</h2>

            {locations.map((location, index) => (
              <div key={location.description} className={'flex items-center justify-between'}>
                <div>
                  <Circle
                    sx={{
                      color: colors.gray[700],
                      fontSize: '12px',
                      marginRight: '5px',
                      marginTop: '-3px'
                    }}
                  />

                  {location.description}
                </div>

                <IconButton
                  onClick={(): void => {
                    setLocations((oldLocations) =>
                      oldLocations.filter((loc, locIndex) => locIndex !== index)
                    );
                  }}
                >
                  <RemoveCircleOutlineOutlined color={'error'} />
                </IconButton>
              </div>
            ))}
          </div>
        ) : null}

        <div className={'flex flex-col mt-auto pt-3'}>
          <Button
            onClick={async (): Promise<void> => {
              try {
                await arrayLocationSchema.validate(locations, { abortEarly: false });

                await api.put({
                  body: {
                    startLocations: JSON.stringify(locations)
                  },
                  route: apiPaths.account
                });

                queryClient.invalidateQueries(QueryName.startLocations);

                closeModal();
              } catch (error) {
                resolverError(error);
              }
            }}
          >
            Salvar
          </Button>
        </div>
      </div>
    </Modal>
  );
};
