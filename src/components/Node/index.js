import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import NodeFile from '../NodeFile'
import NodeFolder from '../NodeFolder'

class Node extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  toggleOpen(event) {
    event.stopPropagation()
    if (this.props.node.type === 'file') {
      return
    }
    this.setState({ open: !this.state.open })
  }

  renderNode(node) {
    const canRenderChildren =
      this.state.open && node.children && !!node.children.length
    return (
      <div className="node" onClick={this.toggleOpen}>
        {node.type === 'file' && <NodeFile node={node} />}
        {node.type === 'folder' && (
          <NodeFolder node={node} open={this.state.open} />
        )}
        {canRenderChildren &&
          node.children.map((childNode, index) => (
            <div key={index} className="node__child">
              <Node node={childNode} />
            </div>
          ))}
      </div>
    )
  }

  render() {
    return this.renderNode(this.props.node, this.props.depth)
  }
}

export default Node

Node.propTypes = {
  node: PropTypes.object.isRequired,
}
