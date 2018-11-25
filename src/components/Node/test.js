import React from 'react'
import renderer from 'react-test-renderer'
import Node from './'

const mockResponse = {
  data: [
    {
      type: 'file',
      name: 'auto_loan_account.png',
      size: 67002,
    },
    {
      type: 'folder',
      name: 'redundant',
      children: [
        {
          type: 'file',
          name: 'toys_matrix.wav',
          size: 26676,
        },
        {
          type: 'file',
          name: 'optical_withdrawal.pdf',
          size: 2272,
        },
        {
          type: 'folder',
          name: 'open-source',
          children: [],
        },
        {
          type: 'file',
          name: 'implement_hack.html',
          size: 19929,
        },
        {
          type: 'file',
          name: 'index_overpass_generic.mpg',
          size: 94248,
        },
      ],
    },
    {
      type: 'folder',
      name: 'redundant',
      children: [
        {
          type: 'file',
          name: 'system_worthy.shtml',
          size: 38689,
        },
        {
          type: 'file',
          name: 'reduced_incredible_wooden_bike_monitor.html',
          size: 60805,
        },
      ],
    },
    {
      type: 'file',
      name: 'italy_input_avon.mp4v',
      size: 3119,
    },
    {
      type: 'file',
      name: 'neural.shtml',
      size: 87349,
    },
  ],
}

const makeTree = node => renderer.create(<Node node={node} />).toJSON()

// Snapshot test to ensure correct icons and filesize is displayed
it('renders correctly', () => {
  mockResponse.data.forEach(node => expect(makeTree(node)).toMatchSnapshot())
})
