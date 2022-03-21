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
const canvas = new Violetics("API_KEY"); // register on https://violetics.pw/ to get your own apikey
const fs = require("fs");

let wa = new canvas.WhatsappProfile()
	.setUsername("Mr. Violetics")
	.setAbout("Violetics is da best")
	.setNumber("62895333381439")
	.setAvatar("https://violetics.pw/assets/images/logo.png");

wa.toBuffer()
	.then(({ type, buffer }) => {
		let path = `./result.${type.ext}`;
		fs.writeFileSync(path, buffer);
		let writeBuffer = fs.readFileSync(path);
		console.log(writeBuffer);
	})
	.catch((error) => console.error(error));
```

## DISCLAIMER

<h4> Id: </h4>
<strong>@violetics/canvas adalah sebuah module API wrapper dari RestAPI https://violetics.pw/. TIDAK MEMBUTUHKAN CANVAS API dan BISA DIGUNAKAN DI SELURUH PLATFORM ANDA</strong>

<h4> En: </h4>
<strong>@violetics/canvas is a module API wrapper from a RestAPI https://violetics.pw/. DOES NOT REQUIRED CANVAS API and CAN BE USED ACROSS YOUR PLATFORM</strong>

## Information

```diff
+ dont forget to star <3
! contribute to this project! ~~~
- please add issue if you having problem with installation

! github: https://github.com/Violetics/canvas
```
