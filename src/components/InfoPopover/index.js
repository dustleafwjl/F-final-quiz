import React from 'react';
import { Tag, Popover } from 'antd';

const InfoPopover = (props) => {
  const { info } = props;

  const infoPanel = (
    <div>
      {Object.entries(info)
        .filter((ele) => ele[0] !== 'index')
        .map((item, index) => {
          return <Tag key={`${item[1]}${index}`}>{`${item[0]}: ${item[1]}`}</Tag>;
        })}
    </div>
  );
  return (
    <Popover content={infoPanel}>
      <Tag className="student_tag">{`${info.index + 1} ${info.name}`}</Tag>
    </Popover>
  );
};

export default InfoPopover;
