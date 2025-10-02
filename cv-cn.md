# 廖俊霄 Junxiao LIAO

**邮箱：** junxiao.liao@outlook.com；[**GitHub**/Junxiao-Liao](https://github.com/Junxiao-Liao)；[**LinkedIn**/in/junxiao-liao-506426359](https://www.linkedin.com/in/junxiao-liao-506426359/)

## 教育经历

### 硕士学位 [**@新西兰奥克兰：奥克兰大学**](https://www.auckland.ac.nz) *2025年3月 - 2026年3月（预计）*

**专业：信息技术，理学院** - [并行与分布式计算](https://courseoutline.auckland.ac.nz/dco/course/COMPSCI/711/1253)，[安全](https://courseoutline.auckland.ac.nz/dco/course/COMPSCI/702/1253)，[海量数据算法](https://courseoutline.auckland.ac.nz/dco/course/COMPSCI/753/1255)，[高级计算机图形学](https://courseoutline.auckland.ac.nz/dco/course/COMPSCI/715/1255)

### 工学学士学位 [**@济南：山东大学**](https://www.sdu.edu.cn/) *2020年9月 - 2024年6月*

**专业：数字媒体技术，软件学院** – 计算机科学基础（数学、数据结构、计算机组成原理、操作系统、计算机网络、数据库）和进阶学习（如计算机图形学、数字图像处理、机器学习和深度学习）。

## 实习经历

### 汽车创新实习生 [**@北京：大众汽车集团，Cariad China**](https://volkswagengroupchina.com.cn/en/brands/cariad) *2023年10月 - 2024年6月（8个月）*

1. **后端**：使用 **python-can** 和 **FastAPI** 开发了统一的 **RESTful API 服务**，标准化了 **CAN 信号**的读写操作，替代了多个开发团队的冗余硬件部署，实现了车辆总线数据的集中访问。
1. **嵌入式**：参与开发运行嵌入式 Linux 的**语音控制系统**，该系统基于 ARM 架构的单板计算机（Cortex-A53/M4F 双核），集成**麦克风阵列硬件**与 **CAN 总线通信**。

### 全栈开发实习生 [**@济南：普联软件有限公司**](https://www.pansoft.com) *2023年7月 - 2023年10月（3个月）*

1. **机器学习**：将 ERP 表单分类模型从 5 类扩展至 15 类。针对严重的类别不平衡问题（部分类别样本 <100 个，而其他类别有数千个），使用 **SMOTE** 过采样方法，将召回率从 20% 提升至 80%。
1. **后端**、**架构**、**性能**：参与优化 ERP 系统中生成报表缓慢的问题，包括问题诊断（性能分析、跟踪）和方案设计（SQL 与 ORM 优化、连接池）。

## 项目经历

### [本科毕业设计项目](https://github.com/Junxiao-Liao/Doc-Ocr-Categorizer)
题目：*自动文档识别与分类系统的设计与实现*
1. **全栈开发**：使用 **FastAPI** 后端和 **PostgreSQL**、**React.js** 前端配合 **Antd**，以及 **MinIO** 对象存储构建了一个 **Web 应用**。
1. **计算机视觉**、**NLP**：集成 **RapidOCR** 进行文档文本提取，并使用 **multilingual-e5-large-instruct** 模型进行文本嵌入。
1. **推荐系统**：利用 **pgvector** 扩展实现基于向量的文档分类。

### [基于 Electron 的编程挑战平台](https://courseoutline.auckland.ac.nz/dco/course/COMPSCI/732/1253)
1. **桌面端**、**全栈**：使用 **Electron.js** 开发了一款用于编程挑战的桌面应用，前端基于 **React.js**，后端基于 **Node.js**，采用 **TSOA**、**Express.js**、**Prisma ORM** 和 **SQLite** 构建。  
1. **评测引擎**：构建了一个可在本地环境中支持任意语言的代码执行引擎，用户可运行并提交解答以通过测试用例。

### [分布式系统作业](https://courseoutline.auckland.ac.nz/dco/course/COMPSCI/711/1253)
1. **全序多播中间件**：使用 **C#** 实现了分布式中间件，采用基于时间戳的提议/同意协议，具有线程安全的消息队列和 TCP 套接字通信，确保所有实例以相同顺序传递消息。
1. **从零构建 HTTP 服务器**：使用原始套接字构建了完整的 **C# 后端框架**，实现了 HTTP 请求解析、用于并发连接处理的自定义线程池以及 RESTful API 路由，无需外部库。

## 技能

- **机器学习**：scikit-learn、PyTorch、Transformers
- **DevOps**：Git、容器、GitHub Actions
- **操作系统**：POSIX、Bash、systemd
- **中间件**：NGINX、MQ、RPC
- **数据库**：SQL、NoSQL、MinIO
- **编程语言**
    1. **托管语言**：C#、Go
    1. **解释型语言**：Python、JavaScript
    1. **函数式语言**：F#、Scala、Racket、Elixir
    1. **底层语言**：C++、Rust
