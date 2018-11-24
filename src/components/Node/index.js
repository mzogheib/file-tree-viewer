import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import NodeFile from '../NodeFile'
import NodeFolder from '../NodeFolder'
import { isFile, isFolder, hasChildren } from '../../utils/fileUtils'

class Node extends Component {
  constructor() {
    super()
    this.state = { open: false }
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  toggleOpen(event) {
    event.stopPropagation()
    if (isFile(this.props.node)) {
      return
    }
    this.setState({ open: !this.state.open })
  }

  renderChildNode(node, index) {
    return (
      <div key={index} className="node__child">
        <Node node={node} />
      </div>
    )
  }

  render() {
    const node = this.props.node
    const canRenderChildren = this.state.open && hasChildren(node)
    return (
      <div className="node" onClick={this.toggleOpen}>
        {isFile(node) && <NodeFile node={node} />}
        {isFolder(node) && <NodeFolder node={node} open={this.state.open} />}
        {canRenderChildren && node.children.map(this.renderChildNode)}
      </div>
    )
  }
}

export default Node

Node.propTypes = {
  node: PropTypes.object.isRequired,
}
