import { CheckOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Checkbox, type CheckboxChangeEvent, Input } from 'antd';
import React, { useState } from 'react';
import './role.less';
import AssignRoles from './components/AssignRoles';

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
interface Auto {
  [key: string]: any;
}

const Role: React.FC = () => {
  const { Search } = Input;
  const [roleVisible, setRoleVisible] = useState(false); // 分配角色
  const [indeterminate, setIndeterminate] = useState(false);
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const defaultCheckedList = ['Apple', 'Orange'];
  const [checkAll, setCheckAll] = useState(false); // 全选
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const options = [{ label: '客户管理(客户管理)', value: 'apple' }];

  const changeRoleVisible = (result: boolean) => {
    setRoleVisible(result);
  };

  // 表单页面
  const onChangePageForm = (checkedValues: any) => {
    setCheckedList(checkedValues);
  };

  // 表单权限
  const onChangeRoleForm = (newCheckedList: string[]) => {
    setCheckedList(newCheckedList);
    const newCheckAll = newCheckedList.length === plainOptions.length;
    const newIndeterminate =
      !!newCheckedList.length && newCheckedList.length < plainOptions.length;

    setCheckAll(newCheckAll);
    setIndeterminate(newIndeterminate);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    const checked = e.target.checked;
    const newCheckedList = checked ? plainOptions : [];

    setCheckedList(newCheckedList);
    setCheckAll(checked);
    setIndeterminate(false); // 全选或全不选时，indeterminate 一定是 false
  };

  return (
    <PageContainer
      header={{
        title: false,
        breadcrumb: {},
      }}
    >
      <div className="background-white center-top">
        <div className="role-title">角色权限</div>
      </div>
      <ProCard split="vertical">
        <ProCard
          title="角色列表"
          colSpan="20%"
          headerBordered
          extra={<PlusOutlined className="role-content-list-icon" />}
        >
          <div>
            <Search
              placeholder="搜索角色名称"
              onSearch={(value) => console.log(value)}
            />
          </div>

          <div className="padding-top-20">
            <div className="role-list">
              <span className="role-list-span1">超级管理员</span>
              <span className="role-list-span2">系统</span>
            </div>
            <div className="role-list">
              <span className="role-list-span1">销售主管</span>
              <span className="role-list-span2">系统</span>
            </div>
            <div className="role-list">
              <span className="role-list-span1">生产员</span>
              <span className="role-list-span2">系统</span>
            </div>
          </div>
        </ProCard>
        <ProCard title="角色权限" headerBordered>
          <div className="role-details">
            <div className="role-details-left">
              <div className="role-details-top">应用列表</div>
              <div className="role-details-list">
                <span className="role-details-list-span1">CRM</span>
                <span className="role-details-list-span2">
                  <CheckOutlined className="blue" />
                </span>
              </div>
              <div className="role-details-list role-details-list-active">
                <span className="role-details-list-span1">进销存</span>
                <span className="role-details-list-span2">
                  <CheckOutlined className="blue" />
                </span>
              </div>
            </div>
            <div className="role-details-right">
              <div className="role-details-right-top">
                <div className="left">表单</div>
                <div className="middle">表单权限</div>
                <div className="right">数据权限</div>
              </div>
              <div className="role-details-right-content">
                <div className="left">
                  <Checkbox.Group onChange={onChangePageForm}>
                    {options.map((option) => {
                      return (
                        <div key={option.value} className="check-block-div">
                          <Checkbox value={option.value}>
                            {option.label}
                          </Checkbox>
                        </div>
                      );
                    })}
                  </Checkbox.Group>
                </div>
                <div className="middle">
                  <Checkbox
                    indeterminate={indeterminate}
                    onChange={onCheckAllChange}
                    checked={checkAll}
                  >
                    Check all
                  </Checkbox>
                  <br />
                  <Checkbox.Group
                    options={plainOptions}
                    value={checkedList}
                    onChange={onChangeRoleForm} // 👈 直接传函数，不要包一层无参箭头函数
                  />
                </div>
                <div className="right">数据权限</div>
              </div>
            </div>
          </div>
        </ProCard>
      </ProCard>
      {/* 分配角色 */}
      {roleVisible && (
        <AssignRoles
          visible={roleVisible}
          changeVisible={changeRoleVisible}
        ></AssignRoles>
      )}
    </PageContainer>
  );
};

export default Role;
