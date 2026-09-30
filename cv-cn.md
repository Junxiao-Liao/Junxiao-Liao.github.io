# 廖俊霄

**邮箱：** junxiao.liao@outlook.com；[**GitHub**/Junxiao-Liao](https://github.com/Junxiao-Liao)；[**LinkedIn**/in/junxiao-liao](https://www.linkedin.com/in/junxiao-liao/)

## 教育经历

### 硕士学位 | 新西兰奥克兰：[**奥克兰大学**](https://www.auckland.ac.nz) *2025年3月 - 2026年3月*

**专业：信息技术（理学院）**

### 工学学士学位 | 中国济南：[**山东大学**](https://www.sdu.edu.cn/) *2020年9月 - 2024年6月*

**专业：数字媒体技术（软件学院）**，计算机科学基础与计算机图形学、机器学习、图像处理等进阶课程。

## 工作经历

### 初级软件工程师 | 奥克兰，新西兰: [**Xtracta**](https://xtracta.com/) *2025年11月 至今*
*由软件工程实习生晋升（2025年11月 - 2026年8月）*

**文档处理**：企业平台（**NestJS**、**React**、**PHP/CodeIgniter**、**GraphQL**、**gRPC**）
1. 主导管理后台从遗留 PHP（CodeIgniter、Smarty）向 **React** 前端、**NestJS GraphQL** 后端与 **gRPC** 服务的迁移，覆盖用户、用户组、公告与历史记录等管理功能。
1. 修复安全问题，包括未鉴权的 **GraphQL** 解析器与明文凭证暴露。
1. 开发新功能：基于 **Redis** 的 **NestJS** 缓存模块、文档处理页面与配置项新功能、**Apache** 服务监控页面。

**采购分析**：供应商数据采集（**Python**、**FastAPI**、**Prefect**、**TimescaleDB**、**Polars**）
1. 在 **Prefect** 中构建**浏览器自动化**数据采集 Agent：**Lightpanda** 无头引擎为主、**Patchright**（隐匿版 Playwright）兜底，按域名路由兼容策略，并以 LLM 做数据源质量检查。
1. 基于 **TimescaleDB** 超表与 **Polars** 引擎重构价格统计流水线，将核心查询从 4 分钟以上优化至约 1 秒，并以差异测试验证正确性。
1. 验证替代商品匹配方案：**DINOv3** 图像嵌入与文本嵌入，结合 **LLM 裁判**对候选商品对分类。
1. 在教师模型标注数据上微调 **Kev-4B**（Qwen3.5 + **LoRA** 指针头）决策模型。

### 汽车创新实习生 | 中国北京：[**大众汽车集团，Cariad China**](https://volkswagengroupchina.com.cn/en/brands/cariad) *2023年10月 - 2024年6月（8个月）*

1. **后端，DevOps**：使用 **python-can** 与 **FastAPI** 开发集中式 **RESTful API 服务**，标准化 **CAN 信号**读写流程，替代各团队冗余硬件部署，实现车辆总线数据统一访问。
1. **嵌入式**：为运行 **嵌入式 Linux** 的 **语音控制系统**（ARM Cortex-A53 开发板）开发组件，集成 **麦克风阵列** 与 **CAN 总线通信**。

### 全栈开发实习生 | 中国济南：[**普联软件股份有限公司**](https://www.pansoft.com) *2023年7月 - 2023年10月（3个月）*

1. **机器学习**：将 ERP 表单分类模型由 5 类扩展至 15 类；针对严重类别不平衡（少数类别小于 100 样本，其他达数千）使用 **SMOTE** 过采样，将召回率由 20% 提升至 80%。
1. **后端，架构，性能**：通过性能分析与追踪定位报表生成瓶颈；设计 **SQL 与 ORM 优化** 与 **连接池** 方案。

## 项目经历

| 项目 | 链接 | 简介 | 技术栈 |
|---|---|---|---|
| 本科毕业设计 | [GitHub](https://github.com/Junxiao-Liao/Doc-Ocr-Categorizer) | 文档OCR分类: RapidOCR + 语义嵌入 + pgvector推荐 | React, FastAPI, PostgreSQL, MinIO, RapidOCR, pgvector |
| SimpleBackendFramework | [GitHub](https://github.com/Junxiao-Liao/SimpleBackendFramework) | 基于原生TCP的后端框架 | C#, .NET 8 |
| r-listener | [GitHub](https://github.com/Junxiao-Liao/r-listener) | 全栈无服务器音乐流媒体（Cloudflare Workers） | Hono v4, Drizzle ORM, D1, R2, Svelte 5, TanStack Query |
| Qt-Wuziqi | [GitHub](https://github.com/Junxiao-Liao/Qt-Wuziqi) | 五子棋（19x19）启发式AI | C++, Qt 6 |
| Merge-Images-Web | [GitHub](https://github.com/Junxiao-Liao/Merge-Images-Web) | 客户端图片拼接 | Rust, WASM, SvelteKit 5, Tailwind v4 |

## 技能

- **编程语言**：Python、TypeScript、PHP；C#；C++、Rust
- **后端**：REST、GraphQL、gRPC；NestJS、CodeIgniter、FastAPI、ASP.NET；TypeORM、SQLAlchemy、Prisma
- **前端**：React、Redux、Apollo Client；Svelte、MUI、Tailwind
- **数据库与数据处理**：PostgreSQL、MySQL、SQLite；MongoDB、Redis；MinIO
- **AI / 机器学习**：PyTorch、Transformers、scikit-learn；LLM 微调（LoRA）；向量数据库；Polars
- **DevOps 与云**：Git、Docker、CI/CD（GitHub Actions、Bitbucket Pipelines）；Cloudflare FaaS；Jira
- **系统与嵌入式**：Linux（POSIX、Bash、systemd）；CAN 总线
