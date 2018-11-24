import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import Icon from '../Icon'
import { formatFilesize } from '../../utils/fileUtils'

function NodeFile({ node }) {
  return (
    <div className="node-file">
      <Icon className="node-file__icon" type="File" />
      <span className="node-file__name" title={node.name}>
        {node.name}
      </span>
      <span className="node-file__size">{formatFilesize(node.size)}</span>
    </div>
  )
}

export default NodeFile

NodeFile.propTypes = {
  node: PropTypes.object.isRequired,
}
