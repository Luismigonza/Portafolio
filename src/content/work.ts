import type { Hito, Proyecto } from "./types";

export const PROYECTOS: Proyecto[] = [
  {
    nombre: "CERBERUS",
    anio: "2026",
    rol: "Backend · VulnerabilityService",
    resumen:
      "Plataforma DevSecOps construida por un equipo de 6 en 15 días: escanea repos en busca de secretos expuestos, CVEs y vulnerabilidades web, y bloquea despliegues inseguros. Construí VulnerabilityService, el microservicio que normaliza los formatos completamente distintos de Gitleaks, Trivy y ZAP a un contrato único — con idempotencia real vía constraint de PostgreSQL para sobrevivir a los reintentos automáticos de n8n.",
    stack: [".NET 8", "PostgreSQL", "RabbitMQ", "Docker", "Kubernetes"],
    eje: "X",
    enlace: null,
    repo: "https://github.com/Cerberus-Riwi/cerberus-vulnerability",
    imagenes: [],
    video: "/proyectos/cerberus/demo.mp4",
    estado: "Completado",
  },
  {
    nombre: "Snapshot",
    anio: "2026",
    rol: "Frontend · infra y despliegue",
    resumen:
      "Plataforma de autoservicio de infraestructura hecha por 9 células de RIWI trabajando en paralelo, cada una exponiendo y consumiendo servicios de las demás por contrato de API: Snapshot hospeda n8n y consume MySQL e IA de otras dos. Fui el único responsable del frontend en Angular (OAuth, panel multi-servicio, modo claro/oscuro) y terminé asumiendo también el despliegue y buena parte de la depuración transversal — incluyendo un login que fallaba en producción porque, detrás del proxy inverso, la API generaba callbacks en http:// en vez de https://; se resolvió propagando X-Forwarded-Proto.",
    stack: ["Angular 22", "TypeScript", "Nginx", "Docker", "GitHub Actions"],
    eje: "Y",
    enlace: null,
    repo: "https://github.com/Team-Snapshot-Isolation/frontend-landing",
    imagenes: ["/proyectos/snapshot/landing.png", "/proyectos/snapshot/dashboard.png"],
    video: "/proyectos/snapshot/demo.mp4",
    estado: "Completado",
  },
  {
    nombre: "ProviderHub",
    anio: "2026",
    rol: "Full-stack · en solitario",
    resumen:
      "Prueba técnica full-stack para Tekus S.A.S.: gestión de proveedores, los servicios que ofrece cada uno, en qué países y a qué tarifa. Backend en Clean Architecture con DDD, con una decisión que vale la pena explicar: dejé el mediator afuera — con once casos de uso, Send(command) solo agrega indirección y esconde en tiempo de compilación quién maneja qué. Los eventos de dominio se despachan solo después del commit, para que una notificación nunca anuncie algo que un rollback pueda desmentir. 224 pruebas (191 backend, 33 frontend) con CI en verde, corriendo las de integración contra una base de datos real.",
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
    estado: "Completado",
  },
  {
    nombre: "Infraestructura AWS",
    anio: "2026",
    rol: "Infraestructura · en solitario",
    resumen:
      "Infraestructura de una app en AWS definida 100% en código: nada se crea a mano en la consola, y los cambios pasan por Pull Request con el plan comentado antes de aplicarse, igual que el código de una aplicación. La decisión que más vale explicar: ECS y RDS se necesitan mutuamente para su Security Group, así que la base de datos expone un segundo grupo vacío que funciona como 'pase de entrada' — define su política de acceso sin conocer a sus clientes. El pipeline entra a AWS por OIDC, sin una sola credencial de larga duración, y cada verificación del README está comprobada contra la API real de AWS, no solo declarada.",
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
    estado: "Completado",
  },
];

export const TRAYECTORIA: Hito[] = [
  {
    periodo: "2025 — hoy",
    titulo: "Desarrollador en formación",
    lugar: "RIWI",
    texto:
      "Seis meses trabajando en retos de equipo con roles reales de la industria: backend, frontend y despliegue.",
  },
  {
    periodo: "2023 — 2025",
    titulo: "Tecnólogo en Análisis y Desarrollo de Software",
    lugar: "SENA",
    texto:
      "Fundamentos de programación, bases de datos, ciclo de vida del software y desarrollo de aplicaciones.",
  },
  {
    periodo: "En curso",
    titulo: "Camino a Arquitecto de Software",
    lugar: "Ecosistema .NET",
    texto:
      "Clean Architecture, sistemas distribuidos, cloud y microservicios. El objetivo no es saber más herramientas, es saber cuándo no usarlas.",
  },
];