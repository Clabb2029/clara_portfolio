import GenericLegal from '@/components/GenericLegal';
import SEO from '@/components/SEO';
import { useTranslations } from 'next-intl';
export { getStaticPaths, getStaticProps } from '@/i18n/staticProps';

export default function LegalMentions() {
    const t = useTranslations('legal-mentions');

    return (
        <>
            <SEO title={t('title')} description={t('description')} keywords={t('keywords')} canonical={t('canonical')} />
            <div className="bg-black/40 backdrop-blur-sm">
                <GenericLegal type="legal-mentions" />
            </div>
        </>
    );
}
