import { PageContainer } from '@ant-design/pro-components';
import { Card, theme } from 'antd';
import React from 'react';

const AccountCenter: React.FC = () => {
  return (
    <PageContainer
      header={{
        title: '页面标题',
        breadcrumb: {},
      }}
    >
      <Card
        style={{
          borderRadius: 8,
        }}
      >
        <div className="background-white">个人中心页面</div>
      </Card>
    </PageContainer>
  );
};

export default AccountCenter;
