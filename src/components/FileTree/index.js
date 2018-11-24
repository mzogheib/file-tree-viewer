import React from 'react'
import PropTypes from 'prop-types'
import Node from '../Node'

function FileTree({ nodes }) {
  return nodes.map((node, index) => <Node key={index} node={node} />)
}

export default FileTree

FileTree.propTypes = {
  nodes: PropTypes.array.isRequired,
}
