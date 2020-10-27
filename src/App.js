//import logo from './logo.svg';
import React from 'react';
import {GitHubRepoSearch} from './components/git-repo-search/GitHubRepoSearch';
import {GitHubUserSearch} from './components/git-user-search/GitHubUserSearch';
import './App.css';

function App() {
  return (
    <div>
    <GitHubRepoSearch/>
    <GitHubUserSearch/>
    </div>
  );
}

export default App;
