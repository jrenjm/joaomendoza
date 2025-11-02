// ========================================
// Base de datos de proyectos - JOAO MENDOZA
// ========================================

const projects = [
    {
        id: 1,
        title: "Gestión de Inventario y Asignación de EPPs",
        problem: "El control manual de EPPs generaba pérdida de equipos, entregas sin registro y dificultad para rastrear el historial de asignaciones por trabajador",
        description: "Aplicación que desarrollé para gestionar el inventario completo de Equipos de Protección Personal y controlar su asignación al personal. Implementé registro de entradas/salidas, alertas de stock mínimo, historial por trabajador y generación automática de actas de entrega con firma digital.",
        technologies: ["Power Apps", "SharePoint", "Power Automate"],
        impact: "100% trazabilidad en entrega de EPPs",
        videoUrl: "assets/videos/proyecto1.mp4",
        thumbnailUrl: "assets/images/proyecto1-thumb.jpg",
        videoOrientation: "landscape", // horizontal
        features: [
            "Control de inventario en tiempo real",
            "Registro de entrada y salida de EPPs",
            "Asignación directa al personal desde la app",
            "Alertas automáticas de stock mínimo",
            "Historial completo por trabajador",
            "Generación de actas de entrega con firma digital",
            "Reportes de consumo por período"
        ],
        results: [
            "100% de EPPs rastreables",
            "0 pérdidas de equipos sin registro",
            "70% reducción en tiempo de asignación",
            "Cumplimiento normativo garantizado",
            "Auditorías sin observaciones"
        ]
    },
    {
        id: 2,
        title: "Seguimiento y Control de Extintores",
        problem: "La inspección manual de extintores en múltiples proyectos causaba vencimientos no detectados y falta de visibilidad del estado general del parque de extintores",
        description: "Aplicación que creé para el monitoreo continuo de extintores en todos los proyectos. Implementé funcionalidades para registrar inspecciones, controlar fechas de vencimiento y recarga, y generar reportes consolidados del estado de todos los extintores de forma automática.",
        technologies: ["Power Apps", "SharePoint"],
        impact: "0 extintores vencidos sin reemplazo",
        videoUrl: "assets/videos/proyecto2.mp4",
        thumbnailUrl: "assets/images/proyecto2-thumb.jpg",
        videoOrientation: "landscape",
        features: [
            "Seguimiento individualizado por extintor",
            "Registro de inspecciones por proyecto",
            "Control de fechas de vencimiento y recarga",
            "Alertas automáticas de vencimientos próximos",
            "Dashboard con estado de todos los extintores",
            "Reportes consolidados por proyecto",
            "Geolocalización de extintores en obra"
        ],
        results: [
            "0 extintores vencidos",
            "100% de inspecciones documentadas",
            "85% reducción en tiempo de reportes",
            "Visibilidad total del parque de extintores",
            "Prevención proactiva de vencimientos"
        ]
    },
    {
        id: 3,
        title: "Gestión Integral de Botiquines",
        problem: "El descontrol en el inventario de botiquines provocaba desabastecimiento en proyectos, vencimiento de medicamentos y dificultad para saber qué botiquín necesitaba reposición",
        description: "Solución que desarrollé para gestionar botiquines en múltiples proyectos. El sistema controla la entrada de materiales al inventario central, permite la asignación específica de materiales a cada botiquín de proyecto y genera alertas de vencimiento y stock bajo.",
        technologies: ["Power Apps", "SharePoint", "Power Automate"],
        impact: "100% de botiquines abastecidos",
        videoUrl: "assets/videos/proyecto3.mp4",
        thumbnailUrl: "assets/images/proyecto3-thumb.jpg",
        videoOrientation: "landscape",
        features: [
            "Control de inventario central de materiales médicos",
            "Registro de entrada de materiales con lote y vencimiento",
            "Seguimiento individualizado por proyecto",
            "Asignación de materiales a botiquines específicos",
            "Alertas de vencimiento de medicamentos",
            "Notificaciones de stock bajo por botiquín",
            "Historial de reposiciones y consumo",
            "Reportes de cumplimiento normativo"
        ],
        results: [
            "100% de botiquines operativos",
            "0 medicamentos vencidos en botiquines",
            "60% reducción en desabastecimientos",
            "Trazabilidad completa de materiales",
            "Cumplimiento DS 024-2016-EM"
        ]
    },
    {
        id: 4,
        title: "Checklists Digitales de Seguridad",
        problem: "Los checklists en papel se perdían, no tenían firma verificable y era imposible analizar tendencias o puntos críticos recurrentes en las inspecciones",
        description: "App móvil que construí con checklists digitales para diferentes tipos de trabajo de alto riesgo. Integré checklists personalizados para EPP básico, trabajos en caliente y trabajos en altura, con registro fotográfico, firma digital y reportes automáticos.",
        technologies: ["Power Apps", "SharePoint", "Power Automate"],
        impact: "95% cumplimiento en inspecciones",
        videoUrl: "assets/videos/proyecto4.mp4",
        thumbnailUrl: "assets/images/proyecto4-thumb.jpg",
        videoOrientation: "portrait", // VERTICAL - formato celular
        features: [
            "Checklist de EPP básico obligatorio",
            "Checklist específico para trabajo en caliente",
            "Checklist para trabajo en altura certificado",
            "Registro fotográfico de condiciones",
            "Firma digital del supervisor y trabajador",
            "Identificación de condiciones críticas inmediatas",
            "Notificaciones automáticas de incumplimientos",
            "Dashboard de análisis de tendencias",
            "Acceso offline desde dispositivos móviles"
        ],
        results: [
            "95% de cumplimiento en inspecciones",
            "100% de trabajos de alto riesgo autorizados",
            "80% reducción en condiciones inseguras",
            "Trazabilidad completa de autorizaciones",
            "0 incidentes por omisión de checklist",
            "Análisis de puntos críticos recurrentes"
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
                    `<video 
                        muted 
                        loop 
                        playsinline 
                        poster="${project.thumbnailUrl}"
                        class="${project.videoOrientation === 'portrait' ? 'video-portrait' : 'video-landscape'}">
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
                // Evento mouseenter: reproducir video
                card.addEventListener('mouseenter', () => {
                    video.play().catch(err => console.log('Error al reproducir:', err));
                });
                
                // Evento mouseleave: pausar y volver al inicio
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
    
    // Determinar la clase de orientación del video
    const videoClass = project.videoOrientation === 'portrait' ? 'modal-video-portrait' : 'modal-video-landscape';
    
    modalBody.innerHTML = `
        <div class="modal-project">
            <h2 class="project-modal-title">${project.title}</h2>
            
            <div class="project-modal-video ${videoClass}">
                ${project.videoUrl && project.videoUrl.includes('.mp4') ? 
                    `<video 
                        controls 
                        autoplay 
                        poster="${project.thumbnailUrl}">
                        <source src="${project.videoUrl}" type="video/mp4">
                        Tu navegador no soporta el elemento de video.
                    </video>` :
                    `<img src="${project.thumbnailUrl}" alt="${project.title}">`
                }
            </div>
            
            <div class="project-modal-tags" style="margin: 1.5rem 0;">
                ${project.technologies.map(tech => 
                    `<span class="project-tag">${tech}</span>`
                ).join('')}
            </div>
            
            <div class="project-modal-section">
                <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">
                    <i class="fas fa-exclamation-circle"></i> Problema Identificado
                </h3>
                <p style="color: var(--text-secondary); line-height: 1.8;">${project.problem}</p>
            </div>
            
            <div class="project-modal-section">
                <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">
                    <i class="fas fa-lightbulb"></i> Solución que Desarrollé
                </h3>
                <p style="color: var(--text-secondary); line-height: 1.8;">${project.description}</p>
            </div>
            
            <div class="project-modal-section">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                    <i class="fas fa-star"></i> Características Principales
                </h3>
                <ul style="list-style: none; padding: 0;">
                    ${project.features.map(feature => 
                        `<li style="padding: 0.5rem 0; color: var(--text-secondary); display: flex; align-items: flex-start; gap: 0.5rem;">
                            <i class="fas fa-check-circle" style="color: var(--secondary-color); margin-top: 0.25rem; flex-shrink: 0;"></i>
                            <span>${feature}</span>
                        </li>`
                    ).join('')}
                </ul>
            </div>
            
            <div class="project-modal-section">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                    <i class="fas fa-trophy"></i> Resultados Obtenidos
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    ${project.results.map(result => 
                        `<div style="background: var(--bg-secondary); padding: 1.2rem; border-radius: 8px; text-align: center; border-left: 4px solid var(--secondary-color);">
                            <p style="color: var(--text-primary); font-weight: 600; font-size: 0.95rem;">${result}</p>
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

// ========================================
// Estilos adicionales para videos
// ========================================

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
    
    /* Video horizontal (landscape) - formato estándar */
    .modal-video-landscape {
        width: 100%;
    }
    
    .modal-video-landscape video,
    .modal-video-landscape img {
        width: 100%;
        height: auto;
        display: block;
    }
    
    /* Video vertical (portrait) - formato celular */
    .modal-video-portrait {
        max-width: 400px;
        margin: 1.5rem auto;
    }
    
    .modal-video-portrait video,
    .modal-video-portrait img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 12px;
    }
    
    /* Ajuste para videos verticales en cards */
    .video-portrait {
        width: auto !important;
        height: 100% !important;
        max-width: none;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    
    .video-landscape {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .project-modal-tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
    
    /* Responsive para modal de video vertical */
    @media (max-width: 768px) {
        .modal-video-portrait {
            max-width: 100%;
        }
        
        .project-modal-title {
            font-size: 1.5rem;
        }
    }
`;

// Inyectar estilos
const styleSheet = document.createElement("style");
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);
