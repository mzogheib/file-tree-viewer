# File Tree Viewer

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Demo can be found [here](https://awesome-shaw-d5992b.netlify.com/).

## Getting started

| Step                 | Command                                                      |
| -------------------- | ------------------------------------------------------------ |
| Get the repo         | `git clone https://github.com/mzogheib/file-tree-viewer.git` |
| Install dependencies | `cd file-tree-viewer && npm install`                         |
| Develop              | `npm start`                                                  |
| Test                 | `npm test`                                                   |
| Build                | `npm run build`                                              |

## Assumptions

- No text formatting required on file/folder labels, e.g. capitalisation
- Ordering of files/folders not required
- File nodes will never have a children array
- No need to remember the open state of subfolders after closing a parent folder
- File extensions can be displayed
- No need to display empty folder indicator
- 1024 bytes will be displayed as 1 kilobyte
- Total filesize will never exceed ???
