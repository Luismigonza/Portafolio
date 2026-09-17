import type { Hito, Proyecto } from "./types";

export const PROYECTOS: Proyecto[] = [
  {
    nombre: { es: "CERBERUS", en: "CERBERUS" },
    anio: "2026",
    rol: { es: "Backend · VulnerabilityService", en: "Backend · VulnerabilityService" },
    resumen: {
      es: "Plataforma DevSecOps construida por un equipo de 6 en 15 días: escanea repos en busca de secretos expuestos, CVEs y vulnerabilidades web, y bloquea despliegues inseguros. Construí VulnerabilityService, el microservicio que normaliza los formatos completamente distintos de Gitleaks, Trivy y ZAP a un contrato único — con idempotencia real vía constraint de PostgreSQL para sobrevivir a los reintentos automáticos de n8n.",
      en: "A DevSecOps platform built by a team of 6 in 15 days: it scans repos for exposed secrets, CVEs and web vulnerabilities, and blocks insecure deployments. I built VulnerabilityService, the microservice that normalizes the completely different output formats of Gitleaks, Trivy and ZAP into a single contract — with real idempotency via a PostgreSQL constraint to survive n8n's automatic retries.",
    },
    stack: [".NET 8", "PostgreSQL", "RabbitMQ", "Docker", "Kubernetes"],
    eje: "X",
    enlace: null,
    repo: "https://github.com/Cerberus-Riwi/cerberus-vulnerability",
    imagenes: [],
    video: "/proyectos/cerberus/demo.mp4",
    estado: { es: "Completado", en: "Completed" },
  },
  {
    nombre: { es: "Snapshot", en: "Snapshot" },
    anio: "2026",
    rol: { es: "Frontend · infra y despliegue", en: "Frontend · infra and deployment" },
    resumen: {
      es: "Plataforma de autoservicio de infraestructura hecha por 9 células de RIWI trabajando en paralelo, cada una exponiendo y consumiendo servicios de las demás por contrato de API: Snapshot hospeda n8n y consume MySQL e IA de otras dos. Fui el único responsable del frontend en Angular (OAuth, panel multi-servicio, modo claro/oscuro) y terminé asumiendo también el despliegue y buena parte de la depuración transversal — incluyendo un login que fallaba en producción porque, detrás del proxy inverso, la API generaba callbacks en http:// en vez de https://; se resolvió propagando X-Forwarded-Proto.",
      en: "A self-service infrastructure platform built by 9 RIWI teams working in parallel, each exposing and consuming the others' services through an API contract: Snapshot hosts n8n and consumes MySQL and AI from two other teams. I was the sole owner of the Angular frontend (OAuth, multi-service dashboard, light/dark mode) and ended up taking on deployment too, plus a good part of the cross-cutting debugging — including a login that failed in production because, behind the reverse proxy, the API was generating callbacks with http:// instead of https://; fixed by propagating X-Forwarded-Proto.",
    },
    stack: ["Angular 22", "TypeScript", "Nginx", "Docker", "GitHub Actions"],
    eje: "Y",
    enlace: null,
    repo: "https://github.com/Team-Snapshot-Isolation/frontend-landing",
    imagenes: ["/proyectos/snapshot/landing.png", "/proyectos/snapshot/dashboard.png"],
    video: "/proyectos/snapshot/demo.mp4",
    estado: { es: "Completado", en: "Completed" },
  },
  {
    nombre: { es: "ProviderHub", en: "ProviderHub" },
    anio: "2026",
    rol: { es: "Full-stack · en solitario", en: "Full-stack · solo project" },
    resumen: {
      es: "Prueba técnica full-stack para Tekus S.A.S.: gestión de proveedores, los servicios que ofrece cada uno, en qué países y a qué tarifa. Backend en Clean Architecture con DDD, con una decisión que vale la pena explicar: dejé el mediator afuera — con once casos de uso, Send(command) solo agrega indirección y esconde en tiempo de compilación quién maneja qué. Los eventos de dominio se despachan solo después del commit, para que una notificación nunca anuncie algo que un rollback pueda desmentir. 224 pruebas (191 backend, 33 frontend) con CI en verde, corriendo las de integración contra una base de datos real.",
      en: "A full-stack technical test for Tekus S.A.S.: managing providers, the services each one offers, in which countries, and at what rate. Backend in Clean Architecture with DDD, with one decision worth explaining: I left the mediator out — with eleven use cases, Send(command) only adds indirection and hides at compile time who handles what. Domain events are dispatched only after the commit, so a notification never announces something a rollback could later contradict. 224 tests (191 backend, 33 frontend) with CI green, running the integration ones against a real database.",
    },
    stack: [".NET 10", "Angular 21", "SQL Server", "EF Core", "Docker"],
    eje: "X",
    enlace: null,
    repo: "https://github.com/Luismigonza/ProviderHub",
    imagenes: [
      "/proyectos/providerhub/02-dashboard.png",
      "/proyectos/providerhub/03-providers.png",
      "/proyectos/providerhub/04-provider-detail.png",
      "/proyectos/providerhub/05-services.png",
      "/proyectos/providerhub/06-conflict.png",
      "/proyectos/providerhub/01-login.png",
    ],
    video: null,
    estado: { es: "Completado", en: "Completed" },
  },
  {
    nombre: { es: "Infraestructura AWS", en: "AWS Infrastructure" },
    anio: "2026",
    rol: { es: "Infraestructura · en solitario", en: "Infrastructure · solo project" },
    resumen: {
      es: "Infraestructura de una app en AWS definida 100% en código: nada se crea a mano en la consola, y los cambios pasan por Pull Request con el plan comentado antes de aplicarse, igual que el código de una aplicación. La decisión que más vale explicar: ECS y RDS se necesitan mutuamente para su Security Group, así que la base de datos expone un segundo grupo vacío que funciona como 'pase de entrada' — define su política de acceso sin conocer a sus clientes. El pipeline entra a AWS por OIDC, sin una sola credencial de larga duración, y cada verificación del README está comprobada contra la API real de AWS, no solo declarada.",
      en: "Infrastructure for an app on AWS defined 100% in code: nothing gets created by hand in the console, and every change goes through a Pull Request with the plan commented on it before it's ever applied — the same way application code does. The decision most worth explaining: ECS and RDS each need the other's Security Group, so the database exposes a second, empty group that works as an 'entry pass' — it defines its access policy without ever knowing its clients. The pipeline authenticates to AWS via OIDC, with zero long-lived credentials, and every claim in the README is verified against AWS's real API, not just stated.",
    },
    stack: ["Terraform", "AWS", "ECS Fargate", "RDS PostgreSQL", "GitHub Actions"],
    eje: "Z",
    enlace: null,
    repo: "https://github.com/Luismigonza/infraestructura-aws",
    imagenes: [
      "/proyectos/infraestructura-aws/1-plan-en-pr.png",
      "/proyectos/infraestructura-aws/2-esperando-aprobacion.png",
      "/proyectos/infraestructura-aws/3-aprobacion-registrada.png",
      "/proyectos/infraestructura-aws/4-apply-completado.png",
      "/proyectos/infraestructura-aws/5-app-respondiendo.png",
      "/proyectos/infraestructura-aws/6-dos-tareas-dos-zonas.png",
    ],
    video: null,
    estado: { es: "Completado", en: "Completed" },
  },
  {
    nombre: { es: "PQRS.ai", en: "PQRS.ai" },
    anio: "2026",
    rol: { es: "Backend · IA y multi-tenant", en: "Backend · AI and multi-tenant" },
    resumen: {
      es: "SaaS multi-tenant de gestión de PQRS con IA: cada empresa instala un widget que primero intenta resolver la consulta con RAG sobre su propia base de conocimiento, y si no puede, radica el caso con triaje automático (tipo, prioridad, sentimiento) vía un LLM local con Ollama — sin depender de una API paga. El aislamiento entre empresas no es solo un filtro de conveniencia: el TenantId se resuelve primero desde el claim del JWT, así un agente autenticado no puede leer datos de otra empresa así falsifique el header. Si el motor de IA se cae, el ticket se guarda igual con valores por defecto — el triaje enriquece, no bloquea.",
      en: "A multi-tenant SaaS for managing PQRS (complaints, claims and requests) with AI: each company installs a widget that first tries to resolve the query with RAG over its own knowledge base, and if it can't, files the case with automatic triage (type, priority, sentiment) via a local LLM running on Ollama — no paid API involved. Tenant isolation isn't just a convenience filter: the TenantId is resolved first from the JWT claim, so an authenticated agent can't read another company's data even by spoofing the header. If the AI engine goes down, the ticket still saves with default values — triage enriches the data, it doesn't gate it.",
    },
    stack: [".NET", "PostgreSQL", "pgvector", "Ollama", "SignalR"],
    eje: "X",
    enlace: null,
    repo: "https://github.com/Luismigonza/Plataforma-SaaS-Multi-tenant",
    imagenes: [],
    video: "/proyectos/pqrs-ai/demo.mp4",
    estado: { es: "Completado", en: "Completed" },
  },
];

export const TRAYECTORIA: Hito[] = [
  {
    periodo: { es: "2023 — 2025", en: "2023 — 2025" },
    titulo: {
      es: "Tecnólogo en Análisis y Desarrollo de Software",
      en: "Technologist in Software Analysis and Development",
    },
    lugar: { es: "SENA", en: "SENA" },
    texto: {
      es: "Fundamentos de programación, bases de datos, ciclo de vida del software y desarrollo de aplicaciones.",
      en: "Programming fundamentals, databases, the software lifecycle, and application development.",
    },
  },
  {
    periodo: { es: "2025 — hoy", en: "2025 — present" },
    titulo: { es: "Desarrollador en formación", en: "Developer in training" },
    lugar: { es: "RIWI", en: "RIWI" },
    texto: {
      es: "Seis meses trabajando en retos de equipo con roles reales de la industria: backend, frontend y despliegue.",
      en: "Six months working on team challenges with real industry roles: backend, frontend and deployment.",
    },
  },
  {
    periodo: { es: "En curso", en: "Ongoing" },
    titulo: { es: "Camino a Arquitecto de Software", en: "On the way to Software Architect" },
    lugar: { es: "Ecosistema .NET", en: ".NET Ecosystem" },
    texto: {
      es: "Clean Architecture, sistemas distribuidos, cloud y microservicios. El objetivo no es saber más herramientas, es saber cuándo no usarlas.",
      en: "Clean Architecture, distributed systems, cloud and microservices. The goal isn't knowing more tools — it's knowing when not to use them.",
    },
  },
];
