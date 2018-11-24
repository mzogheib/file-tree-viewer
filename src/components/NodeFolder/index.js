import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import Icon from '../Icon'

function NodeFolder({ node, open }) {
  const chevronIconType = open ? 'ChevronDown' : 'ChevronRight'
  const folderIconType = open ? 'FolderOpen' : 'Folder'
  return (
    <div className="node-folder">
      <Icon className="node-folder__chevron" type={chevronIconType} />
      <Icon className="node-folder__icon" type={folderIconType} />
      <span className="node-folder__name">{node.name}</span>
    </div>
  )
}

export default NodeFolder

NodeFolder.propTypes = {
  node: PropTypes.object.isRequired,
}
