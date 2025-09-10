create some test pages for fonts!

* google lato v13
* google lato v24
* [Free lato](https://www.latofonts.com/lato-free-fonts/)


## google lato 24

font weights: 100, 300, 400, 700, 900

https://fonts.google.com/specimen/Lato


## Lato-lato v2

font weights: 100, 200, 300, 400, 500, 600, 700, 800, 900

https://fonts.adobe.com/fonts/lato

## Fonts assumed from @webmdhs/mui-theme (and usage)

font weights: 300, 400, 600, 700, (900)


## current phm weights

font weights: 300, 400, 700, 900

## Research

How much do fonts cost in download bytes.

NOTE: if a font is not used on a page it is not downloaded.

---

How many bytes does the current font setup take

> about 23k per font face (23k * 4 max)

---

How many bytes does google lato v24 take with same setup

> about 23k per font face (25k * 4 max)

---

How many bytes does free lato take with same setup

> about 44k per face (44k * 4 max)


---

How many bytes for regular + italic font faces and is fake italic different

> yes fake italic looks quite different,  44k per but add 4 more for italic faces(44k * 8 max)

---

How many bytes for All the glyphs

> about 180k per face * 4 or 8 depending on if we are including italic or not... (180k * 8 max)

--- 

How do we optimize a subset of a font face for different locales, or even just break up the font into faces based on their usage, most-used, sometimes-used, cyrillic languages etc.

> https://web.dev/learn/performance/optimize-web-fonts#subset_your_web_fonts

