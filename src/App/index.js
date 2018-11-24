import React, { Component } from 'react'
import './style.scss'
import TitleBar from '../components/TitleBar'
import FileTree from '../components/FileTree'
import FilesSummary from '../components/FilesSummary'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__window">
          <TitleBar />
          <div className="app__window-conent">
            <FileTree />
            <FilesSummary />
          </div>
        </div>
      </div>
    )
  }
}

export default App
