document.addEventListener('DOMContentLoaded', function() {
    const navTrigger = document.getElementById('navTrigger');
    const navOverlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.nav-link-item');

    navTrigger.addEventListener('click', () => {
        navTrigger.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.style.overflow = navOverlay.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navTrigger.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    navOverlay.addEventListener('click', (e) => {
        if (e.target === navOverlay) {
            navTrigger.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    const projectModal = document.getElementById('projectModal');
    const projectModalTitle = document.getElementById('projectModalTitle');
    const projectModalTag = document.getElementById('projectModalTag');
    const projectModalSubtitle = document.getElementById('projectModalSubtitle');
    const projectModalBody = document.getElementById('projectModalBody');

    const projects = {
        'youyouyun': {
            tag: '教育SaaS',
            title: '优优云平台',
            subtitle: '主导学习平台重构，聚焦用户体验与流程简化，推进 2.x→4.x 多版本规划与交付落地。',
            sections: [
                {
                    title: '项目背景',
                    paragraphs: [
                        '公司原有互联网+大数据测评系统存在用户操作习惯不符、内部流程繁琐等问题。为打造贴合实际应用场景的新版学习平台，提升中高职院校跨境电商人才培养效率，项目组启动重构。'
                    ]
                },
                {
                    title: '项目职责与成果',
                    items: [
                        '深入调研院校教学场景，梳理学生自主学习、教师备课授课、教务管理三大核心业务流程。',
                        '以用户体验为核心，围绕角色任务与操作路径优化信息架构与关键交互，降低上手成本。',
                        '主导平台 2.x → 3.x → 4.x 多版本产品迭代规划，制定版本节奏与功能优先级。',
                        '独立输出 PRD、项目章程（Project Charter），明确项目范围、交付计划与干系人。',
                        '协同 UI、前后端开发与测试推进迭代，将复杂流程简化为“选课程→建课堂→配班级→开课”三步操作。',
                        '对接教研中心、营销中心、顾问部、培训部等多方干系人，收集改进意见并协调资源推进交付；跟进进度确保测试与上线节点如期达成。'
                    ]
                }
            ]
        },
        'crossborder-training': {
            tag: '教育/竞赛',
            title: '跨境电子商务综合技能实训系统',
            subtitle: '从 0 到 1 设计与落地，基于企业岗位调研构建业务模型，将教学、竞赛与游戏化机制融合为一体。',
            sections: [
                {
                    title: '0→1 设计开发',
                    items: [
                        '从 0 到 1 参与系统设计与开发落地，完成模块划分、核心流程与规则体系设计。',
                        '深度调研企业岗位内容与能力要求，将真实岗位任务映射为可训练、可考核的实训场景。',
                        '融合游戏化、教学与竞赛多元素，构建可运营的实训与竞赛一体化体验。'
                    ]
                },
                {
                    title: '核心功能模块',
                    items: [
                        '出口业务模块：基于亚马逊的 B2C 运营沙盘，团队分工扮演运营/采购/仓储等角色，覆盖选品采购→刊登优化→广告投放→仓储物流→订单客服→财务管理全链路。',
                        '进口业务模块：模拟进口转内销全流程，覆盖业务洽谈→预算核算→合同签订→船务订舱→网上支付→报关报检→港口提货→商品上架。',
                        '直播电商运营模块：从市场分析、选品刊登到直播策划、直播间装修、直播互动的全流程模拟。'
                    ]
                },
                {
                    title: '系统亮点',
                    items: [
                        '虚拟时间系统：支持周期性经营与竞赛节奏控制。',
                        'AI 订单分配算法：提升订单分配与训练公平性。',
                        '多维评分体系：客观+主观结合，覆盖过程与结果表现。',
                        '随机事件机制：模拟真实经营波动与风险应对。',
                        '实时数据监控：关键指标可视化，支撑教学复盘与竞赛裁判。'
                    ]
                }
            ]
        },
        'huirongke': {
            tag: '增长/电商',
            title: '汇容客',
            subtitle: '围绕增长与交易转化，推进 App 体验重构，并落地 Web 与小程序从 0 到 1 的产品构建。',
            sections: [
                {
                    title: '汇容客 App',
                    items: [
                        '通过分析用户转化路径与用户画像，完成产品调性重构与内容优化。',
                        '上线后 DAU 达万级，留存提升 80%。'
                    ]
                },
                {
                    title: '汇容搜 B2B 商城 Web',
                    items: [
                        '从 0 到 1 完成产品构建：市场调研、用户画像、竞品分析、功能设计、项目推进与产品测试等全流程。'
                    ]
                },
                {
                    title: '汇容销 营销工具小程序',
                    items: [
                        '从 0 到 1 完成产品构建：市场调研、用户分析、竞品分析、功能设计、项目推进、产品测试与产品宣导等研发全流程。'
                    ]
                }
            ]
        },
        'ole-travel': {
            tag: '战略/体验',
            title: '欧了出行',
            subtitle: '参与增长瓶颈期的重新定位与体验优化研究，确定核心竞争点并输出多触点优化方向。',
            sections: [
                {
                    title: '目标',
                    paragraphs: [
                        '为欧了出行确定至少 1 个核心竞争点，并基于该竞争点提出至少 2 个产品优化点。'
                    ]
                },
                {
                    title: '分析与执行',
                    items: [
                        '市场调研：调研网约车定义、发展历史、市场规模等，进行 PEST 分析；结合舆情了解市场动态，讨论并确定机会点聚焦提升用户体验。',
                        '竞品分析：调研“曹操专车”“神州专车”“滴滴出行”等平台动态与市场占比，分析竞品产品模式及生态布局。',
                        '用户调研：确定目标用户群，基于人口统计学数据、用户行为与态度分析输出用户画像与用户旅程地图。',
                        '核心竞争点与方案：基于用研结果，确定产品核心竞争点主打女性出行；形成 App 优化方向。',
                        '触点优化：针对媒介触点与物理触点，输出结构、交互、视觉不良点/bug 的优化建议，并结合真实使用情景优化关键流程触点。'
                    ]
                }
            ]
        }
    };

    const roadshows = {
        'support': {
            tag: '路演落地',
            title: '项目技术支持',
            subtitle: '负责项目全流程技术支持相关工作，围绕院校场景及售前、交付环节，精准落实各项技术服务，保障项目顺利推进。',
            media: [
                { src: 'images/8.jpg', alt: '项目技术支持现场' },
                { src: 'images/9.jpg', alt: '项目技术支持现场' }
            ],
            sections: [
                {
                    title: '院校线下技能大赛技术支持',
                    items: [
                        '聚焦院校线下技能大赛场景，全程提供全方位技术支撑，确保大赛顺利开展。',
                        '赛前系统部署：根据大赛需求搭建适配的软硬件环境，完成系统安装、参数配置、网络调试等操作，保障系统稳定性与兼容性。',
                        '赛前线下全面测试：模拟大赛全流程场景，排查系统漏洞、运行故障及网络隐患，优化系统响应速度，避免比赛过程中出现技术问题。',
                        '系统培训：面向参赛师生及工作人员讲解系统操作流程、功能模块、注意事项及常见问题解决方法，确保相关人员熟练掌握系统使用技巧，保障大赛期间系统操作顺畅。'
                    ]
                },
                {
                    title: '售前阶段系统培训与演示',
                    items: [
                        '配合售前环节开展技术服务，助力客户了解系统核心价值与使用方法。',
                        '定制演示方案：根据客户（主要为院校）需求定制专属培训演示方案，现场进行系统功能演示，直观展示系统的核心优势、操作逻辑及适配院校教学、管理的相关功能。',
                        '专业答疑：针对客户提出的技术疑问，进行专业、细致的系统讲解，结合院校实际应用场景解读系统的适配性与实用性。',
                        '协同对接：协助售前团队解答系统部署、后期维护、功能拓展等方面需求，配合完成客户沟通对接，提升客户对系统的认可度。'
                    ]
                },
                {
                    title: '院校线下交付部署',
                    items: [
                        '负责院校场景下系统线下交付与部署实施，确保系统成功落地并正常投入使用。',
                        '交付规划：提前与院校对接交付需求，确认部署场地、软硬件条件及时间节点，制定详细交付部署计划。',
                        '现场部署：完成系统安装、调试、数据迁移、权限配置等全流程工作，严格按标准规范操作，保障部署质量。',
                        '试运行与培训：部署完成后开展试运行测试，排查潜在问题并优化运行效果；对院校管理人员进行操作及维护培训，讲解日常注意事项与基础故障排查方法，确保院校可独立顺畅使用系统并完成验收。'
                    ]
                }
            ]
        },
        'training': {
            tag: '路演落地',
            title: '培训交流',
            subtitle: '培训交流相关工作核心围绕内部赋能与外部客户宣讲两大核心方向，独立推进各项培训工作落地，助力产品推广与客户认知提升。',
            media: [
                { src: 'images/5.jpg', alt: '培训交流现场' },
                { src: 'images/6.jpg', alt: '培训交流现场' },
                { src: 'images/7.jpg', alt: '培训交流现场' }
            ],
            sections: [
                {
                    title: '内部营销人员系统讲解培训',
                    items: [
                        '专项负责内部营销人员的产品系统讲解培训，帮助营销人员深度理解产品、精准提炼卖点，提升产品推广专业性。',
                        '培训准备：结合产品技术原理、核心功能模块及应用场景梳理培训重点，编制贴合营销人员需求的培训课件，将复杂技术内容转化为通俗易懂的讲解要点。',
                        '培训实施：通过理论讲解、案例分析、现场演示等方式，拆解产品核心优势、功能亮点及差异化特色；结合不同客户群体需求指导提炼适配卖点与推广重点。',
                        '培训复盘：收集营销人员疑问并针对性答疑，协助梳理推广思路，确保营销人员熟练掌握产品核心逻辑并精准传递产品价值。'
                    ]
                },
                {
                    title: '公司目标客户培训宣讲全流程实施',
                    items: [
                        '参与公司定期面向目标客户的培训宣讲活动，独立负责新技术、新产品培训会全流程实施，确保宣讲效果达标。',
                        '前期筹备：调研目标客户行业特点、实际需求与核心痛点，结合新技术/新产品特性梳理宣讲核心内容与重点，编制贴合客户需求的宣讲课件，设计简洁易懂、互动性强的宣讲方式。',
                        '宣讲实施：独立开展现场宣讲，清晰讲解核心功能、应用场景、使用优势与落地价值；及时回应客户疑问，灵活调整宣讲节奏与内容，提升客户参与度。',
                        '宣讲复盘：收集客户反馈，整理宣讲过程问题与不足形成总结报告，为后续宣讲优化提供参考，提升客户对公司产品的认知度与认可度。'
                    ]
                }
            ]
        }
    };

    const escapeHtml = (value) => {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    };

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxPrev = lightbox ? lightbox.querySelector('[data-lightbox-prev]') : null;
    const lightboxNext = lightbox ? lightbox.querySelector('[data-lightbox-next]') : null;
    let lightboxItems = [];
    let lightboxIndex = 0;

    const closeLightbox = () => {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = projectModal && projectModal.classList.contains('active') ? 'hidden' : '';
    };

    const renderLightbox = () => {
        if (!lightbox || !lightboxImage) return;
        const item = lightboxItems[lightboxIndex];
        if (!item) return;
        lightboxImage.src = item.src;
        lightboxImage.alt = item.alt || '';
        if (lightboxCaption) lightboxCaption.textContent = item.alt || '';
        if (lightboxPrev) lightboxPrev.disabled = lightboxItems.length <= 1;
        if (lightboxNext) lightboxNext.disabled = lightboxItems.length <= 1;
    };

    const openLightbox = (items, index) => {
        if (!lightbox || !Array.isArray(items) || !items.length) return;
        lightboxItems = items;
        lightboxIndex = Math.min(Math.max(Number(index) || 0, 0), items.length - 1);
        renderLightbox();
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        const closeBtn = lightbox.querySelector('[data-lightbox-close]');
        if (closeBtn) closeBtn.focus();
    };

    const stepLightbox = (delta) => {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        if (lightboxItems.length <= 1) return;
        lightboxIndex = (lightboxIndex + delta + lightboxItems.length) % lightboxItems.length;
        renderLightbox();
    };

    const renderModal = (project) => {
        if (!project) return;
        projectModalTag.textContent = project.tag;
        projectModalTitle.textContent = project.title;
        projectModalSubtitle.textContent = project.subtitle;
        const sectionsHtml = project.sections.map(section => {
            const paragraphs = (section.paragraphs || []).map(p => `<p>${p}</p>`).join('');
            const media = (section.media || []).length
                ? `<div class="modal-media-grid">${section.media.map(m => `<img src="${escapeHtml(m.src)}" alt="${escapeHtml(m.alt || '')}" loading="lazy" decoding="async">`).join('')}</div>`
                : '';
            const items = (section.items || []).length
                ? `<ul class="project-modal-list">${section.items.map(i => `<li>${i}</li>`).join('')}</ul>`
                : '';
            if (media) {
                return `<div class="project-modal-section project-modal-section--with-media"><div class="modal-media">${media}</div><div class="modal-copy"><h3>${section.title}</h3>${paragraphs}${items}</div></div>`;
            }
            return `<div class="project-modal-section"><h3>${section.title}</h3>${paragraphs}${items}</div>`;
        }).join('');
        const gallery = (project.media || []).length
            ? `<div class="project-modal-section roadshow-gallery"><div class="roadshow-gallery-header"><h3>现场图集</h3><div class="roadshow-gallery-actions"><button type="button" class="roadshow-gallery-btn" data-gallery-prev aria-label="向左滚动">‹</button><button type="button" class="roadshow-gallery-btn" data-gallery-next aria-label="向右滚动">›</button></div></div><div class="roadshow-gallery-track" data-gallery-track>${project.media.map((m, idx) => `<button type="button" class="roadshow-gallery-item" data-gallery-index="${idx}" aria-label="查看大图：${escapeHtml(m.alt || '现场图')}"><img src="${escapeHtml(m.src)}" alt="${escapeHtml(m.alt || '')}" loading="lazy" decoding="async"></button>`).join('')}</div></div>`
            : '';
        if (gallery && project.tag === '路演落地') {
            projectModalBody.innerHTML = `${sectionsHtml}${gallery}`;
            const track = projectModalBody.querySelector('[data-gallery-track]');
            if (track) {
                const scrollByCard = (dir) => {
                    const first = track.querySelector('.roadshow-gallery-item');
                    const step = first ? first.getBoundingClientRect().width + 12 : 260;
                    track.scrollBy({ left: dir * step, behavior: 'smooth' });
                };
                const prevBtn = projectModalBody.querySelector('[data-gallery-prev]');
                const nextBtn = projectModalBody.querySelector('[data-gallery-next]');
                if (prevBtn) prevBtn.addEventListener('click', () => scrollByCard(-1));
                if (nextBtn) nextBtn.addEventListener('click', () => scrollByCard(1));
                track.querySelectorAll('.roadshow-gallery-item[data-gallery-index]').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const idx = Number(btn.getAttribute('data-gallery-index')) || 0;
                        openLightbox(project.media, idx);
                    });
                });
            }
            return;
        }
        projectModalBody.innerHTML = `${gallery}${sectionsHtml}`;
    };

    const closeProjectModal = () => {
        if (!projectModal || !projectModal.classList.contains('active')) return;
        projectModal.classList.remove('active');
        projectModal.classList.remove('is-roadshow');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = lightbox && lightbox.classList.contains('active') ? 'hidden' : '';
        if (closeProjectModal.lastActiveElement && typeof closeProjectModal.lastActiveElement.focus === 'function') {
            closeProjectModal.lastActiveElement.focus();
        }
    };

    const openModal = (payload, triggerEl) => {
        if (!projectModal) return;
        if (!payload) return;
        closeProjectModal.lastActiveElement = triggerEl || document.activeElement;
        projectModal.classList.toggle('is-roadshow', payload.tag === '路演落地');
        renderModal(payload);
        projectModal.classList.add('active');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        const closeBtn = projectModal.querySelector('.project-modal-close');
        if (closeBtn) closeBtn.focus();
    };

    const openProjectModal = (projectId, triggerEl) => {
        if (!projectModal) return;
        const project = projects[projectId];
        if (!project) return;
        openModal(project, triggerEl);
    };

    document.querySelectorAll('.project-card[data-project]').forEach(card => {
        card.addEventListener('click', () => {
            openProjectModal(card.getAttribute('data-project'), card);
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProjectModal(card.getAttribute('data-project'), card);
            }
        });
    });

    document.querySelectorAll('.roadshow-card[data-roadshow]').forEach(card => {
        card.addEventListener('click', () => {
            openModal(roadshows[card.getAttribute('data-roadshow')], card);
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(roadshows[card.getAttribute('data-roadshow')], card);
            }
        });
    });

    if (projectModal) {
        projectModal.querySelectorAll('[data-modal-close]').forEach(el => {
            el.addEventListener('click', closeProjectModal);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeProjectModal();
        });
    }

    if (lightbox) {
        lightbox.querySelectorAll('[data-lightbox-close]').forEach(el => {
            el.addEventListener('click', closeLightbox);
        });
        if (lightboxPrev) lightboxPrev.addEventListener('click', () => stepLightbox(-1));
        if (lightboxNext) lightboxNext.addEventListener('click', () => stepLightbox(1));
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') stepLightbox(-1);
            if (e.key === 'ArrowRight') stepLightbox(1);
        });
    }

    const heroShapes = document.querySelectorAll('.shape');
    heroShapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 0.2}s`;
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                setTimeout(() => {
                    const offset = 0;
                    const targetPosition = targetElement.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        });
    });

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
});
