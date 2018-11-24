import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import Icon from '../Icon'

function NodeFile({ node }) {
  return (
    <div className="node-file">
      <Icon className="node-file__icon" type="File" />
      <span className="node-file__name">{node.name}</span>
      <span>{node.size}</span>
    </div>
  )
}

export default NodeFile

NodeFile.propTypes = {
  node: PropTypes.object.isRequired,
}
