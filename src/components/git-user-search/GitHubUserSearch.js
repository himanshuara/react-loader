import React,{useState} from 'react';
import {Icon} from '../micro-components/icons';
import {Text} from '../micro-components/text';
import {SearchComponent} from '../searchComponent';
import {ListUsers} from '../git-user-search/listUsers';

const styles={
    "wrapperStyles":{
        width:'50%',
        margin:'auto'
    }
    
}
export const GitHubUserSearch = ({
  }) => {
    const iconName = "github";
    const [gitUserList, setGitUserList] = useState([]);
    const [isDataLoading, setIsDataLoading] = useState(false);

    const onSubmit = (value) => {
        if(value && value.trim()){
        setIsDataLoading(true);
        fetch(`https://api.github.com/search/users?q=${value}`)
        .then(response => response.json())
          .then(response => {
              const users = response.items.map(user => ({
                avatar_url: user.avatar_url,
                html_url: user.html_url,
                followers_url: user.followers_url,
                id: user.id,
              }));
              setGitUserList(users);
              setIsDataLoading(false)
            })
          }
          else{
            setGitUserList([]);
            setIsDataLoading(false)
          }
      }
    return (
        <div style={{...styles.wrapperStyles}}>
        <header style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '1.5rem' }}>
        <Icon style={{ marginRight: '1rem' }} name={iconName} />
        <Text style={{ fontWeight: '700' }}>Search Git Users</Text>
        </header>
       <SearchComponent onSubmit={onSubmit} placeholder="Search User">
       <ListUsers list={gitUserList} isDataLoading={isDataLoading} iconName={iconName}/>
       </SearchComponent>
      </div>
    )
  }