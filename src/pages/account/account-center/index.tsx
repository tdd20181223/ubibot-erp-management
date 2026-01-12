import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button, Input, Select, Tree } from 'antd';
import React from 'react';
import './acount-center.less';

const AccountCenter: React.FC = () => {
  const { Search } = Input;
  const treeData = [
    {
      key: '1',
      title: '大连云动力科技有限公司',
      children: [
        {
          key: '1-1',
          title: '人事部',
        },
        {
          key: '1-2',
          title: '财务部',
        },
        {
          key: '1-3',
          title: '研发部',
        },
        {
          key: '1-4',
          title: '市场部',
        },
        {
          key: '1-5',
          title: '生产部',
        },
        {
          key: '1-6',
          title: '采购部',
        },
      ],
    },
  ];

  const options = [
    { value: 'jack', label: '超级管理员' },
    { value: 'lucy', label: '老板' },
    { value: 'tom', label: '销售主管' },
  ];

  return (
    <PageContainer
      header={{
        title: false,
        breadcrumb: {},
      }}
    >
      <div className="background-white center-top">
        <Search
          placeholder="请搜索员工"
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        />
        <Select
          showSearch
          placeholder="输入关键字搜索"
          className="center-role-select"
          optionFilterProp="children" // 搜索时匹配 label 内容（若用 options 则默认按 label 搜）
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={options}
        />
        <Button>同步组织架构</Button>
      </div>
      <ProCard split="vertical">
        <ProCard title="公司组织架构" colSpan="25%" headerBordered>
          <Search
            placeholder="搜索部门名称"
            onSearch={(value) => console.log(value)}
          />
          <div className="padding-top-20">
            <Tree treeData={treeData} defaultExpandAll blockNode />
          </div>
        </ProCard>
        <ProCard title="员工列表" headerBordered>
          <div style={{ height: 360 }}>右侧内容</div>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default AccountCenter;
