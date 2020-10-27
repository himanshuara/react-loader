import React from 'react';
import { GhostSkeleton, useGSkeletonData } from '../ghost-skeleton/ghostSkeleton';
import { Icon } from '../micro-components/icons';
import {Text} from '../micro-components/text';

const styles = {
    card: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '0.0rem',
  
    },
    main: {
      marginLeft: '1rem',
      flexGrow: 1
    },
    title: {
      paddingTop: '0',
      fontWeight: '700',
    },
    author: {
      marginTop: '.3rem',
      fontSize: '.8rem',
    },
    stars: {
      marginTop: '.5rem',
      display: 'flex',
      alignItems: 'center',
    },
    starCount: {
      marginLeft: '.5rem',
      fontSize: '.8rem',
    }
  }
export const ListItems = ({
  list = [],
  isDataLoading = false,
  iconName
}) => {

  const { data, connector } = useGSkeletonData({
    list,
    loaderData: [{ id: 1 }],
    isDataLoadingFn: () => isDataLoading,
  })
  //const removeList = !isDataLoading && !data.length;
  return (
    <GhostSkeleton connect={connector}>
      {<div className="list-wrapper">
        {data.map((datum) => <div className={isDataLoading?'list-item loading' : 'list-item'}  key={datum.id} style={styles.card}>
        <Icon name={iconName} />
        <div style={styles.main}>
          <Text style={styles.title}>{datum.description}</Text>
          <Text style={styles.author}>{datum.author}</Text>
          <div style={styles.stars}>
            <Icon size={25} name="star" />
            <Text style={styles.starCount}>{datum.stars}</Text>
          </div>
        </div>
      </div>)}
      </div>
      }
    </GhostSkeleton>
  )
}