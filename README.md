## Steps used to reproduce the error
* run ```npm install``` to install all depencies
* run ```npm run build``` to build

## What error are you getting?
```shell
ERROR in   TypeError: Cannot read property 'toUpperCase' of null

  - critters.js:39 Node.get
    [Critters Error]/[critters-webpack-plugin]/dist/critters.js:39:33


  - nwmatcher.js:1444 Object.match
    [Critters Error]/[nwmatcher]/src/nwmatcher.js:1444:38


  - nwmatcher.js:1626 select
    [Critters Error]/[nwmatcher]/src/nwmatcher.js:1626:43

  - nwmatcher.js:1451 Object.first
    [Critters Error]/[nwmatcher]/src/nwmatcher.js:1451:14

  - critters.js:117 Node.querySelector
    [Critters Error]/[critters-webpack-plugin]/dist/critters.js:117:28

  - critters.js:359
    [Critters Error]/[critters-webpack-plugin]/dist/critters.js:359:37

  - Array.filter

  - critters.js:357
    [Critters Error]/[critters-webpack-plugin]/dist/critters.js:357:49

  - critters.js:166
    [Critters Error]/[critters-webpack-plugin]/dist/critters.js:166:16

  - Array.filter

  - critters.js:162 walkStyleRules
    [Critters Error]/[critters-webpack-plugin]/dist/critters.js:162:29

  - critters.js:161 walkStyleRules
    [Critters Error]/[critters-webpack-plugin]/dist/critters.js:161:18

  - critters.js:355 Critters.<anonymous>
    [Critters Error]/[critters-webpack-plugin]/dist/critters.js:355:9

  - new Promise

  - critters.js:345 Critters.processStyle
    [Critters Error]/[critters-webpack-plugin]/dist/critters.js:345:12

  - critters.js:254
    [Critters Error]/[critters-webpack-plugin]/dist/critters.js:254:76

  - Array.map

  - critters.js:254 Critters.$If_2
    [Critters Error]/[critters-webpack-plugin]/dist/critters.js:254:39

  - critters.js:244 Critters.<anonymous>
    [Critters Error]/[critters-webpack-plugin]/dist/critters.js:244:34
```