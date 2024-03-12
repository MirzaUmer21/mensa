import React from 'react';
import './contact.scss';
import { Container } from '../common/container/Container';
import { Col, ConfigProvider, Form, Input, Row } from 'antd';
import { CustomInput } from '../common/input/CustomInput';
import { CustomSelect } from '../common/select/CustomSelect';
import { CustomTextArea } from '../common/textarea/CustomTextArea';
import { ArrowRightOutlined } from '@ant-design/icons';
import { CustomCheckbox } from '../common/checkbox/CustomCheckbox';
import { GradientButton } from '../common/button/GradientButton';
export const Contact = () => {
  const [form] = Form.useForm();
  return (
    <div className='contactWrapper'>
      <Container>
        <h1>CONTACT US </h1>

        <div className='contactForm'>
          <Form form={form} layout='vertical'>
            <Row gutter={[100, 30]}>
              <Col lg={12} sm={24} xs={24}>
                <CustomInput placeholder={'Name*'} />
              </Col>
              <Col lg={12} sm={24} xs={24}>
                <CustomInput placeholder={'Email*'} />
              </Col>
              <Col span={24}>
                <CustomSelect
                  placeholder={'What are you seeking for?'}
                  options={[
                    { label: 'Mobile Game Development', value: 'mobile' },
                    { label: 'Unity Game Development', value: 'unity' },
                    { label: 'Game Porting', value: 'porting' },
                    { label: '3D Games', value: '3d' }
                  ]}
                />
              </Col>
              <Col span={24}>
                <CustomSelect
                  placeholder={'How did you hear about mensa?'}
                  options={[
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'Linkedin', value: 'linkedin' },
                    { label: 'Twitter', value: 'twitter' },
                    { label: 'Instagram', value: 'instagram' }
                  ]}
                />
              </Col>
              <Col span={24}>
                <CustomTextArea placeholder={'Message'} />
              </Col>
              <Col span={24}>
                <CustomCheckbox label={'I agree to the Terms & Conditions*'} />
              </Col>
              <Col span={24}>
                <div className='submitWrap'>
                  <GradientButton text={'Send message'} />
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
};
