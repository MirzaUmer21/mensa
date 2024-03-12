import { ConfigProvider, Select } from 'antd';
import React from 'react';
import './customSelect.scss';
export const CustomSelect = ({ placeholder, options }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: 'rgba(0, 0, 0, 0.2)',
          colorBorder: 'transparent',
          colorText: '#fff',
          colorTextPlaceholder: '#fff',
          activeBorderColor: '#cd1d5b',
          hoverBorderColor: '#cd1d5b',
          colorPrimary: '#cd1d5b',
          colorPrimaryActive: '#cd1d5b',
          optionActiveBg: '#cd1d5b'
        }
      }}
    >
      <Select
        options={options}
        placeholder={placeholder}
        className='customSelect'
        style={{ height: '53px', width: '100%' }}
      />
    </ConfigProvider>
  );
};
