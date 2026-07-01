export const FlagUSA = ({ className }: { className?: string }) => (
    <svg className={className} width={20} height={20} viewBox="0 0 20 20" fill="none" aria-hidden="true">
        {/* Red and white stripes */}
        <rect width={20} height={20} rx={10} fill="#B22234" />
        <rect y="1.538" width={20} height="1.538" fill="white" />
        <rect y="4.615" width={20} height="1.538" fill="white" />
        <rect y="7.692" width={20} height="1.538" fill="white" />
        <rect y="10.769" width={20} height="1.538" fill="white" />
        <rect y="13.846" width={20} height="1.538" fill="white" />
        <rect y="16.923" width={20} height="1.538" fill="white" />
        {/* Blue canton */}
        <rect width={8} height="10.769" rx={0} fill="#3C3B6E" />
        {/* Stars (simplified) */}
        <circle cx={1.6} cy={1.6} r={0.5} fill="white" />
        <circle cx={3.2} cy={1.6} r={0.5} fill="white" />
        <circle cx={4.8} cy={1.6} r={0.5} fill="white" />
        <circle cx={6.4} cy={1.6} r={0.5} fill="white" />
        <circle cx={2.4} cy={2.8} r={0.5} fill="white" />
        <circle cx={4} cy={2.8} r={0.5} fill="white" />
        <circle cx={5.6} cy={2.8} r={0.5} fill="white" />
        <circle cx={1.6} cy={4} r={0.5} fill="white" />
        <circle cx={3.2} cy={4} r={0.5} fill="white" />
        <circle cx={4.8} cy={4} r={0.5} fill="white" />
        <circle cx={6.4} cy={4} r={0.5} fill="white" />
        <circle cx={2.4} cy={5.2} r={0.5} fill="white" />
        <circle cx={4} cy={5.2} r={0.5} fill="white" />
        <circle cx={5.6} cy={5.2} r={0.5} fill="white" />
        <circle cx={1.6} cy={6.4} r={0.5} fill="white" />
        <circle cx={3.2} cy={6.4} r={0.5} fill="white" />
        <circle cx={4.8} cy={6.4} r={0.5} fill="white" />
        <circle cx={6.4} cy={6.4} r={0.5} fill="white" />
        <circle cx={2.4} cy={7.6} r={0.5} fill="white" />
        <circle cx={4} cy={7.6} r={0.5} fill="white" />
        <circle cx={5.6} cy={7.6} r={0.5} fill="white" />
        <circle cx={1.6} cy={8.8} r={0.5} fill="white" />
        <circle cx={3.2} cy={8.8} r={0.5} fill="white" />
        <circle cx={4.8} cy={8.8} r={0.5} fill="white" />
        <circle cx={6.4} cy={8.8} r={0.5} fill="white" />
        {/* Circular mask */}
        <circle cx={10} cy={10} r={10} fill="none" stroke="transparent" />
    </svg>
);
