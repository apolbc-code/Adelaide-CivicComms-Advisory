import { AuditQuestion, CaseStudy, ServiceDetail } from '../types';

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

export const CORE_SERVICES: ServiceDetail[] = [
  {
    id: 'consultation',
    number: '01',
    title: 'Community Consultation & YourSAy Integration',
    tagline: 'Transforming statutory requirements into authentic, deliberative constituent consensus.',
    description: 'We design and execute robust community engagement frameworks compliant with the South Australian Local Government Act 1999 and the PDI Act Community Engagement Charter. From suburban masterplans to Annual Business Plans, we blend digital survey architecture, deliberative town halls, and multilingual outreach.',
    statutoryFramework: 'SA Local Government Act 1999 (s50), Planning Development & Infrastructure Act 2016',
    deliverables: [
      'Digital engagement strategy aligned with IAP2 Public Participation Spectrum',
      'Integration with YourSAy, Social Pinpoint, and customized council consultation portals',
      'Plain English and Easy Read consultation summary papers',
      'Closing-the-loop "You Said, We Did" accountability reports for elected members and constituents',
      'Statutory notification design across digital and regional print mediums'
    ],
    idealFor: [
      'Metropolitan councils executing contentious urban infill or traffic calming projects',
      'Regional LGAs modernizing asset management plans',
      'Statutory water, planning, and transport authorities'
    ],
    metricsDelivered: 'Average +240% increase in validated submissions with 78% reduction in invalid or defamatory submissions.'
  },
  {
    id: 'crisis-pr',
    number: '02',
    title: 'Strategic PR & 24/7 Digital Crisis Mitigation',
    tagline: 'Protecting civic integrity, chamber decorum, and constituent trust when controversy strikes.',
    description: 'Civic leaders operate under intense public scrutiny, active social media commentary, and Freedom of Information pressures. We provide senior-level counsel for Mayors, CEOs, and Executive Directors, structuring 24/7 digital monitoring, rapid response media protocols, and compliant comment moderation desks.',
    statutoryFramework: 'Code of Conduct for Council Members, High Court Publisher Precedents, FOI Act 1991 (SA)',
    deliverables: [
      '24/7 incident holding lines, Q&A documents, and executive media talking points',
      'Livestream incident escalation and digital comment moderation protocols',
      'Proactive FOI disclosure strategies that preempt sensationalist press coverage',
      'Crisis simulation workshops tailored to South Australian council chambers and senior executives',
      'Post-crisis reputation restoration and stakeholder confidence rebuilding'
    ],
    idealFor: [
      'Executive Leadership Teams facing sudden code of conduct investigations or council chamber friction',
      'Agencies managing acute infrastructure disruptions or environmental compliance notices',
      'Not-for-profits navigating board governance transitions'
    ],
    metricsDelivered: 'Sub-20 minute verified holding response time during live incidents, eliminating uncorrected media cycles.'
  },
  {
    id: 'social-marketing',
    number: '03',
    title: 'Social Marketing & Public Behaviour Change',
    tagline: 'Evidence-based campaigns that motivate South Australians toward healthier, safer, and more sustainable civic habits.',
    description: 'Public behaviour change requires more than broadcast advertising. We apply behavioral economics, demographic segmentation, and community psychology to create campaigns that shift real-world civic actions — from FOGO (Food Organics Garden Organics) waste compliance to bushfire resilience and active transport.',
    statutoryFramework: 'Green Industries SA Circular Economy Directives, State Public Health Plan SA',
    deliverables: [
      'Behavioral journey mapping and audience barrier analysis across SA LGAs',
      'Targeted digital marketing across Meta, TikTok, LinkedIn, and programmatic display',
      'Multicultural and First Nations community co-designed messaging',
      'Hyper-localised ratepayer collateral (bin tags, interactive rate notice inserts, web apps)',
      'Pre- and post-campaign statistical benchmarking and diversion rate measurement'
    ],
    idealFor: [
      'Regional waste management authorities and circular economy alliances',
      'Council health and sustainability teams with stringent statutory diversion targets',
      'State-wide health promotion and disability inclusion not-for-profits'
    ],
    metricsDelivered: 'Demonstrated up to 44% measured reduction in landfill contamination rates within 90 days of campaign deployment.'
  },
  {
    id: 'caretaker-governance',
    number: '04',
    title: 'Caretaker Convention & Electoral Period Governance',
    tagline: 'Navigating municipal and state election periods with absolute statutory neutrality and precision.',
    description: 'During statutory caretaker periods, local government communications must adhere to stringent restrictions under the Local Government (Elections) Act 1999. We audit social feeds, digital publications, public events, and mayoral press releases to ensure strict non-promotion of candidates while keeping critical ratepayer services functioning seamlessly.',
    statutoryFramework: 'Local Government (Elections) Act 1999 (SA) s91A, Caretaker Guidelines LGA SA',
    deliverables: [
      'Comprehensive digital asset and social media caretaker audit before the notice of election',
      'Caretaker protocols and decision-tree guidelines for internal comms and customer service staff',
      'Candidate neutrality and statutory fact-checking desk',
      'Social media comment freeze or dedicated neutral moderation oversight',
      'Post-election induction briefings for newly elected Mayors and Councillors on digital governance'
    ],
    idealFor: [
      'Council CEOs and Returning Officers safeguarding municipal election neutrality',
      'Communications departments needing independent assurance during contentious polling cycles'
    ],
    metricsDelivered: 'Zero statutory electoral breach complaints across all advised SA council caretaker periods.'
  }
];

export const CIVIC_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'metro-urban-infill',
    title: 'Urban Rezoning Consultation for Metro Adelaide',
    subtitle: 'Turning heated community anxiety into structured, evidence-based urban consensus.',
    clientType: 'Metropolitan Council',
    location: 'Metropolitan Adelaide, South Australia',
    statutoryMandate: 'Planning, Development and Infrastructure Act 2016 (SA) & Community Engagement Charter',
    challenge: 'A proposed medium-density residential code amendment sparked coordinated social media backlash, misinformation concerning tree canopy loss, and threats of legal appeals against the council administration.',
    intervention: 'Adelaide CivicComms Advisory deployed an interactive 3D digital zoning portal paired with 4 ward-specific deliberative workshops. We created plain-English comparison cards showing protected mature eucalyptus trees and setback requirements, while running a verified constituent consultation survey integrated with YourSAy.',
    outcomes: [
      {
        metric: '+310%',
        label: 'Validated Submissions',
        context: 'From verified local residents and business owners within 500m of the affected corridor.'
      },
      {
        metric: '62%',
        label: 'Reduction in Misinformation',
        context: 'Measured decrease in false planning claims circulating across suburban Facebook groups.'
      },
      {
        metric: '100%',
        label: 'Unanimous Adoption',
        context: 'Elected members passed the revised code amendment without chamber amendments or statutory challenges.'
      }
    ],
    quote: {
      text: 'The advisory’s rigor and deep understanding of the PDI Act transformed what could have been a toxic council meeting into our most constructive planning debate in a decade.',
      author: 'David Henderson',
      role: 'Director of City Planning & Growth',
      organization: 'Inner Eastern Adelaide LGA'
    },
    tags: ['Urban Planning', 'Deliberative Democracy', 'YourSAy', 'Metro Council']
  },
  {
    id: 'regional-waste-diversion',
    title: 'Barossa & Fleurieu Regional Waste Diversion Social Campaign',
    subtitle: 'Changing ratepayer habits at the kitchen caddy to meet state circular economy targets.',
    clientType: 'Regional LGA',
    location: 'Barossa & Fleurieu Peninsula, SA',
    statutoryMandate: 'Green Industries SA Circular Economy Strategy & Environmental Protection Act',
    challenge: 'Regional councils faced surging landfill levies due to organic waste contamination in general waste bins, especially across high-turnover short-term tourist accommodation and rural townships.',
    intervention: 'We designed "Sort It South Australia" — a high-affinity behavioural nudge campaign utilizing humor, hyper-local agricultural pride, and geo-targeted digital video reels. Bin stickers, cafe partnerships, and real-time township leaderboard updates created positive peer accountability.',
    outcomes: [
      {
        metric: '+44%',
        label: 'Organics Compliance in 90 Days',
        context: 'Weighbridge audits confirmed an immediate lift in clean green bin tonnage.'
      },
      {
        metric: '$180,000+',
        label: 'Landfill Levy Savings',
        context: 'Direct financial savings returned to council ratepayer reserve funds in year one.'
      },
      {
        metric: '18,500',
        label: 'Households Reached',
        context: 'Over 88% digital recall rate across participating regional townships.'
      }
    ],
    quote: {
      text: 'They didn’t just talk about communications; they understood the actual weighbridge economics and waste legislation affecting our regional budget.',
      author: 'Cr. Margaret Walsh',
      role: 'Chairperson of Regional Environment Committee',
      organization: 'Fleurieu Regional Alliance'
    },
    tags: ['Behaviour Change', 'Waste & Sustainability', 'Regional SA', 'Community Pride']
  },
  {
    id: 'chamber-crisis-protocol',
    title: 'High-Stress Council Chamber Live-Stream Crisis Management',
    subtitle: 'Insulating civic leaders and maintaining democratic order during contentious chamber debates.',
    clientType: 'Statutory Authority',
    location: 'Adelaide Hills & Southern Suburbs',
    statutoryMandate: 'SA Local Government Act 1999 (s90/s91) & Parliamentary Privilege Standards',
    challenge: 'A contentious community asset divestment attracted coordinated activist disruptions inside the public gallery, accompanied by doxxing threats against council staff on unmoderated live chat streams.',
    intervention: 'We deployed our 24/7 Civic Shield protocol: transitioning the live stream to a 30-second broadcast buffer with pre-approved civic holding cards, setting up a legally verified social moderation filter under High Court publisher precedents, and coordinating real-time officer briefing notes.',
    outcomes: [
      {
        metric: '0',
        label: 'Statutory FOI Disputes',
        context: 'Every public record decision was fully documented in compliance with State Records regulations.'
      },
      {
        metric: '100%',
        label: 'Chamber Safety & Continuity',
        context: 'Elected members conducted statutory business without interruption to democratic voting records.'
      },
      {
        metric: '< 15 min',
        label: 'Media Clarification Speed',
        context: 'Accurate media releases issued to ABC Adelaide and The Advertiser before speculative coverage gained traction.'
      }
    ],
    quote: {
      text: 'Having senior advisors who had managed high-stakes parliamentary situations meant our staff felt protected and our council maintained complete legal composure.',
      author: 'Pauline R. King PSM',
      role: 'Chief Executive Officer',
      organization: 'Adelaide Regional LGA'
    },
    tags: ['Crisis PR', 'Chamber Governance', 'Defamation Shield', 'Statutory Authority']
  },
  {
    id: 'disability-nfp-accessibility',
    title: 'State-wide Disability & Ageing NFP Digital Accessibility Overhaul',
    subtitle: 'Empowering 45,000 South Australians through inclusive, WCAG 2.1 AA certified public communications.',
    clientType: 'Not-For-Profit',
    location: 'State-wide South Australia',
    statutoryMandate: 'Disability Inclusion Act 2018 (SA) & UN Convention on the Rights of Persons with Disabilities',
    challenge: 'A historic South Australian health and aged care advocacy organization struggled with inaccessible PDF-heavy resources, low digital reach among older regional residents, and dated constituent feedback systems.',
    intervention: 'Adelaide CivicComms conducted an exhaustive WCAG 2.1 AA code and content audit, designed an accessible constituent voice portal with text-to-speech, high-contrast themes, and Easy Read summaries, and trained 35 staff in plain-language writing.',
    outcomes: [
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
        label: 'Accessibility Complaints',
        context: 'First year in organization history with zero compliance complaints from constituent bodies.'
      }
    ],
    quote: {
      text: 'CivicComms showed us that accessibility is not a compliance chore — it is the very foundation of democratic equity and constituent respect.',
      author: 'Elena Rossi',
      role: 'Chief Executive Officer',
      organization: 'South Australian Ageing & Inclusion Network'
    },
    tags: ['Accessibility', 'WCAG 2.1 AA', 'Not-For-Profit', 'Human Rights']
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

export const GOVERNANCE_PILLARS = [
  {
    pillar: 'Statutory Integrity',
    description: 'Every word, campaign, and consultation strictly aligns with the SA Local Government Act 1999, PDI Act, and Caretaker conventions.',
    badge: 'Legal & Democratic Rigour'
  },
  {
    pillar: 'Radical Digital Inclusivity',
    description: 'Uncompromising adherence to WCAG 2.1 AA standards, ensuring all residents — regardless of age, ability, or background — have an equal civic voice.',
    badge: 'Democratic Equity'
  },
  {
    pillar: 'Evidence-Based Behaviour Change',
    description: 'Applying behavioural economics and verifiable data to drive measurable community outcomes in waste, health, and civic harmony.',
    badge: 'Measurable Impact'
  },
  {
    pillar: 'Rapid Reputation Defense',
    description: 'Protecting democratic institutions and public servants from disinformation, bad-faith attacks, and unmoderated digital hostility.',
    badge: 'Institutional Resilience'
  }
];

export const INSIGHT_ARTICLES = [
  {
    id: 'caretaker-guide-2026',
    title: 'Navigating the 2026 SA Local Government Caretaker Period: The Digital Survival Guide',
    author: 'Principal Advisory Team',
    category: 'Electoral Law & Governance',
    readTime: '6 min read',
    date: 'October 2026',
    summary: 'Why standard social media marketing during council caretaker periods triggers statutory complaints — and how to construct a legally watertight content freeze without starving residents of essential services.',
    keyTakeaway: 'Section 91A of the Local Government (Elections) Act 1999 strictly prohibits council-funded promotion of electoral candidates. Even a routine Facebook photo of the incumbent Mayor opening a library can invalidate an election.'
  },
  {
    id: 'town-halls-vs-yoursay',
    title: 'Why Traditional Town Halls Fail Younger Ratepayers (and How Blended Models Succeed)',
    author: 'Community Engagement Practice',
    category: 'Public Consultation',
    readTime: '8 min read',
    date: 'September 2026',
    summary: 'Analysis of 120,000 public submissions across Adelaide councils reveals that standard Tuesday evening physical meetings capture less than 3% of residents under 40. How to deploy digital-first deliberative polling.',
    keyTakeaway: 'Asymmetric consultation times disenfranchise working parents, shift workers, and young renters. Blended digital consultations deliver 4x higher demographic representation.'
  },
  {
    id: 'moderation-vs-censorship',
    title: 'Constituent Moderation vs. Censorship: The Legal Guardrails Every SA Council CEO Must Know',
    author: 'Risk & Reputation Counsel',
    category: 'Media Law & Risk',
    readTime: '7 min read',
    date: 'August 2026',
    summary: 'The delicate constitutional boundary between protecting staff from defamatory abuse and respecting the implied freedom of political communication on official local government digital channels.',
    keyTakeaway: 'Councils cannot simply ban vocal critics; however, unmoderated third-party defamation on council pages leaves the administration liable under the High Court Voller ruling.'
  }
];
