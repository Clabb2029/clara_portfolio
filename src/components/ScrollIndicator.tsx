import { ChevronsDown } from 'lucide-react';

export default function ScrollIndicator() {
    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="hidden sm:flex w-6 h-10 border-2 border-green-400 rounded-full justify-center">
                <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <div className="flex sm:hidden w-8 h-8 rounded-full justify-center">
                <ChevronsDown className="w-8 h-8 text-green-400 animate-pulse" />
            </div>
        </div>
    );
}
