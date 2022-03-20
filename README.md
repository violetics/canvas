## Violetics API Canvas

> **_Canvas API Wrapper for https://violetics.pw/api/canvas_**

```diff
@@ Created on 20-03-22 | Violetics @@
```

## Installation

<h4>
  using npm package manager
</h4>

> _npm install @violetics/canvas_

<h4>
  using yarn package manager
</h4>

> _yarn add @violetics/canvas_

## Example Request

```javascript
"use strict";
const Violetics = require("@violetics/canvas");
const canvas = new Violetics("beta");
const fs = require("fs");

let wa = new canvas.WhatsappProfile()
    .setUsername("Mr. Violetics")
    .setAbout("Violetics is da best")
    .setNumber("62895333381439")
    .setAvatar("https://violetics.pw/assets/images/logo.png");

wa.toBuffer()
    .then((buffer) => {
        let path = `./result.png`;
        fs.writeFileSync(path, buffer);
        let writeBuffer = fs.readFileSync(path);
        console.log(writeBuffer);
    })
    .catch((error) => console.error(error));
```

## Information

```diff
+ dont forget to star <3
! contribute to this project! ~~~
- please add issue if you having problem with installation

! github: https://github.com/Violetics/canvas
```
