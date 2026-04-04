import GenericLegal from '@/components/GenericLegal';
export { getStaticPaths, getStaticProps } from '@/i18n/staticProps';

export default function PrivacyPolicy() {
    return (
        <div className="bg-black/40 backdrop-blur-sm">
            <GenericLegal type="privacy-policy" />
        </div>
    );
}
