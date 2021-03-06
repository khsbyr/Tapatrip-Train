import React, { FC } from 'react';
import { Tabs } from 'antd';
import ContentWrapper from './style';
import style from './searchPanel.module.scss';
import SearchInput from '@components/bus/searchInput';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const { TabPane } = Tabs;

interface Props {
  navbarData?: any;
  startLocations?: any;
}

const SearchPanel: FC<Props> = ({ navbarData, startLocations = '' }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const activePath = getRoute(router);

  function getRoute(router: any) {
    switch (router.route) {
      case '/train':
        return '5';
      case '/tour':
        return '3';
      case '/':
        return '4';
      case 'https://tapatrip.com/':
        return '1';
      case 'https://tapatrip.com/':
        return '2';
      default:
        return '4';
    }
  }

  const handleTabChange = key => {
    const route = key == 4 ? '/' : key == 3 ? '/tour' : '';
    key == 2 || key == 1
      ? router.push('https://tapatrip.com/')
      : router.push(`/${route}`);
  };

  return (
    <ContentWrapper>
      <div className={style.searchBody}>
        <Tabs
          activeKey={activePath}
          centered
          tabBarGutter={160}
          onChange={handleTabChange}
          className="hidden lg:flex"
        >
          {navbarData.generalList.map(menu => (
            <TabPane
              tabKey={menu.id}
              tab={
                <div key={menu.id} className="tab-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 55 40"
                  >
                    <g>
                      {menu.path.map(value => (
                        <path key={value} d={value} />
                      ))}
                    </g>
                  </svg>
                  <span className="text">{t(`${menu.text}`)}</span>
                </div>
              }
              disabled={menu.id === 5 ? true : false}
              key={menu.id}
            />
          ))}
        </Tabs>
        <SearchInput startLocations={startLocations} />
      </div>
      <Tabs
        activeKey={activePath}
        centered
        onChange={handleTabChange}
        className="z-50 w-full fixed bottom-0 inset-x-0 bg-white text-sm text-secondary shadow-2xl h-20 lg:hidden"
      >
        {navbarData.generalList.map(menu => (
          <TabPane
            tabKey={menu.id}
            tab={
              <div
                key={menu.id}
                className="tab-title -mx-1.5 xs:mx-2 sm:px-4 md:px-7"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="-5 0 60 45"
                >
                  <g>
                    {menu.path.map(value => (
                      <path key={value} d={value} />
                    ))}
                  </g>
                </svg>
                <span className="text-xs sm:text-sm">{t(`${menu.text}`)}</span>
              </div>
            }
            disabled={menu.id === 5 ? true : false}
            key={menu.id}
          />
        ))}
      </Tabs>
    </ContentWrapper>
  );
};

export default SearchPanel;
