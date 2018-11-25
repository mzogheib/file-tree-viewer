import React, { Component } from 'react'
import './style.scss'
import api from '../utils/api'
import TitleBar from '../components/TitleBar'
import FileTree from '../components/FileTree'
import FilesSummary from '../components/FilesSummary'
import Icon from '../components/Icon'

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
    return (
      <section className="app__icon-wrapper">
        <Icon className="app__icon" type="Spinner" spin={true} />
        <small>Server may be waking up ... hang in there.</small>
      </section>
    )
  }

  renderError() {
    return (
      <section className="app__icon-wrapper">
        <Icon className="app__icon" type="Frown" />
        <small>Could not load files.</small>
      </section>
    )
  }

  renderContent(nodes) {
    return (
      <div>
        <section>
          <FileTree nodes={nodes} />
        </section>
        <footer className="app__files-summary">
          <FilesSummary nodes={nodes} />
        </footer>
      </div>
    )
  }

  render() {
    const loading = this.state.loading
    const error = this.state.error
    const ready = !this.state.loading && !this.state.error
    return (
      <div className="app">
        <main className="app__window">
          <TitleBar />
          <div className="app__window-content">
            {loading && this.renderLoading()}
            {error && this.renderError()}
            {ready && this.renderContent(this.state.nodes)}
          </div>
        </main>
      </div>
    )
  }
}

export default App
