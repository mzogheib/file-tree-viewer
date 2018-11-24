import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import {
  FaFile as File,
  FaFolder as Folder,
  FaFolderOpen as FolderOpen,
  FaChevronRight as ChevronRight,
  FaChevronDown as ChevronDown,
  FaQuestion as Question,
  FaSpinner as Spinner,
  FaRegFrownOpen as Frown,
} from 'react-icons/fa'

function Icon({ className, type, spin }) {
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
    case 'Spinner':
      icon = <Spinner />
      break
    case 'Frown':
      icon = <Frown />
      break
    default:
      icon = <Question />
  }

  const classNames = `${className} ${spin && 'icon__spin'}`
  return <div className={classNames}>{icon}</div>
}

export default Icon

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  spin: PropTypes.bool,
}
