export const FlagChina = ({ className }: { className?: string }) => (
    <svg className={className} width={20} height={20} viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect width={20} height={20} rx={10} fill="#DE2910" />
        {/* Large star */}
        <polygon points="5,3.5 5.9,6.2 8.8,6.2 6.5,7.9 7.4,10.6 5,8.9 2.6,10.6 3.5,7.9 1.2,6.2 4.1,6.2" fill="#FFDE00" />
        {/* Four small stars */}
        <polygon points="10,2 10.5,3.5 12,3.5 10.8,4.4 11.3,5.9 10,5 8.7,5.9 9.2,4.4 8,3.5 9.5,3.5" fill="#FFDE00" />
        <polygon points="12,4.5 12.5,6 14,6 12.8,6.9 13.3,8.4 12,7.5 10.7,8.4 11.2,6.9 10,6 11.5,6" fill="#FFDE00" />
        <polygon points="12,7.5 12.5,9 14,9 12.8,9.9 13.3,11.4 12,10.5 10.7,11.4 11.2,9.9 10,9 11.5,9" fill="#FFDE00" />
        <polygon points="10,10 10.5,11.5 12,11.5 10.8,12.4 11.3,13.9 10,13 8.7,13.9 9.2,12.4 8,11.5 9.5,11.5" fill="#FFDE00" />
    </svg>
);
