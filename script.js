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
            title: '优优云平台（学习平台重构）',
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
            title: '汇容客（App & B2B商城 & 营销小程序）',
            subtitle: '围绕增长与交易转化，推进 App 体验重构，并落地 Web 与小程序从 0 到 1 的产品构建。',
            sections: [
                {
                    title: '汇容客（App）',
                    items: [
                        '通过分析用户转化路径与用户画像，完成产品调性重构与内容优化。',
                        '上线后 DAU 达万级，留存提升 80%。'
                    ]
                },
                {
                    title: '汇容搜 B2B 商城（Web）',
                    items: [
                        '从 0 到 1 完成产品构建：市场调研、用户画像、竞品分析、功能设计、项目推进与产品测试等全流程。'
                    ]
                },
                {
                    title: '汇容销（营销工具小程序）',
                    items: [
                        '从 0 到 1 完成产品构建：市场调研、用户分析、竞品分析、功能设计、项目推进、产品测试与产品宣导等研发全流程。'
                    ]
                }
            ]
        },
        'ole-travel': {
            tag: '战略/体验',
            title: '欧了出行（新能源网约车优化）',
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

    const renderModal = (project) => {
        if (!project) return;
        projectModalTag.textContent = project.tag;
        projectModalTitle.textContent = project.title;
        projectModalSubtitle.textContent = project.subtitle;
        projectModalBody.innerHTML = project.sections.map(section => {
            const paragraphs = (section.paragraphs || []).map(p => `<p>${p}</p>`).join('');
            const items = (section.items || []).length
                ? `<ul class="project-modal-list">${section.items.map(i => `<li>${i}</li>`).join('')}</ul>`
                : '';
            return `<div class="project-modal-section"><h3>${section.title}</h3>${paragraphs}${items}</div>`;
        }).join('');
    };

    const closeProjectModal = () => {
        if (!projectModal || !projectModal.classList.contains('active')) return;
        projectModal.classList.remove('active');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (closeProjectModal.lastActiveElement && typeof closeProjectModal.lastActiveElement.focus === 'function') {
            closeProjectModal.lastActiveElement.focus();
        }
    };

    const openProjectModal = (projectId, triggerEl) => {
        if (!projectModal) return;
        const project = projects[projectId];
        if (!project) return;
        closeProjectModal.lastActiveElement = triggerEl || document.activeElement;
        renderModal(project);
        projectModal.classList.add('active');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        const closeBtn = projectModal.querySelector('[data-modal-close]');
        if (closeBtn) closeBtn.focus();
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

    if (projectModal) {
        projectModal.querySelectorAll('[data-modal-close]').forEach(el => {
            el.addEventListener('click', closeProjectModal);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeProjectModal();
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
