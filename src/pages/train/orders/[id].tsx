import SeatNav from '@components/train/seatNavbar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Steps } from 'antd';
import ContentWrapper from './style';
import { useGlobalStore } from '@context/globalStore';
import SelectSeats from '@components/train/selectSeat';
import React, { useEffect } from 'react';
import { useTrainContext } from '@context/trainContext';
import PassengerInfo from '@components/train/passengerInfo';
import Payment from '@components/train/payment';
import { useTranslation } from 'next-i18next';
import AuthTokenStorageService from '@services/AuthTokenStorageService';
import AuthService from '@services/auth';
import isEmpty from '@utils/isEmpty';

const { Step } = Steps;

export default function Order() {
  const { current, setCurrent, setUser } = useGlobalStore();
  const { setLoadingOrder } = useTrainContext();
  const { t } = useTranslation(['train']);

  const steps = [
    {
      title: t('stepSelectSeat'),
      content: <SelectSeats />,
      button: 'Select Seat Button',
    },
    {
      title: t('stepPassengerInfo'),
      content: <PassengerInfo />,
      button: 'Passenger Button',
    },
    {
      title: t('stepPayment'),
      content: <Payment />,
      button: 'Payment Button',
    },
  ];

  useEffect(() => {
    setLoadingOrder(false);
    async function loadUserFromCookies() {
      const token =
        AuthTokenStorageService.getAccessToken() &&
        AuthTokenStorageService.getAccessToken() != 'false'
          ? AuthTokenStorageService.getAccessToken()
          : '';
      if (token) {
        try {
          const res = await AuthService.getCurrentUser(token);
          if (res && res?.status === 200) {
            if (!isEmpty(res?.result?.user)) {
              setUser(res?.result?.user);
            }
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
    loadUserFromCookies();
  }, []);

  const onChange = currentStep => {
    if (current === 1 && currentStep === 0) setCurrent(0);
  };

  return (
    <div className="relative bg-bg">
      <SeatNav />
      <div className="bg-steps w-full">
        <div className="max-w-7xl mx-auto">
          <ContentWrapper>
            <Steps
              type="navigation"
              current={current}
              onChange={onChange}
              size="small"
              responsive={true}
              className="site-navigation-steps max-w-2xl mr-auto hidden md:flex"
            >
              {steps.map(item => (
                <Step key={item.title} icon=" " title={item.title} />
              ))}
            </Steps>
          </ContentWrapper>
        </div>
      </div>
      {steps[current].content}
    </div>
  );
}
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'footer',
        'steps',
        'order',
        'train',
      ])),
    },
  };
}
