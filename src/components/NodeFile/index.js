import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import Icon from '../Icon'
import { formatFilesize } from '../../utils/fileUtils'

function NodeFile({ node }) {
  const label = `${node.name} ${formatFilesize(node.size)}`
  return (
    <div className="node-file">
      <Icon className="node-file__icon" type="File" />
      <span className="node-file__name">{label}</span>
    </div>
  )
}

export default NodeFile

NodeFile.propTypes = {
  node: PropTypes.object.isRequired,
}
