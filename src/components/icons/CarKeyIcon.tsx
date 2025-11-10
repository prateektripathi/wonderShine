const SparkleSmallIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Central star */}
    <path d="M12 2 L13 8 L19 8.5 L14 12 L15 18 L12 14 L9 18 L10 12 L5 8.5 L11 8 Z" />
    {/* Small sparkles */}
    <line x1="5" y1="5" x2="6" y2="6" />
    <line x1="18" y1="6" x2="19" y2="7" />
    <line x1="6" y1="18" x2="7" y2="17" />
    <line x1="18" y1="18" x2="19" y2="17" />
  </svg>
);

export default SparkleSmallIcon;
