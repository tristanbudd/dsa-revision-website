import { ReactNode } from 'react';

interface InfoBoxProps {
    children: ReactNode;
    type?: 'note' | 'warning' | 'tip' | 'important' | 'definition';
    title?: string;
}

function InfoBox({ children, type = 'note', title }: InfoBoxProps) {
    const styles = {
        note: {
            bg: 'bg-blue-900/30',
            border: 'border-blue-700',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
            ),
            textColor: 'text-blue-300',
            iconColor: 'text-blue-400',
            defaultTitle: 'Note'
        },
        warning: {
            bg: 'bg-yellow-900/30',
            border: 'border-yellow-700',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            ),
            textColor: 'text-yellow-300',
            iconColor: 'text-yellow-400',
            defaultTitle: 'Warning'
        },
        tip: {
            bg: 'bg-green-900/30',
            border: 'border-green-700',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ),
            textColor: 'text-green-300',
            iconColor: 'text-green-400',
            defaultTitle: 'Tip'
        },
        important: {
            bg: 'bg-red-900/30',
            border: 'border-red-700',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            ),
            textColor: 'text-red-300',
            iconColor: 'text-red-400',
            defaultTitle: 'Important'
        },
        definition: {
            bg: 'bg-purple-900/30',
            border: 'border-purple-700',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
            ),
            textColor: 'text-purple-300',
            iconColor: 'text-purple-400',
            defaultTitle: 'Definition'
        }
    };

    const style = styles[type];

    return (
        <div className={`my-6 rounded-lg border ${style.border} ${style.bg} p-4`}>
            <div className="flex items-start gap-3">
                <div className={`${style.iconColor} flex-shrink-0 mt-0.5`}>
                    {style.icon}
                </div>
                <div className="flex-1">
                    {(title || style.defaultTitle) && (
                        <h4 className={`font-semibold ${style.textColor} mb-2`}>
                            {title || style.defaultTitle}
                        </h4>
                    )}
                    <div className={`${style.textColor} text-sm leading-relaxed`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoBox;
