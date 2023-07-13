import type { FC } from 'react';
import React, { memo } from 'react';
import classnames from 'classnames';

export interface AvatarProps {
  src: string
  className?: string
}

const Avatar: FC<AvatarProps> = memo(({ src, className }) => {
  return (
    <div className={classnames('avatar', className)}>
      <div className="w-12 rounded-full ring-primary ring-offset-base-100 ring-offset-2">
        <img src={src} alt="" />
      </div>
    </div>
  );
})

Avatar.displayName = 'Avatar'

export default Avatar;
