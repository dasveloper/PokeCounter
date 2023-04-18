# PokeCounter

PokeCounter is a Pokemon encounter counter for PokeMMO built with [Electron](https://www.electronjs.org/).

## Prerequisites

To use Electron, you need to install Node.js. We recommend that you use the latest LTS version available.

## Getting started

Clone this repo using `git clone https://github.com/dasveloper/PokeCounter.git`

Navigate to the newly created directory using `cd PokeCounter`

Install dependencies with `yarn install`

Run the application in developement mode with `yarn start`

Build the production application packages with `yarn build`

(currently the application builds for Windows, Mac, and Linux using `electron-builder -mwl`, if you need to build only for a specific platform reference the docs here: [electron-builder CLI](https://www.electron.build/cli)

Your built packages will appear in the `dist` folder, find the file you need for your system (.exe, .dmg, etc) and click on it.
