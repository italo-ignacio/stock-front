/* eslint-disable react/boolean-prop-naming */
import { LabelInput } from 'presentation/atomic-component/atom/label-input';
import { NumericFormat } from 'react-number-format';
import type { FC } from 'react';
import type { NumericFormatProps } from 'react-number-format';

type NumericInputProps = NumericFormatProps & {
  error?: boolean;
  numberType?: 'monetary';
};

export const NumericInput: FC<NumericInputProps> = ({ ...props }) => {
  if (props.numberType === 'monetary')
    return (
      <NumericFormat
        {...props}
        customInput={LabelInput}
        decimalScale={2}
        decimalSeparator={','}
        inputMode={'numeric'}
        prefix={'R$ '}
        thousandSeparator={'.'}
        thousandsGroupStyle={'thousand'}
      />
    );

  return (
    <NumericFormat
      {...props}
      customInput={LabelInput}
      decimalScale={2}
      decimalSeparator={','}
      inputMode={'numeric'}
      thousandSeparator={'.'}
      thousandsGroupStyle={'thousand'}
    />
  );
};
