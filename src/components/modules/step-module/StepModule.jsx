import React from 'react';
import { Steps } from 'antd';
const StepModule = ({stepLevel}) => (
  <Steps
    progressDot
    direction='horizontal'
    size="small"
    className='rotate-[270deg] origin-top-right'
    current={stepLevel}
    items={[
      {
        title: '',
      },
      {
        title: '',
      },
      {
        title: '',
      },
    ]}
  />
);
export default StepModule;