/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, Chip, InputAdornment, TextField } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useState } from 'react';
import type { Dispatch, FC, ReactNode, RefCallback, SetStateAction } from 'react';
import type { Noop } from 'react-hook-form';
import type { OverridableComponent } from '@mui/types';
import type { SvgIconTypeMap, TextFieldProps } from '@mui/material';

export interface SelectValues {
  label: string;
  value: string;
}

type SelectProps = TextFieldProps & {
  isMultiple?: boolean;
  options: SelectValues[];
  valueInput?: SelectValues | SelectValues[] | null;
  setValue?: Dispatch<SetStateAction<SelectValues | SelectValues[]>>;
  field?: {
    name?: string;
    onBlur?: Noop;
    onChange?: () => void;
    value?: (string | undefined)[] | string;
  };
  change?: <T>(value: T) => void;
  changeValue?: (event: { target: { value: string } }) => void;
  reference?: RefCallback<HTMLInputElement>;
  defaultValue?: SelectValues | SelectValues[];
  StartIcon?: OverridableComponent<SvgIconTypeMap>;
  isHideClearButton?: boolean;
  renderOptions?: ReactNode;
  onClear?: () => void;
};

interface OptionProps {
  label: string;
}

const defaultFunction = (): null => null;

export const Select: FC<SelectProps> = ({
  isMultiple,
  options,
  field,
  change,
  reference,
  setValue,
  changeValue,
  StartIcon,
  valueInput,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Autocomplete
      ListboxComponent={(items): any => (
        <ul {...items} className={'max-h-[150px] laptop:max-h-[400px] dark:text-white'} />
      )}
      clearOnEscape
      clearText={'Limpar'}
      closeText={'Fechar'}
      defaultValue={props.defaultValue}
      disableClearable={props.isHideClearButton}
      disableCloseOnSelect={isMultiple}
      fullWidth
      isOptionEqualToValue={(option: SelectValues, value: SelectValues): boolean =>
        option?.value === value?.value
      }
      loadingText={'Carregando...'}
      multiple={isMultiple}
      noOptionsText={'Nenhum dado encontrado'}
      onChange={(event, data): void => {
        if (isMultiple) {
          const customData = data as SelectValues[];

          if (change)
            if (customData) change(customData.map((item) => item));
            else change(undefined);
          if (setValue) setValue(customData);
        } else {
          const customData = data as SelectValues;

          if (change)
            if (customData?.value) change(customData);
            else change(undefined);
          if (setValue) setValue(customData);
        }

        if (data === null && props.onClear) props.onClear();
      }}
      onClose={(): void => setOpen(false)}
      onOpen={(): void => {
        setOpen(true);
      }}
      open={open}
      openText={'Abrir'}
      options={options}
      renderInput={({ InputProps, ...params }): ReactNode => {
        const { startAdornment, ...rest } = InputProps as any;

        return (
          <>
            <TextField
              InputProps={{
                ...rest,
                startAdornment: StartIcon ? (
                  <InputAdornment
                    position={'start'}
                    style={{
                      paddingLeft: '0.3rem'
                    }}
                  >
                    <StartIcon className={'dark:text-white'} />
                  </InputAdornment>
                ) : null
              }}
              {...params}
              {...props}
              {...field}
              inputRef={reference}
              onChange={changeValue || defaultFunction}
              placeholder={props?.placeholder}
            />

            <TextField
              InputProps={{ startAdornment }}
              color={'isSelect'}
              onClick={(): void => {
                if (open) setOpen(false);
              }}
              variant={'filled'}
            />
          </>
        );
      }}
      renderOption={(renderProps, option: SelectValues, state): ReactNode => (
        <li
          {...renderProps}
          className={`${state.selected ? 'bg-[#005da979] dark:bg-gray-550' : 'dark:bg-gray-700'}`}
          style={{
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          {option.label}
        </li>
      )}
      renderTags={(params, getTagProps): ReactNode => (
        <div className={'max-h-[125px] overflow-auto'}>
          {params.map((option, index) => {
            const customOption = option as OptionProps;

            return (
              <Chip
                deleteIcon={
                  <Close
                    sx={{
                      color: 'white !important'
                    }}
                  />
                }
                sx={{
                  color: 'white'
                }}
                {...getTagProps({ index })}
                key={customOption.label}
                label={customOption.label}
              />
            );
          })}
        </div>
      )}
      value={valueInput}
    />
  );
};
