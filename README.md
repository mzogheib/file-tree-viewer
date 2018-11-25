# File Tree Viewer

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Demo can be found [here](https://awesome-shaw-d5992b.netlify.com/). Continuosly deployed to Netlify from GitHub.

## Getting started

| Step                 | Command                                                                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Install yarn         | `https://yarnpkg.com/lang/en/docs/install`. If you don't want to install yarn then `yarn` below can be replaced with `npx yarn`. |
| Get the repo         | `git clone https://github.com/mzogheib/file-tree-viewer.git`                                                                     |
| Install dependencies | `cd file-tree-viewer && yarn`                                                                                                    |
| Develop              | `yarn start` or `npm start`                                                                                                      |
| Test                 | `yarn test` or `npm test`                                                                                                        |
| Build                | `yarn build` or `npm run build`                                                                                                  |

## Implementation Notes

- `create-react-app` was used to complete the challenge
- Other packages/tools used:
  - `prettier` for auto code formatting. Pre-commit hook using `husky` and `lint-staged` is also incorporated
  - SASS
  - `axios` for HTTP requests
  - `react-icons` using Font Awesome icon set
  - `prop-types` for component prop validation
- Node rendering and summary calculation was done through recursive traversal of the file tree
- In lieu of a mobile design a “good enough” responsive solution was delivered, e.g. smaller padding and overflow text truncated with ellipsis

## Assumptions

- File structure should be displayed as is, i.e. no text formatting/sanitising and no sorting
- No need to remember the open state of subfolders after closing a parent folder
- File extensions can be displayed
- No need to display empty folder indicator
- Filesizes are calculated in Base 2, i.e. 1024 bytes is 1 kilobyte etc

## Further improvements

- A review and (potential) trimming of `create-react-app` out of the box features, e.g. service worker
- In a real world app, a custom Webpack build could be used as the build and dev environment requirements grow.
- So far, tree depth hasn't been deep enough for the nodes to overflow out of the window div. A more robust solution would be to add horizontal scrollbars instead of truncating text. However, this could lead to a poor UX.
- More unit test coverage.
- A better/more abstracted implementation for the Icon component. As is, there is a lot of repetition. Higher Order Components are a potential candidate to improve the implementation.
- Colours and font sizes are applied simply through parent classes and by taking advantage of SASS variables. As the app complexity grows a theme solution would be more appropriate, e.g. using React’s Context API
