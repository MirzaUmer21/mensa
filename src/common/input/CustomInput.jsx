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
          activeBorderColor: '#cc0022',
          hoverBorderColor: '#cc0022',
          colorPrimary: '#cc0022',
          colorPrimaryActive: '#cc0022',
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
