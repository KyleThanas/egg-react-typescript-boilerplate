import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root'
import DocumentTitle from 'react-document-title';
import store from './store/store';
import KeplerMapContainer from './widgets/keplerMap';
import DemoPage from './widgets/demo';
import { bootstrap } from '@framework/app';

const CompanyPage: React.FC = () => {
  const [pageTitle, setPageTitle] = useState<string>('');
  const [statisticsData] = useState<any>();

  console.log('useEffect: ', useEffect);
  console.log('store: ', store);
  useEffect(() => {
    const companyId = 'a123';
    setPageTitle(companyId);
  }, []);

  return (
    <Provider store={store}>
      <>
        <h1>Welcome <a href="/">easy-react-admin</a>!</h1>
        <h1>Welcome <a href="/">easy-react-admin</a>!</h1>
        <DemoPage />
        {/* <KeplerMapContainer statisticsData={statisticsData} /> */}
      </>
    </Provider>
  );
};

// export default CompanyPage;

// export default bootstrap(CompanyPage);

export default EASY_ENV_IS_DEV ? hot(CompanyPage) : CompanyPage;
