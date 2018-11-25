import {
  isFile,
  isFolder,
  hasChildren,
  formatFilesize,
  getFilesSummary,
} from '.'

it('checks node type correctly', () => {
  const file = { type: 'file' }
  const folder = { type: 'folder' }
  const bad = { type: 'FOLDER' }
  const empty = { type: null }

  expect(isFile(file)).toBeTruthy()
  expect(isFile(folder)).toBeFalsy()
  expect(isFile(bad)).toBeFalsy()
  expect(isFile(empty)).toBeFalsy()

  expect(isFolder(folder)).toBeTruthy()
  expect(isFolder(file)).toBeFalsy()
  expect(isFolder(bad)).toBeFalsy()
  expect(isFolder(empty)).toBeFalsy()
})

it('checks if node has children', () => {
  const withChildren = { children: ['foo', 'bar'] }
  const withEmptyChildren = { children: [] }
  const withoutChildren = {}

  expect(hasChildren(withChildren)).toBeTruthy()
  expect(hasChildren(withEmptyChildren)).toBeFalsy()
  expect(hasChildren(withoutChildren)).toBeFalsy()
})

it('formats file size correctly', () => {
  let bytes = 50
  expect(formatFilesize(bytes)).toBe('50 Bytes')
  bytes = 1024
  expect(formatFilesize(bytes)).toBe('1.0 KB')
  bytes = 1048576
  expect(formatFilesize(bytes)).toBe('1.0 MB')
  bytes = 1073741824
  expect(formatFilesize(bytes)).toBe('1.0 GB')
  bytes = 1099511627776
  expect(formatFilesize(bytes)).toBe('1.0 TB')
})

const mockResponse = {
  data: [
    {
      type: 'folder',
      children: [
        {
          type: 'folder',
          children: [
            {
              type: 'folder',
              children: [{ type: 'folder', children: [] }],
            },
            { type: 'file', size: 95469 },
            {
              type: 'folder',
              children: [
                { type: 'folder', children: [] },
                { type: 'file', size: 63307 },
                { type: 'folder', children: [] },
              ],
            },
            { type: 'file', size: 34621 },
          ],
        },
        { type: 'file', size: 25554 },
        { type: 'folder', children: [{ type: 'file', size: 18269 }] },
        {
          type: 'folder',
          children: [
            {
              type: 'folder',
              children: [
                { type: 'folder', children: [] },
                { type: 'file', size: 38607 },
              ],
            },
            {
              type: 'folder',
              children: [
                { type: 'file', size: 65113 },
                { type: 'folder', children: [] },
                { type: 'file', size: 91872 },
                { type: 'file', size: 3281 },
              ],
            },
            { type: 'file', size: 44601 },
            { type: 'file', size: 77957 },
          ],
        },
        {
          type: 'folder',
          children: [
            {
              type: 'folder',
              children: [
                { type: 'file', size: 28367 },
                { type: 'file', size: 95891 },
              ],
            },
          ],
        },
      ],
    },
    { type: 'file', size: 82860 },
    { type: 'file', size: 53097 },
    { type: 'folder', children: [] },
  ],
}

it('calculates total file count and size correctly', () => {
  // Count and size have been manually calculated for above mock data
  expect(getFilesSummary(mockResponse.data)).toEqual({
    count: 15,
    size: 818866,
  })
})
