import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
}

export default function PageText({
  className,
  children,
}: Props): React.ReactElement {
  return <div className={className}>{children}</div>;
}
