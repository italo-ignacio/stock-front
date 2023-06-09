import {
  Button,
  FormControl,
  FormControlLabel,
  ListItemButton,
  Radio,
  RadioGroup
} from '@mui/material';
import { FormButton } from 'presentation/atomic-component/atom';
import { StartLocationsModal } from 'presentation/atomic-component/molecule/modal/start-locations';
import { resolverError } from 'main/utils';
import { useEffect, useState } from 'react';
import { useFindStartLocationsQuery } from 'infra/cache';
import { useWork } from 'data/use-case';
import type { FC } from 'react';
import type { Location } from 'domain/models';

export const WorkForm: FC = () => {
  const { handleSubmit, onSubmit, isSubmitting } = useWork();
  // const { loadError } = useJsApiLoader({
  //   googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY,
  //   libraries: ['places']
  // });

  // eslint-disable-next-line unused-imports/no-unused-vars
  const [startLocationSelected, setStartLocationSelected] = useState<string | null>(null);

  const [locationsArray, setLocationsArray] = useState<Location[]>([]);

  const startLocationsQuery = useFindStartLocationsQuery({});

  useEffect(() => {
    try {
      const list = JSON.parse(startLocationsQuery.data?.payload.startLocations ?? '[]');

      setLocationsArray(list);
      setStartLocationSelected(JSON.stringify(list[0]));
    } catch (error) {
      resolverError(error, 'Erro ao carregar página');
    }
  }, [startLocationsQuery.data, startLocationsQuery.isSuccess]);

  // if (loadError) return <div>Erro ao carregar o google maps</div>;
  return (
    <>
      <div className={'hidden'}>
        <StartLocationsModal id={'start-locations-modal-button'} withGoogle={false} />
      </div>

      <form
        className={'flex flex-col gap-4 w-[100%] h-full mx-auto'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl>
          <div className={'flex justify-between items-center pl-4'}>
            <h2 className={'text-lg font-medium'}>Local de saída</h2>

            {locationsArray && locationsArray.length > 0 ? (
              <Button
                onClick={(): void => {
                  document.getElementById('start-locations-modal-button')?.click();
                }}
              >
                Editar locais
              </Button>
            ) : null}
          </div>

          {locationsArray && locationsArray.length > 0 ? (
            <RadioGroup
              onChange={(event): void => {
                setStartLocationSelected(event.target.value);
              }}
              value={startLocationSelected}
            >
              {locationsArray.map((startLocation) => (
                <FormControlLabel
                  key={startLocation.description}
                  control={<Radio />}
                  label={startLocation.description}
                  value={JSON.stringify(startLocation)}
                />
              ))}
            </RadioGroup>
          ) : (
            <div className={'mt-5 border-2 border-secondary rounded-md'}>
              <ListItemButton
                className={'font-medium'}
                onClick={(): void => {
                  document.getElementById('start-locations-modal-button')?.click();
                }}
              >
                Cadastrar novo local de saída
              </ListItemButton>
            </div>
          )}
        </FormControl>

        <div className={'mt-auto'}>
          <FormButton isSubmitting={isSubmitting} label={'Cadastrar'} />
        </div>
      </form>
    </>
  );
};
