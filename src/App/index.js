import React, { Component } from 'react'
import './style.scss'
import api from '../utils/api'
import TitleBar from '../components/TitleBar'
import FileTree from '../components/FileTree'
import FilesSummary from '../components/FilesSummary'

class App extends Component {
  constructor() {
    super()
    this.state = {
      nodes: null,
      loading: true,
      error: false,
    }
  }

  componentDidMount() {
    api
      .get()
      .then(response => {
        this.setState({ nodes: response.data, loading: false, error: false })
      })
      .catch(() => {
        this.setState({ nodes: null, loading: false, error: true })
      })
  }

  renderLoading() {
    return 'Loading... server may be cold-starting so please be patient!'
  }

  renderError() {
    return 'Could not load files!'
  }

  renderContent(nodes) {
    return (
      <div>
        <FileTree nodes={nodes} />
        <FilesSummary nodes={nodes} />
      </div>
    )
  }

  render() {
    const loading = this.state.loading
    const error = this.state.error
    const ready = !this.state.loading && !this.state.error
    return (
      <div className="app">
        <div className="app__window">
          <TitleBar />
          <div className="app__window-content">
            {loading && this.renderLoading()}
            {error && this.renderError()}
            {ready && this.renderContent(this.state.nodes)}
          </div>
        </div>
      </div>
    )
  }
}

export default App
