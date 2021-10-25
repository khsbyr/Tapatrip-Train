import Navbar3 from '@components/Navbar/Navbar3';
import NavData from '@data/navData.json';
import { Steps } from 'antd';
import React, { FC } from 'react';
import travelData from '@data/getTravelData.json';
import PassengerInfo from '@components/PassengerInfo';
import Payments from '@components/Payments';
import SelectSeats from '@components/SelectSeats';
import Footer from '@components/Footer/Footer';
import ContentWrapper from './style';
import Card2 from '@components/Card/Card2';
import TravelList from '@data/getTravelList[1].json';

export const getStaticProps = async () => {
  const res = travelData;

  return {
    props: { travelData: res },
  };
};

const { Step } = Steps;

const steps = [
  {
    title: 'Суудал сонгох',
    content: <SelectSeats travelData={travelData} />,
    button: 'Зорчигчийн мэдээлэл оруулах',
  },
  {
    title: 'Зорчигчийн мэдээлэл',
    content: <PassengerInfo />,
    button: 'Төлбөр төлөх',
  },
  {
    title: 'Төлбөр төлөх',
    content: <Payments />,
    button: 'Дуусгах',
  },
];

const Payment: FC = () => {
  const [current, setCurrent] = React.useState(0);

  const onChange = current => {
    console.log('onChange:', current);
    setCurrent(current);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  return (
    <ContentWrapper>
      <div className="relative bg-bg">
        <Navbar3 navbarData={NavData} />

        <Steps
          type="navigation"
          current={current}
          onChange={onChange}
          size="small"
          // className="bg-steps p-4"
          responsive={true}
          className="site-navigation-steps bg-steps"
        >
          {steps.map(item => (
            <Step
              key={item.title}
              icon=" "
              title={item.title}
              className="text-xs text-white"
            />
          ))}
        </Steps>

        <div className="max-w-7xl mx-auto my-5 flex flex-wrap">
          <div className="w-full md:w-3/5 lg:w-3/5">
            {steps[current].content}
          </div>
          <div className="w-full md:w-2/5 lg:w-2/5">
            {current === 0 && (
              <div className="px-2">
                {/* // -------------------Components_0---------------------------// */}
                {TravelList.map(z => (
                  <Card2
                    description={z.description}
                    start_date={z.start_date}
                    end_date={z.end_date}
                    date={z.date}
                    price={z.price}
                    passengers={z.passengers}
                    direction_name={z.direction_name}
                    start_location={z.start_location}
                    end_location={z.end_location}
                    stops={z.stops}
                    key={z.id}
                  />
                ))}
                <button
                  className="w-full bg-red-500 shadow-md rounded-md font-semibold py-2 mt-2 hover:bg-red-700 text-white"
                  onClick={() => next()}
                >
                  {steps[current].button}
                </button>
              </div>
            )}
            {current === 1 && (
              <div className="p-2">
                {/* // -------------------Components_1---------------------------// */}
                {TravelList.map(z => (
                  <Card2
                    description={z.description}
                    start_date={z.start_date}
                    end_date={z.end_date}
                    date={z.date}
                    price={z.price}
                    passengers={z.passengers}
                    direction_name={z.direction_name}
                    start_location={z.start_location}
                    end_location={z.end_location}
                    stops={z.stops}
                    key={z.id}
                  />
                ))}
                <button
                  className="w-full bg-red-500 shadow-md rounded-md font-semibold py-2 mt-2 hover:bg-red-700 text-white"
                  onClick={() => next()}
                >
                  {steps[current].button}
                </button>
              </div>
            )}
            {current === steps.length - 1 && (
              <div className="p-2">
                {/* // -------------------Components_2---------------------------// */}
                {TravelList.map(z => (
                  <Card2
                    description={z.description}
                    start_date={z.start_date}
                    end_date={z.end_date}
                    date={z.date}
                    price={z.price}
                    passengers={z.passengers}
                    direction_name={z.direction_name}
                    start_location={z.start_location}
                    end_location={z.end_location}
                    stops={z.stops}
                    key={z.id}
                  />
                ))}
                <button className="w-full bg-red-500 shadow-md rounded-md font-semibold py-2 mt-2 hover:bg-red-700 text-white">
                  {steps[current].button}
                </button>
              </div>
            )}
          </div>
        </div>
        <Footer navbarData={NavData} />
      </div>
    </ContentWrapper>
  );
};

export default Payment;