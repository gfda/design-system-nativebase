import React from 'react';
import {Select} from 'native-base';

export default function CustomSelect(props) {
  return(
    <Select
      minWidth={185}
      selectedValue={props.selectedValue}
      placeholder={props.placeholder}
      onValueChange={props.onValueChange}
    >
      {
        props.arrayValeus.map(value => {
          return <Select.Item key={value} value={value} label={value} />
          }
        )
      }
    </Select>
  )
}