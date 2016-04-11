# rpi-display-orientation
display orientation for raspberry


# API

```
var display_rotate = require('rpi-display-orientation')();
/*
return current RPI display rotation OR undefined

0       => Normal
1       => 90 degrees
2       => 180 degrees
3       => 270 degrees
0x10000 => horizontal flip
0x20000 => vertical flip
*/
```