const isFile = node => node.type === 'file'
const isFolder = node => node.type === 'folder'
const hasChildren = node => node.children && !!node.children.length

// Credit https://gist.github.com/lanqy/5193417
const formatFilesize = sizeInBytes => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  // 0 or falsey
  if (!sizeInBytes) {
    return
  }
  const i = parseInt(Math.floor(Math.log(sizeInBytes) / Math.log(1024)), 10)
  if (i === 0) {
    return `${sizeInBytes} ${sizes[i]}`
  }
  return `${(sizeInBytes / 1024 ** i).toFixed(1)} ${sizes[i]}`
}

export { isFile, isFolder, formatFilesize, hasChildren }
