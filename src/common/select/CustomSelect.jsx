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
          activeBorderColor: '#cc0022',
          hoverBorderColor: '#cc0022',
          colorPrimary: '#cc0022',
          colorPrimaryActive: '#cc0022',
          optionActiveBg: '#cc0022'
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
