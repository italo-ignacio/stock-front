/* eslint-disable no-nested-ternary */
import { IconButton, TextField } from '@mui/material';
import { colors } from 'presentation/style';
import { useTheme } from 'store/theme/selector';
import type { FC, ReactNode } from 'react';
import type { OverridableComponent } from '@mui/types';
import type { SvgIconTypeMap } from '@mui/material';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface LabelInputProps {
  id?: string;
  register?: UseFormRegisterReturn;
  value?: string;
  label?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  children?: ReactNode;
  error?: boolean;
  EndIcon?: OverridableComponent<SvgIconTypeMap>;
  handleEndFunction?: () => void;
  onChange?: (e: { target: { value: string } }) => void;
  onFocus?: () => void;
  onFocusOut?: () => void;
  isRow?: boolean;
}

export const LabelInput: FC<LabelInputProps> = ({ register, children, ...props }) => {
  const theme = useTheme();

  return (
    <div
      className={`flex ${
        props.isRow ? 'gap-5 items-center' : 'flex-col'
      } w-full text-start dark:text-white`}
    >
      {props.label ? (
        <label className={'mb-[2px] min-w-max'}>
          {props.label}
          {props.required ? <span className={'text-red'}> *</span> : ''}
        </label>
      ) : null}

      {children || (
        <TextField
          {...register}
          InputProps={{
            endAdornment: props.EndIcon ? (
              <div className={'flex absolute right-3 justify-end items-end'}>
                <IconButton
                  onClick={props.handleEndFunction}
                  sx={{
                    padding: '4px'
                  }}
                  tabIndex={-1}
                >
                  <props.EndIcon
                    sx={{
                      color:
                        props.error && props.error ? colors.red : theme === 'dark' ? '#eeeeee' : ''
                    }}
                  />
                </IconButton>
              </div>
            ) : null,
            sx: {
              color: theme === 'dark' ? 'white' : ''
            }
          }}
          error={props.error}
          id={props.id}
          label={
            <span>
              {props.placeholder}
              {props.required ? <span className={'text-red'}> *</span> : ''}
            </span>
          }
          onBlur={props.onFocusOut}
          onChange={props.onChange ? props.onChange : register?.onChange}
          onFocus={props.onFocus}
          type={props.type}
          value={props.value}
        />
      )}
    </div>
  );
};
