import NavData from '@data/navData.json';
import React, { FC, useState } from 'react';
import TravelList from '@data/getTravelList.json';
import Footer from '@components/common/Footer';
import Navbar from '@components/common/Navbar/NavbarProfile';

import { Table } from 'antd';

export default function myOrders() {
  const dataSource = [
    {
      key: '1',
      start_location: TravelList[0].start_location,
      end_location: TravelList[0].end_location,
      start_date: TravelList[0].start_date,
      end_date: TravelList[0].end_date,
      pass_num: 1,
      seat_num: '15',
      payment_total: TravelList[0].price,
    },
    {
      key: '2',
      start_location: TravelList[1].start_location,
      end_location: TravelList[1].end_location,
      start_date: TravelList[1].start_date,
      end_date: TravelList[1].end_date,
      pass_num: 1,
      seat_num: '25',
      payment_total: TravelList[1].price,
    },
  ];

  const columns = [
    {
      title: 'Эхлэх цэг',
      dataIndex: 'start_location',
      key: 'start_location',
    },
    {
      title: 'Очих цэг',
      dataIndex: 'end_location',
      key: 'end_location',
    },
    {
      title: 'Хөдлөх цаг',
      dataIndex: 'start_date',
      key: 'start_date',
    },
    {
      title: 'Хүрэх цаг',
      dataIndex: 'end_date',
      key: 'end_date',
    },
    {
      title: 'Зорчигчидийн тоо',
      dataIndex: 'pass_num',
      key: 'pass_num',
    },
    {
      title: 'Суудлын дугаар',
      dataIndex: 'seat_num',
      key: 'seat_num',
    },
    {
      title: 'Төлбөрийн нийт дүн',
      dataIndex: 'payment_total',
      key: 'payment_total',
    },
  ];
  return (
    <div className=" bg-bg">
      <Navbar navbarData={NavData} />

      <div className="max-w-7xl mx-auto text-cardDate my-5 w-full">
        <div>
          <Table
            className="text-cardDate text-sm font-bold"
            dataSource={dataSource}
            columns={columns}
          />
        </div>
      </div>
      <Footer navbarData={NavData} />
    </div>
  );
}