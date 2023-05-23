import React from 'react';

type Props = {};

const PersonalInfo = () => {
  return (
    <div className="flex items-center justify-center mt-6 relative layout-container rounded-sm p-6">
      <div className="layout-background absolute" />
      <div>
        123
      </div>
    </div>
  )
}

/**
 * @Author: wangyi
 * @Date: 2023-05-09
 */
const Index: React.FC<Props> = () => {

  return (
    < >
      <PersonalInfo />
    </>
  );
}

export default Index;
