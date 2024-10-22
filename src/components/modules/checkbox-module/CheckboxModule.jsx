import React from 'react';
import { Checkbox } from 'antd';
// const onChange = (e) => {
//   console.log(`checked = ${e.target.checked}`);
// };
const CheckboxModule = ({checkboxItem, onChange}) => <Checkbox   onChange={onChange} className='text-xs'>{checkboxItem}</Checkbox>;
export default CheckboxModule;