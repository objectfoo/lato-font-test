# Font subsets

A font can contain any number unicode glyphs organized into [blocks](https://graphemica.com/blocks).

To optimize load time for a web page you can break your font file up into smaller font files based on usage, then inform the browser which file to download for which unicode character using `@font-face`.

This is the face for Lato normal latin chars only (does not include latin-ext)

```css
@font-face {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-display: swap;
	src: url(https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153,
		U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304,
		U+0308, U+0329, U+2000-206F, U+20AC, U+2122,
		U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
```

This optimized latin only glyph files are about 24k per face, we are using 4 faces. The italic faces are generated from the regular font - so we are not including italic faces.

* 300 (lato-light)
* 400 (lato-regular)
* 700 (lato-bold)
* 900 (lato-black)

Current font face definitions [google-lato-latin-v13](https://github.com/objectfoo/lato-font-test/blob/main/index.html#L10-L48)


# Fallback Font

We may be able to change the fallback font to something that looks better, this will also help for those characters that lato still does not include.

`Courier New` actually look better for turkish but still looks wrong. `system-ui` - on windows 11 this is `Segoe UI` and it looks much better than arial along side `Lato`.

