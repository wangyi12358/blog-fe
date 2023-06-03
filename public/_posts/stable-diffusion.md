## Stable Diffusion 安装、使用等。（持续编写中）
接下来我会带大家从0-1搭建Sd  
我的电脑环境是 Mac Book Pro(Apple M1 Pro)

## 安装环境
首先我们进入到 [sd](https://github.com/AUTOMATIC1111/stable-diffusion-webui) 项目地址.  
环境安装，这里根据自己系统进行安装Python、git等.  
再Clone项目

![alt Install](https://mika-resource.oss-cn-hangzhou.aliyuncs.com/blog/stable-diffusion/install.jpg)

## 项目启动
在启动项目之前，建议大家开启 "科学上网" 模式（安装模型）。  
进入到stable-diffusion-webui目录，执行下面的命令。  
```bash
# MacOS or Linux
$ cd stable-diffusion-webui
$ bash webui.sh
# windows 点击webui.bat
```
**注意**：在启动项目的时候，Sd会初始化一个venv虚拟环境，为了防止污染本地Python环境.

遇到找不到指定版本的包，直接修改`requirements_versions.txt`文件。  
如下面把`requirements_versions.txt`中的`gradio`改为`3.30.0`版本即可。

![alt 1131685781520](https://mika-resource.oss-cn-hangzhou.aliyuncs.com/blog/stable-diffusion/1131685781520_.pic.jpg)

如果遇到让你升级pip版本的时候。  
首先激活虚拟环境，然后执行pip升级。
```bash
# MacOS or Linux
$ source ./venv/bin/activate
$ pip install --upgrade pip
```
![alt 1141685781554](https://mika-resource.oss-cn-hangzhou.aliyuncs.com/blog/stable-diffusion/1141685781554_.pic.jpg)

当大家看见进度条的时候，说明正在安装模型了。  
当看见 `Running on local URL:  http://127.0.0.1:7860` 的时候，恭喜你启动成功了。

