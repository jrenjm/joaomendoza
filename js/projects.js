// ========================================
// Base de datos de proyectos
// ========================================

const projects = [
    {
        id: 1,
        title: "Sistema de Registro de Incidentes",
        problem: "Eliminar el proceso manual de registro de incidentes en papel que generaba pérdidas y retrasos en la documentación",
        description: "Aplicación móvil que permite registrar incidentes laborales en tiempo real desde cualquier ubicación. Incluye captura de fotos, geolocalización automática y notificaciones instantáneas al equipo de SST.",
        technologies: ["Power Apps", "SharePoint", "Power Automate"],
        impact: "Redujo tiempo de registro en 70%",
        videoUrl: "assets/videos/proyecto1.mp4", // Reemplaza con tu video
        thumbnailUrl: "assets/images/proyecto1-thumb.jpg", // Reemplaza con tu imagen
        features: [
            "Registro offline disponible",
            "Notificaciones automáticas",
            "Geolocalización GPS",
            "Captura fotográfica integrada",
            "Dashboard de métricas en tiempo real"
        ],
        results: [
            "70% reducción en tiempo de registro",
            "100% de incidentes documentados",
            "Eliminación total del papel",
            "Respuesta 3x más rápida"
        ]
    },
    {
        id: 2,
        title: "Inspecciones de Seguridad Digitales",
        problem: "Las inspecciones en formularios físicos dificultaban el seguimiento y análisis de riesgos recurrentes",
        description: "Sistema de inspecciones digitales con checklist personalizables por área. Genera reportes automáticos y envía alertas cuando se detectan condiciones críticas.",
        technologies: ["Power Apps", "Power BI", "SharePoint"],
        impact: "Aumentó inspecciones completadas en 85%",
        videoUrl: "assets/videos/proyecto2.mp4",
        thumbnailUrl: "assets/images/proyecto2-thumb.jpg",
        features: [
            "Checklists personalizables por área",
            "Fotografías con anotaciones",
            "Priorización automática de riesgos",
            "Reportes PDF automáticos",
            "Análisis de tendencias con Power BI"
        ],
        results: [
            "85% más inspecciones completadas",
            "60% reducción en riesgos críticos",
            "Reportes generados en 2 minutos",
            "100% trazabilidad de hallazgos"
        ]
    },
    {
        id: 3,
        title: "Control de EPPs",
        problem: "Pérdida de control sobre la entrega y estado de equipos de protección personal, generando incumplimientos normativos",
        description: "Aplicación para gestionar el inventario, entrega y renovación de EPPs. Incluye alertas automáticas de vencimiento y firma digital del trabajador.",
        technologies: ["Power Apps", "Power Automate", "OneDrive"],
        impact: "100% cumplimiento normativo en EPPs",
        videoUrl: "assets/videos/proyecto3.mp4",
        thumbnailUrl: "assets/images/proyecto3-thumb.jpg",
        features: [
            "Inventario en tiempo real",
            "Firma digital del trabajador",
            "Alertas de vencimiento automáticas",
            "Historial completo por trabajador",
            "Generación de actas de entrega"
        ],
        results: [
            "100% cumplimiento normativo",
            "0 EPPs vencidos sin reemplazo",
            "50% reducción en costos de inventario",
            "Auditorías aprobadas sin observaciones"
        ]
    },
    {
        id: 4,
        title: "Capacitaciones y Entrenamiento",
        problem: "Falta de seguimiento sobre capacitaciones obligatorias y dificultad para demostrar cumplimiento ante auditorías",
        description: "Plataforma que gestiona el cronograma de capacitaciones, registro de asistencia y evaluaciones. Genera automáticamente certificados y envía recordatorios.",
        technologies: ["Power Apps", "SharePoint", "Power Automate"],
        impact: "95% asistencia a capacitaciones",
        videoUrl: "assets/videos/proyecto4.mp4",
        thumbnailUrl: "assets/images/proyecto4-thumb.jpg",
        features: [
            "Calendario automático de capacitaciones",
            "QR para registro de asistencia",
            "Evaluaciones digitales integradas",
            "Generación automática de certificados",
            "Reportes de cumplimiento por área"
        ],
        results: [
            "95% de asistencia efectiva",
            "100% de personal certificado",
            "80% reducción en tiempo administrativo",
            "Trazabilidad completa para auditorías"
        ]
    },
    {
        id: 5,
        title: "Dashboard de Indicadores SST",
        problem: "Los indicadores de SST se calculaban manualmente en Excel, generando errores y consumiendo tiempo valioso del equipo",
        description: "Dashboard interactivo en Power BI que consolida automáticamente todos los indicadores de SST (frecuencia, gravedad, accidentabilidad) desde múltiples fuentes de datos.",
        technologies: ["Power BI", "Power Automate", "SharePoint"],
        impact: "Ahorro de 40 horas mensuales",
        videoUrl: "assets/videos/proyecto5.mp4",
        thumbnailUrl: "assets/images/proyecto5-thumb.jpg",
        features: [
            "Actualización automática de datos",
            "Indicadores en tiempo real",
            "Comparativas mensuales/anuales",
            "Alertas de indicadores críticos",
            "Acceso desde cualquier dispositivo"
        ],
        results: [
            "40 horas mensuales ahorradas",
            "0 errores en cálculos",
            "Decisiones basadas en datos reales",
            "Presentaciones gerenciales en 5 minutos"
        ]
    },
    {
        id: 6,
        title: "Gestión de Permisos de Trabajo",
        problem: "El proceso de autorización de trabajos de alto riesgo era lento y propenso a omisiones críticas de seguridad",
        description: "Sistema de permisos de trabajo digital con validaciones automáticas de requisitos de seguridad, aprobaciones en flujo y check de condiciones previas al inicio.",
        technologies: ["Power Apps", "Power Automate", "SharePoint"],
        impact: "Tiempo de aprobación reducido 60%",
        videoUrl: "assets/videos/proyecto6.mp4",
        thumbnailUrl: "assets/images/proyecto6-thumb.jpg",
        features: [
            "Validación automática de requisitos",
            "Flujo de aprobación multinivel",
            "Check de seguridad pre-inicio",
            "Notificaciones push a supervisores",
            "Historial auditable de permisos"
        ],
        results: [
            "60% reducción en tiempo de aprobación",
            "100% de requisitos validados",
            "0 trabajos iniciados sin permiso",
            "Trazabilidad completa del proceso"
        ]
    }
];

// ========================================
// Función para crear las cards de proyectos
// ========================================

function createProjectCard(project) {
    return `
        <div class="project-card" onclick="openProjectModal(${project.id})">
            <div class="project-thumbnail">
                ${project.videoUrl && project.videoUrl.includes('.mp4') ? 
                    `<video muted loop playsinline>
                        <source src="${project.videoUrl}" type="video/mp4">
                    </video>` :
                    `<img src="${project.thumbnailUrl}" alt="${project.title}">`
                }
                <div class="project-overlay">
                    <i class="fas fa-play-circle play-icon"></i>
                </div>
            </div>
            <div class="project-info">
                <div class="project-tags">
                    ${project.technologies.map(tech => 
                        `<span class="project-tag">${tech}</span>`
                    ).join('')}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-problem">${project.problem}</p>
                <div class="project-impact">
                    <i class="fas fa-chart-line"></i>
                    <span>${project.impact}</span>
                </div>
            </div>
        </div>
    `;
}

// ========================================
// Función para renderizar proyectos
// ========================================

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
        
        // Agregar hover effect para videos
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            const video = card.querySelector('video');
            if (video) {
                card.addEventListener('mouseenter', () => {
                    video.play();
                });
                card.addEventListener('mouseleave', () => {
                    video.pause();
                    video.currentTime = 0;
                });
            }
        });
    }
}

// ========================================
// Función para abrir modal de proyecto
// ========================================

function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-project">
            <h2 class="project-modal-title">${project.title}</h2>
            
            <div class="project-modal-video">
                ${project.videoUrl && project.videoUrl.includes('.mp4') ? 
                    `<video controls autoplay style="width: 100%; border-radius: 12px;">
                        <source src="${project.videoUrl}" type="video/mp4">
                    </video>` :
                    `<img src="${project.thumbnailUrl}" alt="${project.title}" style="width: 100%; border-radius: 12px;">`
                }
            </div>
            
            <div class="project-modal-tags" style="margin: 1.5rem 0;">
                ${project.technologies.map(tech => 
                    `<span class="project-tag">${tech}</span>`
                ).join('')}
            </div>
            
            <div class="project-modal-section">
                <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">
                    <i class="fas fa-exclamation-circle"></i> Problema
                </h3>
                <p style="color: var(--text-secondary); line-height: 1.8;">${project.problem}</p>
            </div>
            
            <div class="project-modal-section">
                <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">
                    <i class="fas fa-lightbulb"></i> Solución
                </h3>
                <p style="color: var(--text-secondary); line-height: 1.8;">${project.description}</p>
            </div>
            
            <div class="project-modal-section">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                    <i class="fas fa-star"></i> Características Principales
                </h3>
                <ul style="list-style: none; padding: 0;">
                    ${project.features.map(feature => 
                        `<li style="padding: 0.5rem 0; color: var(--text-secondary); display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fas fa-check-circle" style="color: var(--secondary-color);"></i>
                            ${feature}
                        </li>`
                    ).join('')}
                </ul>
            </div>
            
            <div class="project-modal-section">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                    <i class="fas fa-trophy"></i> Resultados
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    ${project.results.map(result => 
                        `<div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; text-align: center;">
                            <p style="color: var(--text-primary); font-weight: 600;">${result}</p>
                        </div>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ========================================
// Función para cerrar modal
// ========================================

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Pausar video si existe
    const video = modal.querySelector('video');
    if (video) {
        video.pause();
    }
}

// ========================================
// Event listeners para modal
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Renderizar proyectos
    renderProjects();
    
    // Cerrar modal con X
    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }
    
    // Cerrar modal al hacer click fuera
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }
    
    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
});

// Agregar estilos para el modal de proyecto
const modalStyles = `
    .project-modal-section {
        margin: 2rem 0;
    }
    
    .project-modal-section h3 {
        font-family: var(--font-heading);
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .project-modal-title {
        font-family: var(--font-heading);
        font-size: 2rem;
        margin-bottom: 1.5rem;
        color: var(--text-primary);
    }
    
    .project-modal-video {
        margin: 1.5rem 0;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 10px 30px var(--shadow-color);
    }
    
    .project-modal-tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
`;

// Inyectar estilos
const styleSheet = document.createElement("style");
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);
