import { PageContainer } from '@ant-design/pro-components';
import React from 'react'; // , { useState }
import '../index.less';

const FormTemplate: React.FC = () => {
  return (
    <PageContainer
      header={{
        title: false,
        breadcrumb: {},
      }}
    >
      <div className="background-white center-left">
        <div className="role-title">表单模板</div>
      </div>
    </PageContainer>
  );
};

export default FormTemplate;
