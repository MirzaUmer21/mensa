import { ConfigProvider, Input } from 'antd';
import React from 'react';
import './customInput.scss';
export const CustomInput = ({ placeholder }) => {
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
          fontSize: '16px',
          paddingInline: '20px',
          paddingInlineLG: '20px',
          paddingInlineSM: '20px'
        }
      }}
    >
      <Input placeholder={placeholder} className='customInput' />
    </ConfigProvider>
  );
};
