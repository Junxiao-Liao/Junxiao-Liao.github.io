# Junxiao LIAO

**Email:** junxiao.liao@outlook.com; [**GitHub**/Junxiao-Liao](https://github.com/Junxiao-Liao); [**LinkedIn**/in/junxiao-liao](https://www.linkedin.com/in/junxiao-liao/)

**Work Rights (NZ)**: Post-Study Work Visa (Open), valid 28 May 2026 to 28 May 2029.

## Education

### Master's Degree | Auckland, New Zealand: [**University of Auckland**](https://www.auckland.ac.nz) *Mar 2025 - Mar 2026*

**Major: Information Technology (Faculty of Science)**

### Bachelor's Degree in Engineering | Jinan, China: [**Shandong University**](https://www.sdu.edu.cn/) *Sep 2020 - Jun 2024*

**Major: Digital Media Technology (School of Software)**, computer science fundamentals and advanced topics in graphics, machine learning, and image processing.

## Work Experience

### [**Xtracta**](https://xtracta.com/) | Auckland, New Zealand *Nov 2025 - Present*

**Junior Software Engineer** — Aug 2026 - Present

**Software Engineer Intern** — Nov 2025 - Aug 2026

**Document Processing:** enterprise platform (**NestJS**, **React**, **PHP/CodeIgniter**, **GraphQL**, **gRPC**)
1. Owned migration of the admin console from legacy PHP (CodeIgniter, Smarty) to **React** frontends, **NestJS GraphQL** backend, and **gRPC** services, including user, group, announcement, and history management features.
1. Hardened **GraphQL** authorization and credential handling: added resolver access controls and masked sensitive configuration values.
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
| SimpleBackendFramework | [GitHub](https://github.com/Junxiao-Liao/SimpleBackendFramework) | HTTP/1.1 server from raw TCP: routing, custom thread pool, concurrent collections | C#, .NET 8 |
| r-listener | [GitHub](https://github.com/Junxiao-Liao/r-listener) | Multi-tenant serverless music streaming on Cloudflare Workers: audio/LRC upload & streaming, playlists, queue, admin panel | Hono v4, Drizzle ORM, D1, R2, Svelte 5, TanStack Query |
| Merge-Images-Web | [GitHub](https://github.com/Junxiao-Liao/Merge-Images-Web) | Rust/WASM image stitching in a Web Worker with NCC-based overlap detection | Rust, WASM, SvelteKit 5, Tailwind v4 |

## Skills

- **Languages**: Python, TypeScript, C#, PHP, C++, Rust
- **Backend**: NestJS, FastAPI, ASP.NET, CodeIgniter; GraphQL, gRPC, REST; TypeORM, SQLAlchemy, Prisma
- **Frontend**: React, Redux, Apollo Client
- **Data**: PostgreSQL, TimescaleDB, pgvector; MySQL, SQLite, Redis, MongoDB; MinIO; Polars, Prefect
- **AI / Machine Learning**: PyTorch, Transformers, scikit-learn; LLM fine-tuning (LoRA); embeddings
- **Infrastructure**: Docker, Linux (POSIX, Bash, systemd), CI (GitHub Actions, Bitbucket Pipelines), Cloudflare Workers (D1, R2, Queues)
