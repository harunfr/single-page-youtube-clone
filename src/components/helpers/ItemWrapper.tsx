import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  gap?: string;
  flexDirection?: string;
  alignItem?: string;
  src?: string;
}

export default function ItemWrapper({
  className,
  children,
}: Props): React.ReactElement {
  return <div className={className}>{children}</div>;
}
