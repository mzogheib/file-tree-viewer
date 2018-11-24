import React, { Component } from 'react'
import './style.scss'
import TitleBar from '../components/TitleBar'
import FileTree from '../components/FileTree'
import FilesSummary from '../components/FilesSummary'

// MOCK
import mockResponses from '../mock-responses.json'
const index = Math.floor(Math.random() * mockResponses.length)
const mockResponse = mockResponses[index]

class App extends Component {
  constructor() {
    super()
    this.state = {
      nodes: mockResponse.data,
    }
  }

  render() {
    return (
      <div className="app">
        <div className="app__window">
          <TitleBar />
          <div className="app__window-conent">
            <FileTree nodes={this.state.nodes} />
            <FilesSummary nodes={this.state.nodes} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
