import type { FC } from 'react';
import React, { memo } from 'react';
import FaceFrown from '@/components/icons/face-frown'
import { mergeProps } from '@/utils/mergeProps';

export interface EmptyProps {
  content?: React.ReactNode
  icon?: React.ReactNode
}

const defaultProps = {
  icon: <FaceFrown />,
  content: '您访问了一个空页面哦！'
}

const Empty: FC<EmptyProps> = memo((p) => {
  const { icon, content } = mergeProps(defaultProps, p)
  return (
    <div className="flex items-center flex-col justify-center mt-6 relative layout-container rounded-sm p-8">
      <span className="mb-4 text-8xl">{icon}</span>
      {content}
    </div>
  );
})

Empty.displayName = 'Empty'

export default Empty;
