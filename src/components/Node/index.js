import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

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
        <div>{`${node.type} ${node.name}`}</div>
        {canRenderChildren &&
          node.children.map((childNode, index) => (
            <Node key={index} node={childNode} />
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
