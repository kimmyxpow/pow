import MainSection from '@/partials/main-section';
import ProjectSection from '@/partials/project-section';
import ExperienceSection from '@/partials/experience-section';
import AboutSection from '@/partials/about-section';
import PostSection from '@/partials/post-section';
import LenisWrapper from '@/components/lenis-wrapper';

export default function Home() {
    return (
        <LenisWrapper>
            <MainSection />
            <ProjectSection />
            <ExperienceSection />
            <AboutSection />
            <PostSection />
        </LenisWrapper>
    );
}
