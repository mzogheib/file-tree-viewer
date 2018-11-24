import React from 'react'
import PropTypes from 'prop-types'
import { isFile, formatFilesize, hasChildren } from '../../utils/fileUtils'

function FilesSummary({ className, nodes }) {
  const initialSummary = { count: 0, size: 0 }
  const getSummary = nodes =>
    nodes.reduce((summary, node) => {
      if (isFile(node)) {
        // End of the node so increment the values
        summary.count = summary.count + 1
        summary.size = summary.size + node.size
      } else if (hasChildren(node)) {
        // Find more files
        return getSummary(node.children)
      }
      return summary
    }, initialSummary)

  const { count, size } = getSummary(nodes)

  return (
    <div className={className}>
      <div>Total Files: {count}</div>
      <div>
        <span>Total Filesize: {formatFilesize(size)}</span>
      </div>
    </div>
  )
}

export default FilesSummary

FilesSummary.propTypes = {
  className: PropTypes.string,
  nodes: PropTypes.array.isRequired,
}
