import { useRouteMatch, Link as RouterLink } from 'react-router-dom';
import './Link.css';

type Props = {
  to: string;
  activeOnlyWhenExact: boolean;
  className?: string;
};

const Link: React.FC<Props> = ({
  to,
  children,
  activeOnlyWhenExact,
  className,
}) => {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <RouterLink
      to={to}
      className={`Link ${match ? 'is-active' : ''} ${className}`}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
