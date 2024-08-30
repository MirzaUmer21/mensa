import { ConfigProvider, Input } from 'antd';
import React from 'react';
import './customTextArea.scss';
export const CustomTextArea = ({ placeholder }) => {
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
          colorPrimaryActive: '#cc0022'
        }
      }}
    >
      <Input.TextArea
        placeholder={placeholder}
        rows={6}
        className='customTextArea'
        style={{ fontSize: '16px !important' }}
      />
    </ConfigProvider>
  );
};
