import * as React from 'react';

let style: React.CSSProperties = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  width: '1px',
  margin: '-1px',
  padding: 0,
  overflow: 'hidden',
  position: 'absolute',
};

export interface VisuallyHiddenProps {}

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = props => {
  return <div style={style} {...props} />;
};

VisuallyHidden.displayName = 'VisuallyHidden';
