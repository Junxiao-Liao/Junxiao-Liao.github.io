# Junxiao LIAO

**Email:** junxiao.liao@outlook.com; [**GitHub**/Junxiao-Liao](https://github.com/Junxiao-Liao); [**LinkedIn**/in/junxiao-liao](https://www.linkedin.com/in/junxiao-liao/)

**Work Rights (NZ)**: Post-Study Work Visa (Open), valid 28 May 2026 to 28 May 2029.

## Education

### Master's Degree | Auckland, New Zealand: [**University of Auckland**](https://www.auckland.ac.nz) *Mar 2025 - Mar 2026*

**Major: Information Technology (Faculty of Science)**

### Bachelor's Degree in Engineering | Jinan, China: [**Shandong University**](https://www.sdu.edu.cn/) *Sep 2020 - Jun 2024*

**Major: Digital Media Technology (School of Software)**, computer science fundamentals and advanced topics in graphics, machine learning, and image processing.

## Work Experience

### Junior Software Engineer | Auckland, New Zealand: [**Xtracta**](https://xtracta.com/) *Nov 2025 - Present*
*Promoted from Software Engineer Intern (Nov 2025 - Aug 2026)*

**Document Processing:** enterprise platform (**NestJS**, **React**, **PHP/CodeIgniter**, **GraphQL**, **gRPC**)
1. Owned migration of the admin console from legacy PHP (CodeIgniter, Smarty) to **React** frontends, **NestJS GraphQL** backend, and **gRPC** services, including user, group, announcement, and history management features.
1. Fixed security issues including unguarded **GraphQL** resolvers, and unmasked credentials.
1. Built new features: **NestJS** caching module with **Redis**, new features in documents processing pages and configuration settings, **Apache** server monitoring pages.

**Procurement Analytics:** supplier data enrichment (**Python**, **FastAPI**, **Prefect**, **TimescaleDB**, **Polars**)
1. Built a **browser-automation** enrichment agent in **Prefect**: **Lightpanda** headless engine with **Patchright** (stealth Playwright) fallback, per-domain compatibility routing, and LLM-based source-quality checks.
1. Rebuilt the price-statistics pipeline on **TimescaleDB** hypertables and a **Polars** engine, cutting a core query from over 4 minutes to about 1 second and validating correctness with a differential test.
1. Prototyped substitute-product matching: **DINOv3** image embedding and text embeddings, and an **LLM judge** to classify candidate pairs.
1. Fine-tuned a **Kev-4B** (Qwen3.5 + **LoRA** pointer head) decision model on teacher-labelled data.

### Car Innovation Intern | Beijing, China: [**Volkswagen Group, Cariad China**](https://volkswagengroupchina.com.cn/en/brands/cariad) *Oct 2023 - Jun 2024 (8 mo)*
1. **Backend, DevOps**: Built a centralized **RESTful API service** (**python-can** and **FastAPI**) standardizing **CAN signal** read and write workflows, replacing redundant team-specific hardware and enabling unified vehicle bus data access.
1. **Embedded**: Developed components for a **voice control system** on **embedded Linux** (ARM Cortex-A53 SBC), integrating a **microphone array** and **CAN bus** communication.

### Full-Stack Developer Intern | Jinan, China: [**Pansoft Co., Limited**](https://www.pansoft.com/contents/en/) *Jul 2023 - Oct 2023 (3 mo)*

1. **ML**: Expanded the ERP form classification model from 5 to 15 categories; addressed severe class imbalance (minority classes less than 100 samples, others in the thousands) using **SMOTE** oversampling, raising recall from 20% to 80%.
1. **Backend, Architecture, Performance**: Profiled and traced slow report generation; designed **SQL and ORM optimization** and **connection pooling** solutions.

## Projects

| Project | Link | Description | Tech Stack |
|---|---|---|---|
| Undergraduate Thesis | [GitHub](https://github.com/Junxiao-Liao/Doc-Ocr-Categorizer) | Document OCR & classification: RapidOCR + semantic embedding + pgvector recommendation | React, FastAPI, PostgreSQL, MinIO, RapidOCR, pgvector |
| SimpleBackendFramework | [GitHub](https://github.com/Junxiao-Liao/SimpleBackendFramework) | Backend framework from raw TCP | C#, .NET 8 |
| r-listener | [GitHub](https://github.com/Junxiao-Liao/r-listener) | Full-stack serverless music streaming on Cloudflare Workers | Hono v4, Drizzle ORM, D1, R2, Svelte 5, TanStack Query |
| Qt-Wuziqi | [GitHub](https://github.com/Junxiao-Liao/Qt-Wuziqi) | Gomoku (19x19) with heuristic AI | C++, Qt 6 |
| Merge-Images-Web | [GitHub](https://github.com/Junxiao-Liao/Merge-Images-Web) | Client-side image stitching | Rust, WASM, SvelteKit 5, Tailwind v4 |

## Skills

- **Languages**: Python, TypeScript, PHP; C#; C++, Rust
- **Backend**: REST, GraphQL, gRPC; NestJS, CodeIgniter, FastAPI, ASP.NET; TypeORM, SQLAlchemy, Prisma
- **Frontend**: React, Redux, Apollo Client; Svelte, MUI, Tailwind
- **Databases and Data Processing**: PostgreSQL, MySQL, SQLite; MongoDB, Redis; MinIO
- **AI / Machine Learning**: PyTorch, Transformers, scikit-learn; LLM fine-tuning (LoRA); Vector DB; Polars
- **DevOps and Cloud**: Git, Docker, CI/CD (GitHub Actions, Bitbucket Pipelines); Cloudflare FaaS; Jira
- **Systems and Embedded**: Linux (POSIX, Bash, systemd); CAN bus
