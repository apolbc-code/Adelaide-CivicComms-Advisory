import { 
  AuditQuestion, 
  CaseStudy, 
  ServicePillar, 
  AudiencePainPoint, 
  DownloadableResource, 
  InsightArticle 
} from '../types';

export const WHY_US_PILLARS = [
  {
    title: '18+ Years Public Affairs Experience',
    desc: 'Founded by a senior practitioner with deep experience directing parliamentary press offices, ministerial media operations, and high-profile public campaigns across South Australia.'
  },
  {
    title: 'Governance-Aware Communication',
    desc: 'Deep familiarity with the South Australian Local Government Act 1999, Caretaker conventions, Freedom of Information (FOI) laws, and statutory probity standards.'
  },
  {
    title: 'Community Engagement Specialists',
    desc: 'IAP2-certified frameworks aligned with the State Government YourSAy approach and Planning, Development and Infrastructure Act Community Engagement Charters.'
  },
  {
    title: 'Strategic PR & Reputation Management',
    desc: 'Proven crisis mitigation methodologies protecting civic institutions, council chambers, and elected officials from unmoderated digital hostility.'
  },
  {
    title: 'Digital Marketing for Public Sector',
    desc: 'Evidence-based digital outreach, plain-English content transformation, and strict WCAG 2.1 AA accessibility ensuring democratic inclusivity for all residents.'
  },
  {
    title: 'Election Communications Expertise',
    desc: 'Specialist political marketing and candidate visibility strategies for local government elections, community independents, and civic leaders.'
  }
];

export const AUDIENCE_PAIN_POINTS: AudiencePainPoint[] = [
  {
    segment: 'Councils & Local Government',
    subtitle: 'For CEOs, Mayors, Councillors, Communications & Community Experience Leaders',
    points: [
      'Low community participation & public consultation fatigue',
      'Poor survey response rates and unrepresentative feedback',
      'Vocal online minorities spreading social media misinformation',
      'Complex policy documents failing to resonate with everyday ratepayers',
      'Statutory caretaker and council election compliance anxiety',
      'Limited internal communication resources under constant operational strain'
    ],
    solution: 'We deploy structured deliberative engagement, plain-English digital summaries, compliant comment moderation frameworks, and strategic executive PR that de-escalates controversy.',
    ctaText: 'Explore Council Solutions',
    targetPage: 'services'
  },
  {
    segment: 'Not-For-Profits & Community Organisations',
    subtitle: 'For NFP CEOs, Advocacy Groups, Social Impact Leaders & Grant-Funded Bodies',
    points: [
      'Constrained operational budgets and small marketing teams',
      'Staff burnout trying to handle multiple communication channels',
      'Low public awareness in an overcrowded digital landscape',
      'Difficulty demonstrating measurable social impact to funding bodies',
      'Fundraising and recurring donor acquisition challenges',
      'Limited in-house digital accessibility (WCAG) and policy expertise'
    ],
    solution: 'We design high-impact social marketing campaigns, evidence-based storytelling, accessible constituent portals, and grant-ready impact reporting that amplify your community mission.',
    ctaText: 'View Not-For-Profit Services',
    targetPage: 'services'
  },
  {
    segment: 'Political Candidates & Civic Leaders',
    subtitle: 'For Mayoral Candidates, Council Election Hopefuls, Incumbents & Community Independents',
    points: [
      'Low name recognition and crowded local ward ballots',
      'Inconsistent policy messaging across flyers, doors, and social media',
      'Limited campaign resources without party-machine backing',
      'Voter apathy and disengagement with local government issues',
      'Reputation vulnerabilities and hostile online attacks during campaigns',
      'Navigating complex local government election rules and disclosure laws'
    ],
    solution: 'We craft authentic candidate branding, grassroots community outreach plans, compliant digital advertising, debate preparation, and rapid reputation defense that win voter trust.',
    ctaText: 'Discover Election Communications',
    targetPage: 'elections'
  }
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'community-engagement',
    letter: 'A',
    title: 'Community Engagement',
    tagline: 'Transforming statutory requirements into authentic, deliberative constituent consensus.',
    description: 'We design and execute robust community engagement frameworks compliant with the South Australian Local Government Act 1999 and the PDI Act Community Engagement Charter. From suburban masterplans to Annual Business Plans, we blend digital survey architecture, deliberative town halls, and multilingual outreach.',
    services: [
      'Public consultation campaigns',
      'Community engagement strategies',
      'Stakeholder engagement & deliberative forums',
      'Community workshops & citizen juries',
      'Consultation planning & statutory notification',
      'Accessible communications & Easy Read formats',
      'YourSAy-aligned engagement approaches'
    ],
    benefits: [
      'Increased participation across diverse demographic wards',
      'Better community trust and collaborative ownership',
      'More informed council decisions backed by defensible data'
    ],
    statutoryFocus: 'SA Local Government Act 1999 (s50), Planning, Development and Infrastructure Act 2016',
    idealFor: [
      'Metropolitan & regional councils executing contentious urban infill or rate modeling',
      'Statutory planning, water, transport, and development authorities',
      'Major public infrastructure consortiums'
    ],
    deliveredMetric: '+240% average lift in validated constituent submissions'
  },
  {
    id: 'strategic-pr',
    letter: 'B',
    title: 'Strategic PR & Public Affairs',
    tagline: 'Protecting institutional credibility, chamber decorum, and constituent trust when scrutiny mounts.',
    description: 'Civic leaders operate under acute public visibility, 24/7 social media chatter, and Freedom of Information scrutiny. We provide senior-level counsel for Mayors, CEOs, and Executive Directors, structuring incident protocols, media briefings, and proactive disclosure.',
    services: [
      'Public affairs strategy & ministerial liaison',
      'Issues management & crisis communications',
      'Media relations & press gallery pitching',
      'Executive communications for Mayors & CEOs',
      'Reputation management & chamber decorum protocols',
      'Speech writing & parliamentary testimony preparation',
      'Stakeholder mapping & key influencer engagement'
    ],
    benefits: [
      'Reduced communication risk during high-profile controversies',
      'Stronger stakeholder and government relations',
      'Increased public confidence and community stability'
    ],
    statutoryFocus: 'High Court Publisher Precedents, FOI Act 1991 (SA), Council Member Code of Conduct',
    idealFor: [
      'Council executive leadership teams facing acute code of conduct scrutiny',
      'Government agencies managing sensitive policy rollouts or regulatory compliance',
      'Peak bodies seeking authoritative public advocacy'
    ],
    deliveredMetric: 'Sub-20 minute verified holding response SLA during active incidents'
  },
  {
    id: 'social-marketing',
    letter: 'C',
    title: 'Social Marketing',
    tagline: 'Evidence-based campaigns that motivate South Australians toward healthier, safer, and more sustainable civic habits.',
    description: 'Public behaviour change requires more than traditional advertising. We apply behavioural economics, demographic segmentation, and community psychology to create campaigns that shift real-world civic actions — from FOGO waste separation to urban greening and public safety.',
    services: [
      'Behaviour change campaigns & nudge frameworks',
      'Campaign development & creative direction',
      'Social media management & constituent moderation',
      'Paid social advertising across Meta, LinkedIn, TikTok',
      'Content marketing & plain-English video production',
      'Community storytelling & human impact showcases',
      'Digital listening & public sentiment tracking'
    ],
    benefits: [
      'Greater awareness among hard-to-reach demographics',
      'Measurable engagement and positive civic action',
      'Improved campaign outcomes with verifiable return on ratepayer investment'
    ],
    statutoryFocus: 'Green Industries SA Circular Economy Strategy, State Public Health Plan SA',
    idealFor: [
      'Regional waste management alliances and environment committees',
      'Council community health, active transport, and sustainability departments',
      'State-wide health promotion and disability inclusion not-for-profits'
    ],
    deliveredMetric: 'Demonstrated up to 44% reduction in landfill contamination within 90 days'
  },
  {
    id: 'election-communications',
    letter: 'D',
    title: 'Election Communications & Candidate Engagement',
    tagline: 'Strategic political communication, candidate visibility, and voter connection for South Australian civic leaders.',
    description: 'We provide ethical, compliant, and strategic political communication services that help local government candidates, community independents, and civic leaders engage voters authentically, communicate policy with clarity, and maintain high public visibility throughout campaign cycles.',
    services: [
      'Campaign communication strategy & roadmap',
      'Candidate positioning and branding (visual & verbal)',
      'Election social media strategy & content planning',
      'Candidate website development & digital hubs',
      'Campaign content planning & video production',
      'Policy communication & plain-English platform summaries',
      'Community outreach planning & door-knocking toolkits',
      'Digital advertising & geo-targeted voter outreach',
      'Media relations, press releases & interview prep',
      'Speech writing & debate preparation support',
      'Volunteer communication & campaign momentum strategies',
      'Community sentiment monitoring & rapid response',
      'Reputation management & online attack defense'
    ],
    benefits: [
      'Stronger candidate recognition and ballot-box recall',
      'Improved voter engagement and grassroots volunteer energy',
      'Consistent, compelling policy messaging across all touchpoints',
      'Increased campaign visibility across digital and local media',
      'Better media exposure and authoritative interview readiness',
      'Stronger community connections that endure beyond election day'
    ],
    statutoryFocus: 'Local Government (Elections) Act 1999 (SA), Electoral Commission of SA (ECSA) guidelines',
    idealFor: [
      'Mayoral candidates and council election contenders',
      'Incumbent councillors seeking re-election or civic advancement',
      'Independent candidates and community-backed civic leaders',
      'Campaign managers and political staff seeking strategic counsel'
    ],
    deliveredMetric: 'Average +340% increase in candidate digital reach and verified volunteer recruitment'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'council-consultation-participation',
    number: '01',
    title: 'Increasing Council Consultation Participation',
    subtitle: 'Transforming contentious urban infill anxiety into structured, representative constituent consensus.',
    clientType: 'Councils & Government',
    location: 'Metropolitan Adelaide, South Australia',
    statutoryMandate: 'Planning, Development and Infrastructure Act 2016 & Community Engagement Charter',
    challenge: 'A metropolitan Adelaide council faced intense community backlash over a proposed residential code amendment. Misinformation regarding tree canopy loss spread rapidly on suburban social media groups, while traditional council town halls were dominated by a vocal minority of opponents.',
    strategy: 'Adelaide CivicComms designed a multi-channel engagement architecture combining an interactive 3D zoning portal, plain-English comparison cards, and 4 ward-specific deliberative citizen workshops integrated with the state YourSAy framework.',
    execution: 'Deployed targeted geotargeted digital explainers, established verified resident polling, and moderated official social comment channels under transparent statutory house rules. Delivered a comprehensive "You Said, We Did" council agenda report prior to chamber voting.',
    results: [
      {
        metric: '+310%',
        label: 'Validated Submissions',
        context: 'From verified local residents within 500m of the affected corridor.'
      },
      {
        metric: '62%',
        label: 'Reduction in Misinformation',
        context: 'Measured decrease in false planning claims across local digital forums.'
      },
      {
        metric: '100%',
        label: 'Unanimous Adoption',
        context: 'Elected members passed the revised code amendment without chamber amendments.'
      }
    ],
    quote: {
      text: 'The advisory’s rigor and deep understanding of the PDI Act transformed what could have been a toxic council meeting into our most constructive planning debate in a decade.',
      author: 'David Henderson',
      role: 'Director of City Planning & Community Experience',
      organization: 'Metropolitan Adelaide Council'
    },
    tags: ['Community Consultation', 'Urban Planning', 'YourSAy', 'Deliberative Democracy']
  },
  {
    id: 'council-reputation-crisis',
    number: '02',
    title: 'Managing a Local Government Reputation Issue',
    subtitle: 'Defusing chamber livestream disruption, social media hostility, and preserving democratic decorum.',
    clientType: 'Councils & Government',
    location: 'Adelaide Hills & Southern Suburbs',
    statutoryMandate: 'SA Local Government Act 1999 (s90/s91) & Parliamentary Privilege Standards',
    challenge: 'A contentious community asset divestment triggered activist protests inside the public gallery, accompanied by doxxing threats against council staff on unmoderated live chat streams and sensationalised local media inquiries.',
    strategy: 'Deployed our 24/7 Civic Shield protocol: transitioning the live stream to a 30-second broadcast buffer with pre-approved civic holding cards, setting up a legally verified social moderation filter under High Court publisher precedents, and coordinating real-time officer briefing notes.',
    execution: 'Drafted immediate factual holding statements for the Mayor and CEO within 15 minutes of the disruption, coordinated with South Australia Police (SAPOL) community liaison, and established a proactive FOI disclosure repository.',
    results: [
      {
        metric: '0',
        label: 'Statutory FOI Disputes',
        context: 'Every public record decision was fully documented in compliance with State Records regulations.'
      },
      {
        metric: '< 15m',
        label: 'Rapid Holding Time',
        context: 'Accurate media releases issued to ABC Adelaide and The Advertiser before speculative coverage gained traction.'
      },
      {
        metric: '100%',
        label: 'Chamber Safety & Continuity',
        context: 'Elected members conducted statutory business without interruption to democratic voting records.'
      }
    ],
    quote: {
      text: 'Having senior advisors who had managed high-stakes parliamentary situations meant our staff felt protected and our council maintained complete legal composure.',
      author: 'Pauline R. King PSM',
      role: 'Chief Executive Officer',
      organization: 'Adelaide Regional LGA'
    },
    tags: ['Crisis PR', 'Chamber Governance', 'Reputation Management', 'Media Relations']
  },
  {
    id: 'nfp-social-impact-campaign',
    number: '03',
    title: 'Delivering a Social Impact Campaign for a Not-for-Profit',
    subtitle: 'Empowering 45,000 South Australians through inclusive, WCAG 2.1 AA certified public communications.',
    clientType: 'Not-For-Profit',
    location: 'State-wide South Australia',
    statutoryMandate: 'Disability Inclusion Act 2018 (SA) & UN Convention on the Rights of Persons with Disabilities',
    challenge: 'A historic South Australian health, aged care, and disability advocacy organisation struggled with inaccessible PDF-heavy resources, low digital reach among older regional residents, and dated constituent feedback systems.',
    strategy: 'Conducted an exhaustive WCAG 2.1 AA code and content audit, designed an accessible constituent voice portal with text-to-speech, high-contrast themes, and Easy Read summaries, and launched an authentic community storytelling campaign.',
    execution: 'Produced 8 documentary video vignettes featuring lived-experience advocates, trained 35 frontline staff in plain-English writing, and restructured grant reporting into interactive visual impact dashboards for funding bodies.',
    results: [
      {
        metric: '100%',
        label: 'WCAG 2.1 AA Certified',
        context: 'Independently audited by Vision Australia accessibility specialists.'
      },
      {
        metric: '2.4x',
        label: 'Constituent Engagement',
        context: 'Direct online service submissions from regional and rural South Australians doubled.'
      },
      {
        metric: 'Zero',
        label: 'Compliance Complaints',
        context: 'First year in organization history with zero compliance complaints from constituent bodies.'
      }
    ],
    quote: {
      text: 'CivicComms showed us that accessibility is not a compliance chore — it is the very foundation of democratic equity and constituent respect.',
      author: 'Elena Rossi',
      role: 'Chief Executive Officer',
      organization: 'South Australian Ageing & Inclusion Network'
    },
    tags: ['Not-for-Profit', 'Social Marketing', 'Accessibility', 'Impact Reporting']
  },
  {
    id: 'candidate-visibility-campaign',
    number: '04',
    title: 'Building Visibility for a First-Time Council Candidate',
    subtitle: 'Empowering a community independent with strategic positioning, digital momentum, and voter connection.',
    clientType: 'Political & Election',
    location: 'City of Adelaide & Metropolitan Suburbs',
    statutoryMandate: 'Local Government (Elections) Act 1999 (SA) & ECSA Campaign Guidelines',
    challenge: 'A first-time independent candidate running for a competitive metropolitan council ward faced low baseline name recognition, zero party-machine funding, and an entrenched multi-term incumbent backed by commercial interests.',
    strategy: 'Adelaide CivicComms created a cohesive "Community First" candidate identity: developing a distinct visual brand, a policy manifesto focused on local pocket parks and rate transparency, an interactive candidate website, and a hyper-localised voter outreach plan.',
    execution: 'Ran targeted social media video reels highlighting ward issues, structured a volunteer door-knocking briefing kit, authored press releases that secured coverage in local community newspapers, and conducted mock debate prep sessions.',
    results: [
      {
        metric: '+340%',
        label: 'Name Recognition',
        context: 'Measured constituent awareness lift across the ward in independent pre-polling surveys.'
      },
      {
        metric: '2.8x',
        label: 'Volunteer Growth',
        context: 'Expanded campaign volunteer team from 4 initial supporters to over 50 active door-knockers.'
      },
      {
        metric: 'Victory',
        label: 'Elected on First Preferences',
        context: 'Secured election to council with 54.2% of primary votes in a contested 5-way ballot.'
      }
    ],
    quote: {
      text: 'As an independent without a political party, Adelaide CivicComms gave me the strategic clarity, message discipline, and professional digital presence to win the trust of my community.',
      author: 'Cr. Sarah Jenkins',
      role: 'Elected Councillor',
      organization: 'Metropolitan Adelaide Council'
    },
    tags: ['Election Communications', 'Candidate Branding', 'Voter Outreach', 'Digital Campaigning']
  }
];

export const DOWNLOADABLE_RESOURCES: DownloadableResource[] = [
  {
    id: 'res-social-media-compliance',
    title: 'SA Council Social Media Compliance Checklist',
    category: 'Local Government Communication',
    format: 'PDF Guide & Checklist',
    pages: '12 Pages',
    description: 'A comprehensive legal and practical audit guide covering comment moderation house rules, caretaker period freezes, defamation liability under Voller, and State Records Act archiving requirements.',
    downloadCount: '840+ Councils & Officers'
  },
  {
    id: 'res-community-engagement-template',
    title: 'Community Engagement Planning Template',
    category: 'Community Engagement',
    format: 'DOCX / PDF Toolkit',
    pages: '18 Pages',
    description: 'An IAP2-aligned, ready-to-use consultation matrix designed specifically for South Australian councils navigating Annual Business Plans, master plans, and rezoning proposals.',
    downloadCount: '1,200+ Downloads'
  },
  {
    id: 'res-crisis-communication-guide',
    title: 'Crisis Communication Readiness Guide',
    category: 'Public Affairs & Risk',
    format: 'Executive Playbook',
    pages: '15 Pages',
    description: 'Step-by-step incident response cascades, pre-approved chamber disruption holding lines, spokesperson protocols, and media management trees for civic CEOs and Mayors.',
    downloadCount: '620+ Executive Briefings'
  },
  {
    id: 'res-stakeholder-mapping-framework',
    title: 'Stakeholder Mapping Framework',
    category: 'Reputation Management',
    format: 'Interactive Excel / PDF',
    pages: '10 Pages',
    description: 'A structured methodology to categorize community influencers, quiet majorities, resident associations, and statutory referral agencies by influence and impact.',
    downloadCount: '950+ Downloads'
  },
  {
    id: 'res-local-election-checklist',
    title: 'Local Election Campaign Planning Checklist',
    category: 'Election Communications',
    format: 'Candidate Toolkit',
    pages: '14 Pages',
    description: 'A strategic, 12-week campaign roadmap for local government candidates and community independents covering branding, voter outreach, ECSA compliance, and debate preparation.',
    downloadCount: '580+ Candidates & Teams'
  }
];

export const INSIGHT_CATEGORIES = [
  'All Categories',
  'Community Engagement',
  'Public Affairs',
  'Local Government Communication',
  'Digital Accessibility',
  'Social Marketing',
  'Election Communications',
  'Political Communication',
  'Reputation Management'
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: 'caretaker-guide-2026',
    title: 'Navigating the SA Local Government Caretaker Period: The Digital Survival Guide',
    author: 'Principal Advisory Team',
    category: 'Local Government Communication',
    readTime: '6 min read',
    date: 'November 2026',
    summary: 'Why standard social media marketing during council caretaker periods triggers statutory complaints — and how to construct a legally watertight content freeze without starving residents of essential services.',
    keyTakeaway: 'Section 91A of the Local Government (Elections) Act 1999 strictly prohibits council-funded promotion of electoral candidates. Even a routine Facebook photo of the incumbent Mayor opening a library can invalidate an election.'
  },
  {
    id: 'candidate-branding-principles',
    title: 'Candidate Branding in Local Elections: How to Stand Out Without a Party Machine',
    author: 'Elections Practice Lead',
    category: 'Election Communications',
    readTime: '7 min read',
    date: 'October 2026',
    summary: 'Independent and community candidates frequently struggle with fragmented messaging. How to define your core narrative, design recognizable visual assets, and communicate hyper-local policy priorities.',
    keyTakeaway: 'Voters in council elections look for community empathy and competence over partisan ideology. A disciplined, 3-pillar policy platform beats a 50-point wish list every time.'
  },
  {
    id: 'town-halls-vs-yoursay',
    title: 'Why Traditional Town Halls Fail Younger Ratepayers (and How Blended Models Succeed)',
    author: 'Community Engagement Practice',
    category: 'Community Engagement',
    readTime: '8 min read',
    date: 'September 2026',
    summary: 'Analysis of 120,000 public submissions across Adelaide councils reveals that standard Tuesday evening physical meetings capture less than 3% of residents under 40. How to deploy digital-first deliberative polling.',
    keyTakeaway: 'Asymmetric consultation times disenfranchise working parents, shift workers, and young renters. Blended digital consultations deliver 4x higher demographic representation.'
  },
  {
    id: 'moderation-vs-censorship',
    title: 'Constituent Moderation vs. Censorship: The Legal Guardrails Every SA Council CEO Must Know',
    author: 'Public Affairs & Risk Counsel',
    category: 'Public Affairs',
    readTime: '7 min read',
    date: 'August 2026',
    summary: 'The delicate constitutional boundary between protecting staff from defamatory abuse and respecting the implied freedom of political communication on official local government digital channels.',
    keyTakeaway: 'Councils cannot simply ban vocal critics; however, unmoderated third-party defamation on council pages leaves the administration liable under the High Court Voller ruling.'
  },
  {
    id: 'accessible-consultation-wcag',
    title: 'Digital Accessibility in Civic Engagement: Why WCAG 2.1 AA is a Democratic Imperative',
    author: 'Digital Inclusivity Team',
    category: 'Digital Accessibility',
    readTime: '5 min read',
    date: 'July 2026',
    summary: 'Over 18% of South Australians live with a permanent disability or age-related impairment. How untagged PDFs and uncaptioned video streams violate statutory human rights mandates.',
    keyTakeaway: 'True civic consultation cannot happen if 1 in 5 citizens cannot read your proposal. Semantic HTML-first consultation summaries are non-negotiable.'
  },
  {
    id: 'reputation-recovery-chamber',
    title: 'Reputation Management in Contested Council Chambers: De-escalating Public Outrage',
    author: 'Crisis & Issues Practice',
    category: 'Reputation Management',
    readTime: '9 min read',
    date: 'June 2026',
    summary: 'When council meetings devolve into viral controversy, spontaneous media statements usually worsen the crisis. How pre-cleared holding protocols and transparent recording build institutional resilience.',
    keyTakeaway: 'The first 60 minutes determine the narrative. Having factual, un-emotive holding statements ready for media inquiry prevents runaway speculation.'
  }
];

export const CORE_VALUES = [
  {
    title: 'Integrity',
    description: 'We hold ourselves to the highest standards of public probity, never compromising truth, statutory duties, or ethical campaign conduct.'
  },
  {
    title: 'Accountability',
    description: 'Public money demands transparent, evidence-based outcomes. We measure results through verifiable community participation and institutional trust.'
  },
  {
    title: 'Accessibility',
    description: 'Democratic participation belongs to every South Australian. We design communications that are universal, inclusive, and WCAG 2.1 AA certified.'
  },
  {
    title: 'Transparency',
    description: 'Clear, plain-English communication that demystifies complex governance, empowering constituents and elected leaders alike.'
  },
  {
    title: 'Community Impact',
    description: 'Every consultation, social marketing initiative, and campaign is designed to leave a lasting, positive social footprint in South Australia.'
  }
];

export const TIMELINE_PHASES = [
  {
    phase: 'Phase 1',
    period: '2005 – 2017',
    title: 'High-Stakes Parliamentary Public Affairs (18+ Yrs)',
    tag: 'Parliamentary & Ministerial Press Gallery',
    summary: 'Directing ministerial press offices, managing national and state press gallery relations, and drafting high-stakes legislative messaging.',
    keyPoints: [
      'Chief Media Advisor to Cabinet Ministers handling regional development, infrastructure, and local government portfolios.',
      'Managed 200+ crisis press conferences, royal commission briefings, and parliamentary inquiry submissions with zero uncorrected retractions.',
      'Authored pivotal ministerial policy statements shaping state-wide local government governance and community infrastructure investments.'
    ]
  },
  {
    phase: 'Phase 2',
    period: '2017 – 2021',
    title: 'Digital Ecosystem Pioneer & Public Engagement Architect',
    tag: 'Government Digital Transformation',
    summary: 'Pioneering early digital constituent interaction systems, democratic consultation portals, and ethical moderation frameworks across South Australia.',
    keyPoints: [
      'Architect of blended digital/in-person consultation methodologies adopted by statutory planning authorities.',
      'Pioneered early social media risk moderation protocols following High Court rulings on digital publisher liability.',
      'Advised statutory boards on digital transparency, FOI proactive release models, and livestreaming best practices.'
    ]
  },
  {
    phase: 'Phase 3',
    period: '2021 – Present',
    title: 'Public Administration & Civic Advisory (Adelaide, SA)',
    tag: 'Adelaide CivicComms Advisory',
    summary: 'Modernizing digital outreach, crisis protection, and public participation for South Australia’s 68 local councils, statutory boards, and NFPs.',
    keyPoints: [
      'Established Adelaide CivicComms Advisory at Victoria Square / Tarntanyangga to provide uncompromised civic counsel.',
      'Pre-qualified panel provider for LGA Procurement and registered SA Tenders advisory partner.',
      'Delivered 90+ successful civic consultations, caretaker audits, and crisis mitigation engagements across SA.'
    ]
  }
];

export const ELECTION_SECTIONS = [
  {
    number: '01',
    title: 'Candidate Branding & Visual Identity',
    description: 'Crafting a distinct, authentic, and memorable visual and verbal identity that reflects your community roots and leadership vision.',
    deliverables: [
      'Visual brand identity (logo, color palette, typography, photo guidelines)',
      'Core campaign slogan and key message narrative',
      'Professional campaign photography creative direction',
      'High-impact campaign flyer, corflute poster, and billboard designs',
      'Launch statement and biographical press release'
    ]
  },
  {
    number: '02',
    title: 'Campaign Communications & Policy Framing',
    description: 'Translating complex community issues into clear, relatable policy platforms that resonate with local voters.',
    deliverables: [
      '3-Pillar core policy platform and policy explainer one-pagers',
      'Door-knocking script and constituent conversation guides',
      'Direct mail and letterbox drop copy tailored to individual suburbs/wards',
      'Speech writing for community candidate forums and meet-the-candidates events',
      'Debate preparation support and mock Q&A sessions'
    ]
  },
  {
    number: '03',
    title: 'Digital Campaigning & Voter Outreach',
    description: 'Building modern digital hubs and running compliant, hyper-targeted digital advertising to maximize name recognition.',
    deliverables: [
      'Fast, mobile-optimized candidate campaign website with volunteer sign-up',
      'Social media content calendar across Meta, LinkedIn, and local community channels',
      'Targeted digital video reels and voter testimonial content',
      'Geo-targeted digital advertising reaching registered voters in your ward',
      'Email newsletter setup and voter mobilization automated workflows'
    ]
  },
  {
    number: '04',
    title: 'Media Relations & Public Profile',
    description: 'Securing authoritative local media coverage and establishing your voice as a credible community champion.',
    deliverables: [
      'Media release distribution to Adelaide metro and regional media outlets',
      'Op-ed placement and letters to the editor on critical community issues',
      'Media interview training and broadcast interview talking points',
      'Rapid response protocol for emerging local controversies',
      'Press liaison and media monitoring throughout the polling window'
    ]
  },
  {
    number: '05',
    title: 'Community Engagement & Grassroots Mobilization',
    description: 'Organizing energised volunteer teams and authentic grassroots listening forums that convert interest into votes.',
    deliverables: [
      'Grassroots volunteer recruitment and onboarding toolkits',
      'Street stall, coffee catch-up, and community listening session roadmaps',
      'Constituent sentiment mapping and feedback tracking',
      'How-to-Vote card design and polling booth volunteer scheduling',
      'Election night results strategy and post-election thank-you communications'
    ]
  }
];

export const CIVIC_AUDIT_QUESTIONS: AuditQuestion[] = [
  {
    id: 'accessibility',
    pillar: 'Digital Inclusivity & WCAG Compliance',
    title: '1. Accessibility Compliance & Constituent Reach',
    question: 'How does your organisation ensure digital consultation platforms, council meeting records, and social updates meet Australian digital accessibility mandates?',
    statutoryReference: 'Disability Inclusion Act 2018 (SA) & Australian Human Rights Commission Guidelines',
    options: [
      {
        id: 'acc_a',
        label: 'Comprehensive WCAG 2.1 AA Audited + Screen-Reader Verified',
        description: 'All public consultation portals, PDF reports, livestreams (live captions), and survey instruments are independently audited and usable by blind, low-vision, and neurodiverse residents.',
        score: 25,
        riskLevel: 'low',
        recommendation: 'Maintain continuous automated testing and schedule biannual lived-experience user testing panels across diverse demographic wards.'
      },
      {
        id: 'acc_b',
        label: 'Standard CMS Accessibility with Occasional Captioning',
        description: 'Websites utilize standard responsive templates with basic contrast, but PDF agendas, maps, and social videos are not consistently remediated or captioned.',
        score: 15,
        riskLevel: 'moderate',
        recommendation: 'Implement automated PDF remediation workflows and mandate machine/human verified closed captioning on all public chamber recordings within 24 hours of broadcast.'
      },
      {
        id: 'acc_c',
        label: 'Unchecked PDFs & Reliance on Image-Only Social Graphics',
        description: 'Public consultation relies heavily on un-tagged scanned PDFs and informational graphic tiles lacking descriptive alt-text on Meta/LinkedIn.',
        score: 5,
        riskLevel: 'critical',
        recommendation: 'Immediate statutory compliance risk under the Disability Inclusion Act 2018 (SA). Transition to semantic HTML-first consultation summaries and institute mandatory alt-text checklists.'
      }
    ]
  },
  {
    id: 'moderation',
    pillar: 'Statutory Moderation & Comment Governance',
    title: '2. Social Comment Moderation & Public Record Legality',
    question: 'What formal framework governs your team’s handling of hostile constituent comments, disinformation, or elected member mentions on official social channels?',
    statutoryReference: 'SA Local Government Act 1999 (s90/s91) & High Court Voller Publisher Precedent',
    options: [
      {
        id: 'mod_a',
        label: 'Published Statutory House Rules with Defamation & Pre-election Logs',
        description: 'Clear constituent terms of engagement, documented transparent moderation criteria, automated record keeping for State Records compliance, and trained moderators active 7 days a week.',
        score: 25,
        riskLevel: 'low',
        recommendation: 'Conduct an annual review of moderation criteria with legal counsel prior to municipal election cycles to ensure caretaker compliance.'
      },
      {
        id: 'mod_b',
        label: 'Ad-Hoc Hiding or Deleting by Communications Officers',
        description: 'Staff manually hide aggressive or rude comments when noticed, without a logged escalation protocol or published moderation charter.',
        score: 10,
        riskLevel: 'high',
        recommendation: 'Ad-hoc comment deletion exposes council to unlawful suppression claims and FOI challenges. Codify an enforceable Social Media Policy with transparent civic house rules.'
      },
      {
        id: 'mod_c',
        label: 'Comments Wholly Disabled or Left Unmonitored Overnight',
        description: 'Channels either have comments turned off (chilling civic engagement) or are left entirely unmonitored on weekends, exposing the council to publisher liability for defamatory user posts.',
        score: 5,
        riskLevel: 'critical',
        recommendation: 'Deploy a hybrid human-protocol moderation desk to keep comment channels open for healthy democratic debate while insulating council from liability.'
      }
    ]
  },
  {
    id: 'feedback_loop',
    pillar: 'Public Accountability & Consultation Closing-the-Loop',
    title: '3. Consultation Feedback Loop & "You Said, We Did" Transparency',
    question: 'When community engagement concludes on an Annual Business Plan or suburban master plan, how are constituent inputs reported back before the council votes?',
    statutoryReference: 'Planning, Development and Infrastructure Act 2016 (Community Engagement Charter) & LGA SA Standards',
    options: [
      {
        id: 'loop_a',
        label: 'Structured Digital Consultation Summary with "You Said, We Did" Matrices',
        description: 'Every participant receives a personalized or published thematic breakdown demonstrating how community submissions directly amended the officer recommendations prior to chamber debate.',
        score: 25,
        riskLevel: 'low',
        recommendation: 'Expand proactive dashboard reporting to showcase geographic heatmaps of community submissions across diverse socioeconomic wards.'
      },
      {
        id: 'loop_b',
        label: 'Dense 400-Page Agenda Appendix with Raw Submissions',
        description: 'Submissions are compiled into an un-indexed council meeting attachment, leaving constituents in the dark about whether their concerns were addressed.',
        score: 12,
        riskLevel: 'moderate',
        recommendation: 'Translate technical chamber appendices into clear 3-minute executive digital digests distributed directly back to all consultation registrants.'
      },
      {
        id: 'loop_c',
        label: 'Consultation Closes with No Direct Constituent Follow-Up',
        description: 'Submissions are gathered but no summary is published outside the final chamber resolution, generating cynicism and accusations of "box-ticking".',
        score: 0,
        riskLevel: 'critical',
        recommendation: 'Erosion of public trust will compromise future ratepayer engagement. Institute mandatory 14-day post-consultation digital feedback reports.'
      }
    ]
  },
  {
    id: 'crisis_protocols',
    pillar: 'Crisis Mitigation & Chamber Livestream Governance',
    title: '4. Rapid Crisis Communications & Chamber Incident Escalation',
    question: 'How prepared is your communications infrastructure for disruptive council chamber meetings, code of conduct leaks, or civic emergency weather events?',
    statutoryReference: 'State Emergency Management Plan (SA) & Council Member Code of Conduct Regulations',
    options: [
      {
        id: 'crisis_a',
        label: 'Pre-Approved 15-Minute Rapid Incident Playbook & Livestream Protocols',
        description: 'Designated spokesperson cascade (CEO/Mayor/Director), pre-cleared legal templates, instant livestream cutover protocol with standby civic messaging, and unified media monitoring.',
        score: 25,
        riskLevel: 'low',
        recommendation: 'Conduct an annual simulation exercise with executive leadership and elected members to test response times under acute media scrutiny.'
      },
      {
        id: 'crisis_b',
        label: 'Informal Emergency Coordination without Clear Pre-Clearance',
        description: 'Drafting statements requires multi-department sign-off during live incidents, resulting in 4-6 hour response delays while social media speculation dominates.',
        score: 10,
        riskLevel: 'high',
        recommendation: 'Establish an executive delegated authority framework allowing factual holding statements to be dispatched within 20 minutes of an emerging incident.'
      },
      {
        id: 'crisis_c',
        label: 'No Incident Protocols — Reactive Crisis Handling',
        description: 'No predefined protocols exist for chamber disruptions or viral misinformation campaigns, leaving individual officers to respond defensively.',
        score: 0,
        riskLevel: 'critical',
        recommendation: 'Urgent risk. High-visibility civic controversies require immediate standard operating procedures to protect organizational integrity and staff safety.'
      }
    ]
  }
];
