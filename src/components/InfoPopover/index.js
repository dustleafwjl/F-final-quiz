import React from 'react';
import { Tag, Popover } from 'antd';

const InfoPopover = (props) => {
  const { info } = props;
  const infoPanel = (
    <div>
      <Tag>{`name: ${info.name}`}</Tag>
      <Tag>{`email: ${info.email}`}</Tag>
      <Tag>{`office: ${info.office}`}</Tag>
      <Tag>{`github: ${info.github}`}</Tag>
      <Tag>{`zoomId: ${info.zoomId}`}</Tag>
      {info.group && <Tag>{`group: ${info.group}`}</Tag>}
    </div>
  );
  return (
    <Popover content={infoPanel}>
      <Tag className="student_tag">{`${info.index + 1} ${info.name}`}</Tag>
    </Popover>
  );
};

export default InfoPopover;
