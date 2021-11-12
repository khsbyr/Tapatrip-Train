import React, { useState } from 'react';
import { Input, Select, Form } from 'antd';
import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import mngIcon from 'public/assets/flagMongolia.png';
import enIcon from 'public/assets/flagEng.png';
import Image from 'next/image';
import ContentWrapper from './style';
import s from '@components/common/InputPhoneNumber/PhoneNumber.module.scss';
import { useGlobalStore } from '@context/globalStore';
import { PATTERN_PHONE } from '@helpers/constantValidation';
const countries = [
  { name: '976', src: mngIcon, value: 0 },
  { name: '44', src: enIcon, value: 1 },
];

export default function InputPhoneNumber() {
  const { Option } = Select;
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isSelected, setIsSelected] = useState(false);
  const { customers, setCustomers } = useGlobalStore();

  const onClick = () => {
    setIsSelected(!isSelected);
  };

  function handleChange(value) {
    setSelectedCountry(value);
    if (customers) {
      customers.dialNumber = value.name;
      setCustomers(customers);
    } else {
      let customer = {
        companyRegister: '',
        isCompany: true,
        email: '',
        dialNumber: value.name,
        phoneNumber: '',
      };
      setCustomers(customer);
    }
  }

  const handleCustomerPhone = e => {
    if (customers) {
      customers.phoneNumber = e.target.value;
      setCustomers(customers);
    } else {
      let customer = {
        companyRegister: '',
        isCompany: true,
        email: '',
        dialNumber: '',
        phoneNumber: e.target.value,
      };
      setCustomers(customer);
    }
  };

  return (
    <ContentWrapper className="space-y-2">
      <label
        className="text-cardDate text-sm sm:text-base px-2 font-medium;"
        htmlFor="pNumber"
      >
        Утасны дугаар
      </label>
      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            pattern: PATTERN_PHONE,
            message: 'Утасны дугаар буруу байна',
          },
        ]}
      >
        <div className="flex rounded-lg bg-bg">
          <Listbox value={selectedCountry} onChange={handleChange}>
            <div className="flex items-center z-10 cursor-pointer relative pl-4 w-44 border-r-2">
              <Listbox.Button
                onClick={onClick}
                className="cursor-pointer flex items-center relative text-cardDate"
              >
                <Image
                  className="rounded flex-shrink-0"
                  src={selectedCountry.src}
                  width="32"
                  height="16"
                />
                <h1 className="pl-2 text-cardDate">
                  {'+' + selectedCountry.name}
                </h1>
                <ChevronDownIcon className="text-gray-400 h-5 w-5" />
              </Listbox.Button>
              <Listbox.Options className="mt-28 -ml-3.5 absolute w-28 overflow-auto text-base bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;">
                {countries.map((country, id) => (
                  <Listbox.Option
                    key={id}
                    className={({ active }) =>
                      `${active ? 'text-blue-400 ' : ''}relative py-2 pl-4`
                    }
                    value={country}
                  >
                    {({ selected }) => (
                      <span className="truncate">
                        <p className="flex items-center text-sm">
                          <Image
                            className="rounded mr-2"
                            src={country.src}
                            height="16"
                            width="32"
                          />
                          <h1 className="pl-2 text-cardDate">
                            {'+' + country.name}
                          </h1>
                        </p>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center ml-20 pl-2 text-blue-400;">
                            <CheckIcon
                              className="w-5 h-5 text-blue-400"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
          <Input
            className="z-0 rounded-lg bg-bg border-0 p-2 py-3 text-cardDate text-base;"
            onChange={handleCustomerPhone}
          />
        </div>
      </Form.Item>
    </ContentWrapper>
  );
}
