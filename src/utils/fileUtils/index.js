const isFile = node => node && node.type === 'file'
const isFolder = node => node && node.type === 'folder'
const hasChildren = node => node && node.children && !!node.children.length

// Credit https://gist.github.com/lanqy/5193417
const formatFilesize = sizeInBytes => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  // 0 or falsey
  if (!sizeInBytes) {
    return '0'
  }
  const i = parseInt(Math.floor(Math.log(sizeInBytes) / Math.log(1024)), 10)
  if (i === 0) {
    return `${sizeInBytes} ${sizes[i]}`
  }
  return `${(sizeInBytes / 1024 ** i).toFixed()} ${sizes[i]}`
}

const getFilesSummary = nodes =>
  nodes.reduce(
    (summary, node) => {
      if (isFile(node)) {
        // End of the node so increment the values
        summary.count = summary.count + 1
        summary.size = summary.size + node.size
      } else if (hasChildren(node)) {
        // Find more files and add to values
        const childrenSummary = getFilesSummary(node.children)
        summary.count = summary.count + childrenSummary.count
        summary.size = summary.size + childrenSummary.size
      }
      return summary
    },
    // Initial value
    { count: 0, size: 0 }
  )

export { isFile, isFolder, formatFilesize, hasChildren, getFilesSummary }
