/* eslint-disable import/no-duplicates */
import 'react-day-picker/dist/style.css';
import { Button, TextField } from '@mui/material';
import { DayPicker } from 'react-day-picker';
import { SimpleMenu } from 'presentation/atomic-component/atom/simple-menu';
import { colors } from 'presentation/style';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useAppSelector } from 'store';
import { useState } from 'react';
import type { FC } from 'react';

interface DatePickerProps {
  placeholder: string;
  required?: boolean;
}
export const DatePicker: FC<DatePickerProps> = ({ ...props }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useAppSelector((state) => state.theme);

  const convertDate = (dateToConvert?: Date): string => {
    if (dateToConvert) {
      const day = new Date().getDay();

      if (day === dateToConvert.getDay())
        return `Hoje ${format(dateToConvert, 'P', {
          locale: ptBR
        })}`;

      return format(dateToConvert, 'P', {
        locale: ptBR
      });
    }
    return '';
  };

  return (
    <SimpleMenu
      isOpen={isOpen}
      openElement={
        <div className={'flex flex-col w-full'}>
          <TextField
            InputProps={{
              readOnly: true
            }}
            defaultValue={convertDate(date)}
            label={
              <span>
                {props.placeholder}
                {props.required ? <span className={'text-red'}> *</span> : ''}
              </span>
            }
            value={convertDate(date)}
          />
        </div>
      }
      setIsOpen={setIsOpen}
      side={'top'}
    >
      <DayPicker
        classNames={{
          button:
            theme === 'light'
              ? 'hover:bg-[#005da925] hover:cursor-pointer'
              : 'hover:bg-[#005da96c] hover:cursor-pointer'
        }}
        defaultMonth={date}
        footer={
          <div className={'mt-3'}>
            <Button
              onClick={(): void => {
                setDate(new Date());
                setIsOpen(false);
              }}
              variant={'contained'}
            >
              Hoje
            </Button>
          </div>
        }
        locale={ptBR}
        mode={'single'}
        modifiersStyles={{
          selected: {
            backgroundColor: colors.primary
          },
          today: {
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }
        }}
        onSelect={(selectedDate): void => {
          setDate(selectedDate);
          setIsOpen(false);
        }}
        required={props.required}
        selected={date}
        style={{
          color: theme === 'dark' ? 'white' : ''
        }}
      />
    </SimpleMenu>
  );
};
