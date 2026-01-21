import { PageContainer } from '@ant-design/pro-components';
import React from 'react'; // , { useState }
import '../index.less';

const FormTemplate: React.FC = () => {
  return (
    <div className="form-manage">
      <div className="form-manage-nav">
        <div className="form-manage-nav-item">客户管理</div>
        <div className="form-manage-nav-item form-manage-nav-item-active">
          客户管理
        </div>
      </div>
      <div className="background-white form-manage-content">
        <div className="form-manage-title">表单模板</div>
      </div>
    </div>
  );
};

export default FormTemplate;
