import type { FC } from 'react';
import React, { memo } from 'react';

export interface AvatarProps {
  src: string
}

const Avatar: FC<AvatarProps> = memo(({ src }) => {
  return (
    <div className="avatar">
      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={src} alt="" />
      </div>
    </div>
  );
})

Avatar.displayName = 'Avatar'

export default Avatar;
