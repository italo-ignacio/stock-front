import {
  Add,
  Close,
  ImageOutlined,
  KeyboardArrowLeft,
  KeyboardArrowRight
} from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import { colors } from 'presentation/style';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import type { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

const defaultValues = {
  firstIndex: 0,
  initial: 0,
  one: 1,
  verify: 2
};

interface SwipeableImagesProps {
  img: string[] | undefined;
  setImg?: Dispatch<SetStateAction<string[] | undefined>>;
  formImg?: File[] | undefined;
  setFormImg?: Dispatch<SetStateAction<File[] | undefined>>;
}

// eslint-disable-next-line max-lines-per-function
export const SwipeableImages: FC<SwipeableImagesProps> = ({ img, setImg, formImg, setFormImg }) => {
  const [activeStep, setActiveStep] = useState(defaultValues.initial);

  const handleStepChange = (step: number): void => {
    setActiveStep(step);
  };

  const handleNext = (): void => {
    if (img && img.length > defaultValues.one)
      setActiveStep((prevActiveStep) => {
        if (prevActiveStep < img.length - defaultValues.one)
          return prevActiveStep + defaultValues.one;
        return defaultValues.initial;
      });
  };

  const handleBack = (): void => {
    if (img && img.length > defaultValues.one)
      setActiveStep((prevActiveStep) => {
        if (prevActiveStep > defaultValues.initial) return prevActiveStep - defaultValues.one;
        return img.length - defaultValues.one;
      });
  };

  const handleAdd = (event: ChangeEvent<HTMLInputElement>): void => {
    if (setImg && setFormImg)
      if (event.target.files) {
        const imgToSet: string[] = img || [];
        const formImgToSet: File[] = [];

        Array.from(event.target.files).forEach((file: File): void => {
          imgToSet.push(URL.createObjectURL(file));
          formImgToSet.push(file);
        });

        if (formImg) setFormImg([...formImg, ...formImgToSet]);
        else setFormImg([...formImgToSet]);

        setImg(imgToSet);
        setActiveStep(imgToSet.length - defaultValues.one);
        Object.assign(event.target, { value: '' });
      }
  };

  const handleRemove = (): void => {
    if (setImg && setFormImg) {
      const newImages = img?.filter((image, index) => index !== activeStep);
      const newFormImages = formImg?.filter((image, index) => index !== activeStep);

      setActiveStep(
        activeStep > defaultValues.initial ? activeStep - defaultValues.one : activeStep
      );
      setImg(newImages);
      setFormImg(newFormImages);
    }
  };

  return (
    <div className={'flex flex-col gap-6'}>
      <div className={'flex justify-around ml-auto mr-auto gap-2'}>
        <div className={'flex justify-center items-center'}>
          <IconButton onClick={handleBack}>
            <KeyboardArrowLeft fontSize={'large'} />
          </IconButton>
        </div>

        <div className={'max-w-[400px]'}>
          {img && img?.length >= defaultValues.one ? (
            <SwipeableViews enableMouseEvents index={activeStep} onChangeIndex={handleStepChange}>
              {img?.map((step, index) => (
                <div key={step}>
                  {Math.abs(activeStep - index) <= defaultValues.verify ? (
                    <div
                      className={
                        'flex w-[400px] h-[250px] justify-center items-center ml-auto mr-auto'
                      }
                    >
                      <Box
                        className={'rounded-[12px] max-w-[390px] max-h-[250px]'}
                        component={'img'}
                        src={step}
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </SwipeableViews>
          ) : (
            <div
              className={
                'flex w-[400px] h-[250px] justify-center items-center ml-auto mr-auto bg-[#fbfbfb]'
              }
            >
              <ImageOutlined style={{ color: '#c4c4c4', height: '100px', width: '100px' }} />
            </div>
          )}
        </div>

        <div className={'flex justify-center items-center'}>
          <IconButton onClick={handleNext}>
            <KeyboardArrowRight fontSize={'large'} />
          </IconButton>
        </div>
      </div>

      {img && img?.length >= defaultValues.one ? (
        <div className={'flex justify-center gap-1'}>
          {img?.map((step, index) => (
            <input
              key={step}
              className={`rounded-full border-2 border-secondary p-0 m-0 w-[15px] h-[15px] cursor-pointer ${
                index === activeStep ? 'bg-primary' : null
              }`}
              onClick={(): void => {
                handleStepChange(index);
              }}
              type={'button'}
            />
          ))}
        </div>
      ) : (
        <div className={'flex justify-center gap-1'}>
          <input
            className={
              'rounded-full border-2 border-white p-0 m-0 w-[15px] h-[15px] cursor-default'
            }
            type={'button'}
          />
        </div>
      )}

      {setImg && setFormImg ? (
        <div className={'flex justify-center items-center gap-2 ml-6'}>
          <div>
            <Button
              onClick={(): void => document.getElementById('select-image')?.click()}
              startIcon={<Add className={'text-primary dark:text-white'} fontSize={'large'} />}
              sx={{
                border: `1px solid ${colors.primary}`
              }}
              variant={'text'}
            >
              Selecionar imagem
            </Button>

            <input
              accept={'image/*'}
              className={'hidden'}
              id={'select-image'}
              multiple
              onChange={handleAdd}
              type={'file'}
            />
          </div>

          <label className={'cursor-pointer flex items-center rounded-md'}>
            <IconButton onClick={handleRemove}>
              <Close className={' text-red '} fontSize={'large'} />
            </IconButton>
          </label>
        </div>
      ) : null}
    </div>
  );
};
