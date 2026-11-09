// Asset module ensuring all media are bundled via ES module imports for GitHub Pages compatibility
import brandLogo from './brand_logo.png';
import brandLogoCompact from './brand_logo_compact.png';
import adelaideLocalGovStructure from './images/adelaide_local_government_structure_1793614827159.jpg';
import adelaideTownHallChamber from './images/adelaide_town_hall_chamber_1793613978251.jpg';
import adelaideFounderPortrait from './images/adelaide_founder_portrait_1793613978334.jpg';
import adelaideUrbanConsultation from './images/adelaide_urban_consultation_1793613978118.jpg';
import adelaideCivicCandidateEngagement from './images/adelaide_civic_candidate_engagement_1794199429407.jpg';

export const civicImages = {
  logo: brandLogo,
  logoCompact: brandLogoCompact,
  hero: adelaideLocalGovStructure,
  chamber: adelaideTownHallChamber,
  founder: adelaideFounderPortrait,
  consultation: adelaideUrbanConsultation,
  candidateEngagement: adelaideCivicCandidateEngagement,
};
