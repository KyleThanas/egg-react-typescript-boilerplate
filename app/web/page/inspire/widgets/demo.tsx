import React from 'react';
import { hot } from 'react-hot-loader/root'
import { IKeplerProps, IKeplerJson } from 'types/common';

const demoPage: React.FC<IKeplerProps> = props => {
  console.log('props: ', props);
  console.log('window: ', window);
  return (
    <div>
      <div>
        <h1>Welcome <a href="/">demoPage</a>!</h1>
        {/* <h1>props <a href="/">{props}</a>!</h1> */}
        <h1>Welcome <a href="/">demoPage</a>!</h1>
      </div>
    </div>
  );
};

export default EASY_ENV_IS_DEV ? hot(demoPage) : demoPage;
