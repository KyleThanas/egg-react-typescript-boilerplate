import React from 'react';
import { hot } from 'react-hot-loader/root'

const CompanyPage: React.FC = () => {
  return (
    <div>
      <div>
        <h1>Welcome <a href="/">easy-react-admin</a>!</h1>
        <h1>Welcome <a href="/">easy-react-admin</a>!</h1>
      </div>
    </div>
  );
};

export default EASY_ENV_IS_DEV ? hot(CompanyPage) : CompanyPage;
