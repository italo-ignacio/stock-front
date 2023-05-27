/* eslint-disable react/boolean-prop-naming */
import { LabelInput } from 'presentation/atomic-component/atom/label-input';
import { NumericFormat } from 'react-number-format';
import { useEffect } from 'react';
import type { FC } from 'react';
import type { NumericFormatProps } from 'react-number-format';
import type { UseFormRegisterReturn } from 'react-hook-form';

type NumericInputProps = NumericFormatProps & {
  error?: boolean;
  register?: UseFormRegisterReturn;
  numberType?: 'monetary';
};

export const NumericInput: FC<NumericInputProps> = ({ ...props }) => {
  useEffect(() => {
    const onClick = (): void => {
      window.setTimeout(() => {
        console.log(document.activeElement?.tagName.toLowerCase());
        if (document.activeElement?.tagName.toLowerCase() !== 'input' && props.error)
          document.getElementById('numeric-input')?.focus();
      }, 2000);
    };

    document.getElementById('form-button')?.addEventListener('click', onClick);

    return () => {
      document.getElementById('form-button')?.removeEventListener('keydown', onClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (props.numberType === 'monetary')
    return (
      <NumericFormat
        {...props}
        customInput={LabelInput}
        decimalScale={2}
        decimalSeparator={','}
        id={'numeric-input'}
        thousandSeparator={'.'}
        thousandsGroupStyle={'thousand'}
      />
    );

  return (
    <NumericFormat
      {...props}
      autoFocus={true}
      customInput={LabelInput}
      decimalScale={2}
      decimalSeparator={','}
      id={'numeric-input'}
      thousandSeparator={'.'}
      thousandsGroupStyle={'thousand'}
    />
  );
};
