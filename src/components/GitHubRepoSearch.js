import React,{useState} from 'react';
import {Icon} from './icons';
import {Text} from './text';
import {SearchComponent} from './searchComponent';

const styles={
    "wrapperStyles":{
        width:'50%',
        margin:'auto'
    }
    
}
export const GitHubRepoSearch = ({
  }) => {
    const iconName = "github";
    const [gitRepoList, setGitRepoList] = useState([]);
    const [isDataLoading, setIsDataLoading] = useState(false);

    const onSubmit = (value) => {
        setIsDataLoading(true);
        fetch(`https://api.github.com/search/repositories?q=${value}`)
        .then(response => response.json())
          .then(response => {
              const repos = response.items.map(repo => ({
                description: repo.description,
                author: repo.owner.login,
                stars: repo.stargazers_count,
                id: repo.id,
              }));
              setGitRepoList(repos);
              setIsDataLoading(true)
            })
      }
    return (
        <div style={{...styles.wrapperStyles}}>
        <header style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '1.5rem' }}>
        <Icon style={{ marginRight: '1rem' }} name={iconName} />
        <Text style={{ fontWeight: '700' }}>Search Git Repo</Text>
        </header>
       <SearchComponent onSubmit={onSubmit} isDataLoading={isDataLoading} dataList={gitRepoList} iconName={iconName}/>
      </div>
    )
  }