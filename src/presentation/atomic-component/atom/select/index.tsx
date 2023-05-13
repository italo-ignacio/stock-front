import { Autocomplete, Chip, InputAdornment, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import type { Dispatch, FC, ReactNode, RefCallback, SetStateAction } from 'react';
import type { Noop } from 'react-hook-form';
import type { OverridableComponent } from '@mui/types';
import type { SvgIconTypeMap, TextFieldProps } from '@mui/material';

export interface Values {
  label: number | string;
  value: number | string;
}

type SelectProps = TextFieldProps & {
  isMultiple?: boolean;
  options: Values[];
  valueInput?: Values | Values[];
  setValue?: Dispatch<SetStateAction<Values | Values[]>>;
  field?: {
    name?: string;
    onBlur?: Noop;
    onChange?: () => void;
    value?: (number | string | undefined)[] | number | string;
  };
  change?: (value: (number | string)[] | number | string | undefined) => void;
  changeValue?: (event: { target: { value: string } }) => void;
  reference?: RefCallback<HTMLInputElement>;
  defaultValue?: Values | Values[];
  StartIcon?: OverridableComponent<SvgIconTypeMap>;
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
}) => (
  <Autocomplete
    clearOnEscape
    clearText={'Limpar'}
    closeText={'Fechar'}
    defaultValue={props.defaultValue}
    disableCloseOnSelect={isMultiple}
    fullWidth
    isOptionEqualToValue={(option: Values, value: Values): boolean =>
      option?.value === value?.value
    }
    loadingText={'Carregando...'}
    multiple={isMultiple}
    noOptionsText={'Nenhum dado encontrado'}
    onChange={(event, data): void => {
      if (isMultiple) {
        const customData = data as Values[];

        if (change)
          if (customData) change(customData.map(({ value }) => value));
          else change(undefined);
        if (setValue) setValue(customData);
      } else {
        const customData = data as Values;

        if (change)
          if (customData?.value) change(customData.value);
          else change(undefined);
        if (setValue) setValue(customData);
      }

      if (data === null && props.onClear) props.onClear();
    }}
    openText={'Abrir'}
    options={options}
    renderInput={({ InputProps, ...params }): ReactNode => {
      const { startAdornment, ...rest } = InputProps;

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
                  <StartIcon />
                </InputAdornment>
              ) : null
            }}
            {...params}
            {...props}
            {...field}
            inputRef={reference}
            onChange={changeValue || defaultFunction}
          />

          <TextField InputProps={{ startAdornment }} color={'isSelect'} />
        </>
      );
    }}
    renderTags={(params, getTagProps): ReactNode => (
      <div className={'max-h-[90px] scrollbar:w-[6px] overflow-auto'}>
        {params.map((option, index) => {
          const customOption = option as OptionProps;

          return (
            <Chip
              deleteIcon={<CloseIcon />}
              {...getTagProps({ index })}
              key={customOption.label}
              label={customOption.label}
            />
          );
        })}
      </div>
    )}
    value={valueInput || undefined}
  />
);
