import GenericLegal from '@/components/GenericLegal';
import SEO from '@/components/SEO';
import { useTranslations } from 'next-intl';
export { getStaticPaths, getStaticProps } from '@/i18n/staticProps';

export default function LegalMentions() {
    const t = useTranslations('legal-mentions');

    return (
        <>
            <SEO title={t('seo-title')} description={t('seo-description')} keywords={t('seo-keywords')} canonical={t('seo-canonical')} />
            <GenericLegal type="legal-mentions" />
        </>
    );
}
