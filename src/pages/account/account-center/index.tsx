import {
  PageContainer,
  ProCard,
  type ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { Button, DatePicker, Input, Select, Space, Table, Tree } from 'antd';
import React from 'react';
import './acount-center.less';

type TableListItem = {
  key: number;
  name: string;
  progress: number;
  containers: number;
  callNumber: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};

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

  const { RangePicker } = DatePicker;

  const valueEnum = {
    0: 'close',
    1: 'running',
    2: 'online',
    3: 'error',
  };

  const ProcessMap = {
    close: 'normal',
    running: 'active',
    online: 'success',
    error: 'exception',
  } as const;

  const tableListDataSource: TableListItem[] = [];

  const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

  for (let i = 0; i < 50; i += 1) {
    tableListDataSource.push({
      key: i,
      name: 'AppName-' + i,
      containers: Math.floor(Math.random() * 20),
      callNumber: Math.floor(Math.random() * 2000),
      progress: Math.ceil(Math.random() * 100) + 1,
      creator: creators[Math.floor(Math.random() * creators.length)],
      status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
      createdAt: Date.now() - Math.floor(Math.random() * 100000),
      memo:
        i % 2 === 1
          ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
          : '简短备注文案',
    });
  }

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '姓名',
      width: 120,
      dataIndex: 'name',
      fixed: 'left',
      render: (_: any) => <a>{_}</a>,
    },
    {
      title: '所属部门',
      width: 120,
      dataIndex: 'containers',
      align: 'right',
      search: false,
      sorter: (a, b) => a.containers - b.containers,
    },
    {
      title: '主部门',
      width: 120,
      align: 'right',
      dataIndex: 'callNumber',
    },
    {
      title: '职位',
      dataIndex: 'progress',
      valueType: (item: any) => ({
        type: 'progress',
        status: ProcessMap[item.status as 'close'],
      }),
    },
    {
      title: '角色',
      width: 120,
      dataIndex: 'creator',
      valueType: 'select',
      valueEnum: {
        all: { text: '全部' },
        付小小: { text: '付小小' },
        曲丽丽: { text: '曲丽丽' },
        林东东: { text: '林东东' },
        陈帅帅: { text: '陈帅帅' },
        兼某某: { text: '兼某某' },
      },
    },
    {
      title: '角色权限',
      width: 140,
      key: 'since',
      dataIndex: 'createdAt',
      valueType: 'date',
      sorter: (a, b) => a.createdAt - b.createdAt,
      renderFormItem: () => {
        return <RangePicker />;
      },
    },
    {
      title: '员工编号',
      dataIndex: 'memo',
      ellipsis: true,
      copyable: true,
      search: false,
    },
    {
      title: '操作',
      width: 80,
      key: 'option',
      valueType: 'option',
      fixed: 'right',
      render: () => [<a key="link">分配角色</a>],
    },
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
          {/* <div style={{ height: 360 }}>右侧内容</div> */}
          <ProTable<TableListItem>
            columns={columns}
            rowSelection={{
              // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
              // 注释该行则默认不显示下拉选项
              selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
              defaultSelectedRowKeys: [1],
            }}
            tableAlertRender={({
              selectedRowKeys,
              selectedRows,
              onCleanSelected,
            }) => {
              console.log(selectedRowKeys, selectedRows);
              return (
                <Space size={24}>
                  <span>
                    已选 {selectedRowKeys.length} 项
                    <a
                      style={{ marginInlineStart: 8 }}
                      onClick={onCleanSelected}
                    >
                      取消选择
                    </a>
                  </span>
                  <span>{`容器数量: ${selectedRows.reduce(
                    (pre, item) => pre + item.containers,
                    0,
                  )} 个`}</span>
                  <span>{`调用量: ${selectedRows.reduce(
                    (pre, item) => pre + item.callNumber,
                    0,
                  )} 次`}</span>
                </Space>
              );
            }}
            tableAlertOptionRender={() => {
              return (
                <Space size={16}>
                  <a>批量删除</a>
                  <a>导出数据</a>
                </Space>
              );
            }}
            dataSource={tableListDataSource}
            scroll={{ x: '100%' }}
            options={false}
            search={false}
            pagination={{
              pageSize: 5,
            }}
            rowKey="key"
            headerTitle="批量操作"
            toolBarRender={() => [<Button key="show">查看日志</Button>]}
          />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default AccountCenter;
