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
          activeBorderColor: '#cd1d5b',
          hoverBorderColor: '#cd1d5b',
          colorPrimary: '#cd1d5b',
          colorPrimaryActive: '#cd1d5b'
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
