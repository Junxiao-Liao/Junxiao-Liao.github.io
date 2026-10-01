# 廖俊霄

**邮箱：** junxiao.liao@outlook.com；[**GitHub**/Junxiao-Liao](https://github.com/Junxiao-Liao)；[**LinkedIn**/in/junxiao-liao](https://www.linkedin.com/in/junxiao-liao/)

## 教育经历

### 硕士学位 | 新西兰奥克兰：[**奥克兰大学**](https://www.auckland.ac.nz) *2025年3月 - 2026年3月*

**专业：信息技术（理学院）**

### 工学学士学位 | 中国济南：[**山东大学**](https://www.sdu.edu.cn/) *2020年9月 - 2024年6月*

**专业：数字媒体技术（软件学院）**，计算机科学基础与计算机图形学、机器学习、图像处理等进阶课程。

## 工作经历

### [**Xtracta**](https://xtracta.com/) | 奥克兰，新西兰 *2025年11月 至今*

**初级软件工程师** *2026年8月 至今*

**软件工程实习生** *2025年11月 - 2026年8月*

**文档处理**：企业平台（**NestJS**、**React**、**PHP/CodeIgniter**、**GraphQL**、**gRPC**）
1. 主导管理后台从遗留 PHP（CodeIgniter、Smarty）向 **React** 前端、**NestJS GraphQL** 后端与 **gRPC** 服务的迁移，覆盖用户、用户组、公告与历史记录等管理功能。
1. 强化 **GraphQL** 鉴权与凭证处理：增加解析器访问控制，并对敏感配置值做脱敏。
1. 开发新功能：基于 **Redis** 的 **NestJS** 缓存模块、文档处理页面与配置项新功能、**Apache** 服务监控页面。

**采购分析**：供应商数据采集（**Python**、**FastAPI**、**Prefect**、**TimescaleDB**、**Polars**）
1. 在 **Prefect** 中构建**浏览器自动化**数据采集 Agent：**Lightpanda** 无头引擎为主、**Patchright**（隐匿版 Playwright）兜底，按域名路由兼容策略，并以 LLM 做数据源质量检查。
1. 基于 **TimescaleDB** 超表与 **Polars** 引擎重构价格统计流水线，将核心查询从 4 分钟以上优化至约 1 秒，并以差异测试验证正确性。
1. 验证替代商品匹配方案：**DINOv3** 图像嵌入与文本嵌入，结合 **LLM 裁判**对候选商品对分类。
1. 基于已发布检查点，在合成数据上增量微调 **Kev-4B**（Qwen3.5-4B-Base + **LoRA** 适配器 + 指针头）决策模型。

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
| SimpleBackendFramework | [GitHub](https://github.com/Junxiao-Liao/SimpleBackendFramework) | 基于原生 TCP 的 HTTP/1.1 服务器：路由、自定义线程池、并发集合 | C#, .NET 8 |
| r-listener | [GitHub](https://github.com/Junxiao-Liao/r-listener) | 多租户无服务器音乐流媒体（Cloudflare Workers）：音频/LRC 上传与播放、歌单、播放队列、管理后台 | Hono v4, Drizzle ORM, D1, R2, Svelte 5, TanStack Query |
| Merge-Images-Web | [GitHub](https://github.com/Junxiao-Liao/Merge-Images-Web) | Rust/WASM 图片拼接（Web Worker 中运行，基于 NCC 的重叠检测） | Rust, WASM, SvelteKit 5, Tailwind v4 |

## 技能

- **编程语言**：Python、TypeScript、C#、PHP、C++、Rust
- **后端**：NestJS、FastAPI、ASP.NET、CodeIgniter；GraphQL、gRPC、REST；TypeORM、SQLAlchemy、Prisma
- **前端**：React、Redux、Apollo Client
- **数据**：PostgreSQL、TimescaleDB、pgvector；MySQL、SQLite、Redis、MongoDB；MinIO；Polars、Prefect
- **AI / 机器学习**：PyTorch、Transformers、scikit-learn；LLM 微调（LoRA）；嵌入向量
- **基础设施**：Docker、Linux（POSIX、Bash、systemd）、CI（GitHub Actions、Bitbucket Pipelines）、Cloudflare Workers（D1、R2、Queues）
