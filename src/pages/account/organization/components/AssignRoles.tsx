import { Checkbox, Modal } from 'antd';
import React, { useState } from 'react';
import '../organization.less';
import { CloseCircleOutlined } from '@ant-design/icons';

interface MyComponentProps {
  visible: boolean;
  changeVisible: (visible: boolean) => void;
}

const AssignRoles: React.FC<MyComponentProps> = ({
  visible,
  changeVisible,
}: any) => {
  const [checkedList, setCheckedList] = useState<string[]>(['apple']);
  const options = [
    { label: '苹果', value: 'apple' },
    { label: '香蕉', value: 'banana' },
    { label: '橙子', value: 'orange' },
  ];

  const onChange = (checkedValues: any) => {
    console.log('checked = ', checkedValues);
    setCheckedList(checkedValues);
  };

  const handleOk = () => {
    changeVisible(false);
  };
  const handleCancel = () => {
    changeVisible(false);
  };
  return (
    <>
      <Modal
        title="分配角色 - 田丹丹"
        styles={{
          body: {
            height: '400px',
            maxHeight: '80vh',
            overflow: 'auto', // 内容超出时滚动
            padding: '24px', // 默认有内边距，可调整
          },
        }}
        width={900}
        open={visible}
        onOk={() => {
          handleOk();
        }}
        onCancel={() => {
          handleCancel();
        }}
      >
        <div>
          <p className="role-title">已选择角色</p>
          <div className="role-content">
            <div className="role-content-lists">
              <div className="role-content-list">
                <span>采购主管</span>
                <CloseCircleOutlined className="role-content-list-icon" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="role-title">可选角色</p>
          <div className="role-content">
            <Checkbox.Group onChange={onChange}>
              {options.map((option) => {
                return (
                  <div key={option.value} className="check-block-div">
                    <Checkbox value={option.value}>{option.label}</Checkbox>
                  </div>
                );
              })}
            </Checkbox.Group>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AssignRoles;
