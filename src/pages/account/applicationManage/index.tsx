import { PageContainer } from '@ant-design/pro-components';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import React from 'react'; // , { useState }
import './index.less';
import {
  ClockCircleOutlined,
  PicLeftOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

const ApplicationManage: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 11111',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 22222',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 33333',
    },
  ];

  return (
    <PageContainer
      header={{
        title: false,
        breadcrumb: {},
      }}
    >
      <div className="background-white center-left">
        <div className="role-title">应用中心</div>
      </div>
      <div className="background-white tabs-back">
        <div className="tab">
          <span className="active-tab">已开启应用</span>
          <span className="inactive-tab">未开启应用</span>
        </div>
        <div className="card-container">
          {/* CRM 卡片 */}
          <div className="card">
            <div className="tag">系统</div>
            <div className="card-content">
              <PieChartOutlined className="tab-icon" />
              <div className="title">CRM</div>
            </div>
          </div>

          {/* 进销存 卡片 */}
          <div className="card">
            <div className="tag">限时免费</div>
            <div className="card-content">
              <ClockCircleOutlined className="tab-icon" />
              <div className="title">进销存</div>
            </div>
          </div>

          {/* 工单中心 卡片 */}
          <div className="card">
            <div className="tag">限时免费</div>
            <div className="card-content">
              <PicLeftOutlined className="tab-icon" />
              <div className="title">工单中心</div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ApplicationManage;
