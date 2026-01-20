import { Input, Modal } from 'antd';
import React, { useState } from 'react';
import '../role.less';

interface MyComponentProps {
  visible: boolean;
  changeVisible: (visible: boolean) => void;
}

const AddRoles: React.FC<MyComponentProps> = ({
  visible,
  changeVisible,
}: any) => {
  const [value, setValue] = useState('');

  const change = (val: any) => {
    setValue(val);
  };

  const handleOk = () => {
    changeVisible(false);
  };
  const handleCancel = () => {
    changeVisible(false);
  };
  return (
    <Modal
      title="添加角色"
      styles={{
        body: {
          height: '200px',
          maxHeight: '80vh',
          overflow: 'auto', // 内容超出时滚动
          padding: '24px', // 默认有内边距，可调整
        },
      }}
      width={500}
      open={visible}
      onOk={() => {
        handleOk();
      }}
      onCancel={() => {
        handleCancel();
      }}
    >
      <div>
        <div className="add-role-title">
          <span className="red">* </span>
          <span>角色名称</span>
        </div>
        <Input placeholder="Basic usage" value={value} onChange={change} />
      </div>
    </Modal>
  );
};

export default AddRoles;
