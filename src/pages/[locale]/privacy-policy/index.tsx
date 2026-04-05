import GenericLegal from '@/components/GenericLegal';
import SEO from '@/components/SEO';
import { useTranslations } from 'next-intl';
export { getStaticPaths, getStaticProps } from '@/i18n/staticProps';

export default function PrivacyPolicy() {
    const t = useTranslations('privacy-policy');

    return (
        <>
            <SEO title={t('seo-title')} description={t('seo-description')} keywords={t('seo-keywords')} canonical={t('seo-canonical')} />
            <div className="bg-black/40 backdrop-blur-sm">
                <GenericLegal type="privacy-policy" />
            </div>
        </>
    );
}
