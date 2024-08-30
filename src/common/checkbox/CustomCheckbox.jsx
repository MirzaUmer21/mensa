import { Checkbox, ConfigProvider } from 'antd';
import React from 'react';
import './customCheckbox.scss';
export const CustomCheckbox = ({ label }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#cc0022'
        }
      }}
    >
      <Checkbox className={'customCheckbox'}>{label}</Checkbox>
    </ConfigProvider>
  );
};
