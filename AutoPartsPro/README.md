# AutoParts Pro - 汽车零部件定制平台

基于 **Blazor Web App (.NET 10)** 的汽车零部件定制展示平台。

## 功能特性

- 🌓 **暗黑/明亮模式**：默认暗黑模式，支持一键切换
- 📱 **响应式布局**：桌面端/移动端自适应
- 🎨 **苹果风格设计**：简洁现代的 UI 设计语言
- 🔍 **分类搜索**：支持按名称搜索零部件类型
- 📦 **卡片网格**：正方形卡片展示，移动端每行2个
- 🏷️ **12大零部件分类**：发动机、变速箱、制动系统等
- 🎯 **36+精选商品**：涵盖各类定制零部件

## 项目结构

```
AutoPartsPro/
├── Components/
│   ├── App.razor              # 应用根组件
│   ├── Routes.razor           # 路由配置
│   ├── _Imports.razor         # 全局 using
│   ├── Layout/
│   │   └── MainLayout.razor   # 主布局
│   ├── Pages/
│   │   └── Home.razor         # 首页
│   └── Shared/
│       ├── TopNav.razor       # 顶部导航
│       ├── Sidebar.razor      # 左侧导航
│       ├── CardGrid.razor     # 卡片网格
│       ├── PartCard.razor     # 零部件卡片
│       └── CategoryIcon.razor # 分类图标
├── Data/
│   ├── CategoryData.cs        # 分类数据
│   └── PartData.cs            # 零部件数据
├── Models/
│   ├── Category.cs            # 分类模型
│   └── Part.cs                # 零部件模型
├── wwwroot/
│   └── css/
│       └── app.css            # 全局样式
├── Program.cs                 # 应用入口
├── AutoPartsPro.csproj        # 项目文件
└── appsettings.json           # 配置文件
```

## 运行要求

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0) 或更高版本

## 快速开始

```bash
# 克隆项目后进入目录
cd AutoPartsPro

# 还原依赖
dotnet restore

# 运行项目
dotnet run

# 访问 http://localhost:5000
```

## 布局说明

### 顶部导航 (TopNav)
- 左端：Logo + 品牌名
- 右端：主题切换按钮 + 用户菜单（登录/注册、个人资料、我的订单）

### 左侧导航 (Sidebar)
- 搜索框：支持按名称搜索分类
- 分类列表：12个零部件类型
- **桌面端**：显示 icon + 文字描述
- **移动端**：仅显示 icon，隐藏文字

### 右侧内容区 (CardGrid)
- 正方形卡片展示零部件
- 底部显示名称、描述、价格
- **移动端**：每行 2 个卡片
- **桌面端**：每行 3-5 个卡片（自适应）

## 技术栈

- **框架**：Blazor Web App (.NET 10)
- **渲染模式**：Interactive Server
- **样式**：纯 CSS（无第三方框架）
- **图标**：自定义 SVG（苹果风格）

## 零部件分类

| 分类 | 颜色 | 图标 |
|------|------|------|
| 发动机 | #FF6B6B | 活塞 |
| 变速箱 | #4ECDC4 | 齿轮 |
| 制动系统 | #FFE66D | 刹车盘 |
| 悬挂系统 | #A8E6CF | 弹簧 |
| 排气系统 | #FF8A5C | 排气管 |
| 电气系统 | #6C5CE7 | 闪电 |
| 车身外观 | #00B894 | 车身 |
| 内饰 | #E17055 | 座椅 |
| 轮毂轮胎 | #FDCB6E | 轮毂 |
| 冷却系统 | #74B9FF | 雪花 |
| 转向系统 | #A29BFE | 方向盘 |
| 进气系统 | #55EFC4 | 涡轮 |

## License

MIT
