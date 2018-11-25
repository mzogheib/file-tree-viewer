import React from 'react'
import PropTypes from 'prop-types'
import { formatFilesize, getFilesSummary } from '../../utils/fileUtils'

function FilesSummary({ nodes }) {
  const { count, size } = getFilesSummary(nodes)

  return (
    <div>
      <div>Total Files: {count}</div>
      <div>Total Filesize: {formatFilesize(size)}</div>
    </div>
  )
}

export default FilesSummary

FilesSummary.propTypes = {
  nodes: PropTypes.array.isRequired,
}
