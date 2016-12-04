# blazer-utils

[![Build Status][ci-img]][ci]

Style utilities. Contains Sass mixins and corresponding CSS classes.

## Install

```sh
npm install blazer-utils --save
```

## Usage

### Mixins

```scss
@import 'blazer-utils/mixins';

.jackie {
	@include blazer-cf;
}
```

### Classes

```scss
@import 'blazer-utils/index';

// File now contains all CSS classes
```

## API

### Mixins

* `blazer-image-replacement` - Image replacement.
* `blazer-hidden` - Hide from both screenreaders and browsers.
* `blazer-invisible` - Hide visually and from screenreaders, but maintain layout.
* `blazer-hidden-visually` - Hide only visually, but have it available for screenreaders.
* `blazer-hidden-visually-revert` - Revert changes made by mixin for visually hidden element.
* `blazer-cf` - Clearfix for containing floats.

### Classes

* `.u-imageReplacement` - Contains `blazer-image-replacement`.
* `.u-hidden` - Contains `blazer-hidden`.
* `.u-invisible` - Contains `blazer-invisible`.
* `.u-hiddenVisually` - Contains `blazer-hidden-visually`.
* `.u-cf` - Contains `blazer-cf`.

## Test

For manual tests, run `npm run test:manual:local` and open <http://localhost:9000/> in your browser.

## Browser support

Tested in IE9+ and all modern browsers.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/blazer-utils
[ci-img]: https://img.shields.io/travis/niksy/blazer-utils.svg
