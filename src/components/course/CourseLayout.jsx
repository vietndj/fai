'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import AptechProgramSwitcher from '@/components/AptechProgramSwitcher';
import ArenaProgramSwitcher from '@/components/ArenaProgramSwitcher';
import SkillkingProgramSwitcher from '@/components/SkillkingProgramSwitcher';
import JetkingProgramSwitcher from '@/components/JetkingProgramSwitcher';

import CourseHero from './CourseHero';
import CourseOverviewStats from './CourseOverviewStats';
import CourseCurriculumTabs from './CourseCurriculumTabs';
import CourseHighlights from './CourseHighlights';
import CourseCTABanner from './CourseCTABanner';

// Re-export sub-components for selective composition if needed
export {
  CourseHero,
  CourseOverviewStats,
  CourseCurriculumTabs,
  CourseHighlights,
  CourseCTABanner
};

// Brand presets with color tokens, default switchers and watermarks
export const BRAND_PRESETS = {
  aptech: {
    themeClass: 'theme-aptech',
    themeColor: '#f37021',
    badgeTextColor: '#ffffff',
    bgWatermark: 'FPT APTECH',
    brandName: 'FPT Aptech',
    defaultZalo: 'https://zalo.me/fptaptech',
    Switcher: AptechProgramSwitcher
  },
  arena: {
    themeClass: 'theme-arena',
    themeColor: '#ffb600',
    badgeTextColor: '#000000',
    bgWatermark: 'FPT ARENA',
    brandName: 'FPT Arena Multimedia',
    defaultZalo: 'https://zalo.me/fptarenaofficial',
    Switcher: ArenaProgramSwitcher
  },
  skillking: {
    themeClass: 'theme-skillking',
    themeColor: '#09529c',
    badgeTextColor: '#ffffff',
    bgWatermark: 'FPT SKILLKING',
    brandName: 'FPT Skillking',
    defaultZalo: 'https://zalo.me/fptskillkingofficial',
    Switcher: SkillkingProgramSwitcher
  },
  'chip-design': {
    themeClass: 'theme-chip-design',
    themeColor: '#dc2626',
    badgeTextColor: '#ffffff',
    bgWatermark: 'SEMICONDUCTOR',
    brandName: 'FPT Jetking',
    defaultZalo: 'https://zalo.me/jetkingfpt',
    Switcher: JetkingProgramSwitcher
  },
  'ai-agent': {
    themeClass: 'theme-ai-agent',
    themeColor: '#7c3aed',
    badgeTextColor: '#ffffff',
    bgWatermark: 'AI AGENT',
    brandName: 'FPT Jetking',
    defaultZalo: 'https://zalo.me/jetkingfpt',
    Switcher: JetkingProgramSwitcher
  },
  jetking: {
    themeClass: 'theme-chip-design',
    themeColor: '#dc2626',
    badgeTextColor: '#ffffff',
    bgWatermark: 'FPT JETKING',
    brandName: 'FPT Jetking',
    defaultZalo: 'https://zalo.me/jetkingfpt',
    Switcher: JetkingProgramSwitcher
  }
};

export default function CourseLayout({
  // Branding & Theming
  brandKey = 'aptech',
  themeClass: themeClassProp,
  themeColor: themeColorProp,
  badgeTextColor: badgeTextColorProp,

  // Navigation Switcher
  activePath,
  ProgramSwitcher: ProgramSwitcherProp,

  // Hero Section
  bgWatermark: bgWatermarkProp,
  brandBadge,
  brandBadgeStyle,
  title,
  subtitle,
  heroLogo,
  brandLogo,
  description,
  heroCallout,
  coreHighlightBox,
  heroStats,
  bannerImage,
  bannerAlt,

  // Overview / Stats Section
  overviewStats,
  overviewEyebrow,
  overviewTitle,
  overviewDesc,
  overviewSubtitle,
  overviewCards,
  durationBanner,

  // Curriculum Section (5 archetypes)
  curriculumType,
  curriculumEyebrow,
  curriculumTitle,
  curriculumDesc,
  curriculumSubtitle,
  semesters,
  subjects,
  certificate,
  targetCareers,
  courses,
  tracks,
  studioTools,
  shortCourses,
  curriculumSlot,

  // Custom Interstitial Content
  customContent,
  children,

  // Highlights / Why Choose Us Section
  highlights,
  whyChooseUs,
  highlightsEyebrow,
  highlightsTitle,
  highlightsDesc,

  // Bottom CTA Section
  ctaTitle,
  ctaDesc,
  ctaButtonText = 'Tư vấn ngay',
  ctaButtonHref,

  // Admissions & Scholarship Form
  formProps = {},
  CustomForm,
  formWrapperId
}) {
  const [activeSection, setActiveSection] = useState(0);

  // Determine brand preset defaults
  const preset = BRAND_PRESETS[brandKey] || BRAND_PRESETS.aptech;
  const themeClass = themeClassProp || preset.themeClass;
  const themeColor = themeColorProp || preset.themeColor;
  const badgeTextColor = badgeTextColorProp || preset.badgeTextColor;
  const bgWatermark = bgWatermarkProp || preset.bgWatermark;
  const defaultZalo = preset.defaultZalo;

  // ScrollSpy observer for subpage container active section gradient animation
  useEffect(() => {
    const sections = document.querySelectorAll('.beau-hero, .beau-section, .beau-cta-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '-10% 0px -30% 0px'
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Determine active Program Switcher
  const renderSwitcher = () => {
    if (ProgramSwitcherProp) {
      if (typeof ProgramSwitcherProp === 'function') {
        const CustomSwitcher = ProgramSwitcherProp;
        return <CustomSwitcher activePath={activePath} />;
      }
      return ProgramSwitcherProp;
    }
    const DefaultSwitcher = preset.Switcher;
    return DefaultSwitcher ? <DefaultSwitcher activePath={activePath} /> : null;
  };

  // Consolidate Overview Stats data
  const ovStats = overviewStats || {};
  const hasOverview = overviewTitle || ovStats.title || overviewCards || ovStats.cards || durationBanner || ovStats.durationBanner;

  return (
    <div className={`beau-subpage-container ${themeClass} active-sec-${activeSection}`}>
      {/* 1. Sub-program Switcher Bar */}
      {renderSwitcher()}

      {/* 2. Hero Section */}
      <CourseHero
        themeColor={themeColor}
        badgeTextColor={badgeTextColor}
        bgWatermark={bgWatermark}
        brandBadge={brandBadge}
        brandBadgeStyle={brandBadgeStyle}
        title={title}
        subtitle={subtitle}
        heroLogo={heroLogo}
        brandLogo={brandLogo}
        description={description}
        heroCallout={heroCallout}
        coreHighlightBox={coreHighlightBox}
        heroStats={heroStats}
        bannerImage={bannerImage}
        bannerAlt={bannerAlt}
      />

      {/* 3. Overview & Stats Section */}
      {hasOverview && (
        <CourseOverviewStats
          themeColor={themeColor}
          eyebrow={overviewEyebrow || ovStats.eyebrow}
          title={overviewTitle || ovStats.title}
          desc={overviewDesc || ovStats.desc || overviewSubtitle || ovStats.subtitle}
          cards={overviewCards || ovStats.cards}
          durationBanner={durationBanner || ovStats.durationBanner}
        />
      )}

      {/* 4. Curriculum Section (Handles all 5 archetypes OR customSlot) */}
      {curriculumSlot ? (
        curriculumSlot
      ) : (
        <CourseCurriculumTabs
          curriculumType={curriculumType}
          themeColor={themeColor}
          eyebrow={curriculumEyebrow}
          title={curriculumTitle}
          desc={curriculumDesc || curriculumSubtitle}
          semesters={semesters}
          subjects={subjects}
          certificate={certificate}
          targetCareers={targetCareers}
          courses={courses}
          tracks={tracks}
          studioTools={studioTools}
          shortCourses={shortCourses}
        />
      )}

      {/* 5. Custom Content Slot (Certificates, Career Grids, Creative Tools) */}
      {customContent || children}

      {/* 6. Highlights / Why Choose Us Section */}
      <CourseHighlights
        themeColor={themeColor}
        eyebrow={highlightsEyebrow}
        title={highlightsTitle}
        desc={highlightsDesc}
        highlights={highlights}
        whyChooseUs={whyChooseUs}
      />

      {/* 7. Bottom CTA Section */}
      <CourseCTABanner
        themeColor={themeColor}
        title={ctaTitle}
        desc={ctaDesc}
        buttonText={ctaButtonText}
        buttonHref={ctaButtonHref || defaultZalo}
      />

      {/* 8. Admissions & Scholarship Form Section */}
      <div id={formWrapperId}>
        {CustomForm ? (
          <CustomForm {...formProps} />
        ) : (
          <ScholarshipFormSection
            brand={formProps.brand || brandKey}
            themeColor={themeColor}
            {...formProps}
          />
        )}
      </div>

      {/* 9. Global Footer */}
      <Footer />
    </div>
  );
}
