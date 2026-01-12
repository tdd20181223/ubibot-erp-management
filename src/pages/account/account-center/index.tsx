import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Input } from 'antd';
import React from 'react';

const AccountCenter: React.FC = () => {
  const { Search } = Input;

  return (
    <PageContainer
      header={{
        title: false,
        breadcrumb: {},
      }}
    >
      <ProCard split="vertical">
        <ProCard title="公司组织架构" colSpan="25%" headerBordered>
          <Search
            placeholder="input search text"
            onSearch={(value) => console.log(value)}
          />
        </ProCard>
        <ProCard title="员工列表" headerBordered>
          <div style={{ height: 360 }}>右侧内容</div>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default AccountCenter;
