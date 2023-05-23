import React from 'react';
import Avatar from "@/components/ui/avatar";

type Props = {};

const PersonalInfo = () => {
  return (
    <div className="flex items-center justify-center mt-6 relative layout-container rounded-sm p-8">
      <div className="layout-background absolute" />
      <div className="flex flex-col items-center">
        <Avatar src="https://mika-resource.oss-cn-hangzhou.aliyuncs.com/blog/avatar.jpg"/>
        <div className="text-center mt-2">@Mika_wang</div>
        <h2 className="text-center text-white font-bold">Mika wang</h2>
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
