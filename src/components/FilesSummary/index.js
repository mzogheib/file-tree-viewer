import React from 'react'
import PropTypes from 'prop-types'

function FilesSummary({ className, nodes }) {
  const initialSummary = { count: 0, size: 0 }
  const getSummary = nodes =>
    nodes.reduce((summary, node) => {
      if (node.type === 'file') {
        // End of the node so increment the values
        summary.count = summary.count + 1
        summary.size = summary.size + node.size
      } else if (node.type === 'folder' && node.children.length) {
        // Find more files
        return getSummary(node.children)
      }
      return summary
    }, initialSummary)

  const { count, size } = getSummary(nodes)

  return (
    <div className={className}>
      <div>Total Files: {count}</div>
      <div>Total Filesize: {size}</div>
    </div>
  )
}

export default FilesSummary

FilesSummary.propTypes = {
  className: PropTypes.string,
  nodes: PropTypes.array.isRequired,
}
