import React from 'react'
import PropTypes from 'prop-types'
import {
  FaFile as File,
  FaFolder as Folder,
  FaFolderOpen as FolderOpen,
  FaChevronRight as ChevronRight,
  FaChevronDown as ChevronDown,
  FaQuestion as Question,
} from 'react-icons/fa'

function Icon({ className, type }) {
  let icon
  switch (type) {
    case 'File':
      icon = <File />
      break
    case 'Folder':
      icon = <Folder />
      break
    case 'FolderOpen':
      icon = <FolderOpen />
      break
    case 'ChevronRight':
      icon = <ChevronRight />
      break
    case 'ChevronDown':
      icon = <ChevronDown />
      break
    default:
      icon = <Question />
  }

  return <div className={className}>{icon}</div>
}

export default Icon

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
}
