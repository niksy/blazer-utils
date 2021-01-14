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
@use 'blazer-utils/mixins' as blazer;

.jackie {
	@include blazer.cf;
}
```

### Classes

```scss
@use 'blazer-utils' as *;

// File now contains all CSS classes
```

## API

### Mixins

-   `image-replacement` - Image replacement.
-   `hidden` - Hide from both screenreaders and browsers.
-   `invisible` - Hide visually and from screenreaders, but maintain layout.
-   `hidden-visually` - Hide only visually, but have it available for
    screenreaders.
-   `hidden-visually-revert` - Revert changes made by mixin for visually hidden
    element.
-   `cf` - Clearfix for containing floats.

### Classes

-   `.u-imageReplacement` - Contains `image-replacement`.
-   `.u-hidden` - Contains `hidden`.
-   `.u-invisible` - Contains `invisible`.
-   `.u-hiddenVisually` - Contains `hidden-visually`.
-   `.u-cf` - Contains `cf`.

## Test

For manual tests, run `npm run test:manual:local` and open
<http://localhost:9000/> in your browser.

## Browser support

Tested in IE11+ and all modern browsers.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

[ci]: https://travis-ci.org/niksy/blazer-utils
[ci-img]: https://travis-ci.org/niksy/blazer-utils.svg?branch=master

<!-- prettier-ignore-end -->
