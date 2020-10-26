import React, { useContext } from 'react';

const GhostSkeletonContext = React.createContext(false);

export const GhostSkeleton = ({
  connect,
  children
}) => {
  return (
    <GhostSkeletonContext.Provider value={connect}>
      {children}
    </GhostSkeletonContext.Provider>
  )
}

export const useGSkeletonLoading = () => useContext(GhostSkeletonContext)

export const useGSkeletonData = ({ list, loaderData, isDataLoadingFn }) => {
  const isDataLoading = isDataLoadingFn(list)
  const data = isDataLoading ? loaderData : list;
  return {
    data,
    connector: isDataLoading,
  }
}; 