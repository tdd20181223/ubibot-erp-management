import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button, Input, Select, Table, Tree } from 'antd';
import React from 'react';
import './acount-center.less';
import type { ColumnType } from 'antd/es/table';

// 定义数据类型
interface Employee {
  key: string;
  name: string;
  department: string;
  mainDepartment: string;
  position: string;
  role: string;
  roleGroup: string;
  employeeID: string;
}

const AccountCenter: React.FC = () => {
  const { Search } = Input;
  // 组织架构数据
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

  // 角色列表数据
  const options = [
    { value: 'jack', label: '超级管理员' },
    { value: 'lucy', label: '老板' },
    { value: 'tom', label: '销售主管' },
  ];

  // 员工列表
  const columns: ColumnType<Employee>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 150,
      key: 'name',
      fixed: 'left',
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: '所属部门', //
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: '主部门',
      dataIndex: 'mainDepartment',
      key: 'mainDepartment',
    },
    {
      title: '职位',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '角色权限组',
      dataIndex: 'roleGroup',
      key: 'roleGroup',
    },
    {
      title: '员工编号',
      dataIndex: 'employeeID',
      key: 'employeeID',
    },
    {
      title: '操作',
      width: 150,
      key: 'action',
      fixed: 'right',
      render: () => (
        <span>
          <a>分配角色</a>
        </span>
      ),
    },
  ];
  // department  mainDepartment  position  role  roleGroup employeeID
  const data = [
    {
      key: '1',
      name: 'John Brown',
      department: '大连云动力科技有限公司,研发部',
      mainDepartment: '研发部',
      position: '软件工程师',
      role: '超级管理员',
      roleGroup: '--',
      employeeID: '--',
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
    },
    getCheckboxProps: (record: { name: string }) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

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
          placeholder="筛选角色"
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
        <ProCard title="公司组织架构" colSpan="20%" headerBordered>
          <Search
            placeholder="搜索部门名称"
            onSearch={(value) => console.log(value)}
          />
          <div className="padding-top-20">
            <Tree treeData={treeData} defaultExpandAll blockNode />
          </div>
        </ProCard>
        <ProCard title="员工列表" headerBordered>
          <div className="employee-list">
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              tableLayout="fixed"
              scroll={{ x: 1100, y: 300 }}
            />
          </div>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default AccountCenter;
