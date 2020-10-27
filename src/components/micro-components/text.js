import React from 'react';
import { useGSkeletonLoading } from '../ghost-skeleton/ghostSkeleton';

const skeltonStyles = {
  backgroundColor: '#666666',
  color: 'transparent',
  borderRadius: 8,
}

export const Text = ({
  style = {},
  children,
}) => {
  const isLoading = useGSkeletonLoading();

  return {
    true: <p style={{ ...skeltonStyles, ...style }} className="loading">loading...</p>,
    false: <p style={{ ...style }}>{children}</p>,
  }[isLoading]
}
