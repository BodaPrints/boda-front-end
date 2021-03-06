/**
 * Makes a string's first letter uppercase.
 *
 * @return {string} Original string, but with first letter in upper case.
 */
export function upperCaseFirst(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

/**
 * Returns whether the page is in LTR mode. Defaults to `true` if it can't be computed.
 *
 * @return {boolean} Page's language direction is left-to-right.
 */
export function isLTR(): boolean {
  let dir: string = 'ltr';

  if (window) {
    if (window.getComputedStyle) {
      dir = window.getComputedStyle(document.body, null).getPropertyValue('direction');
    } else {
      dir = (document.body as any).currentStyle.direction;
    }
  }

  return dir === 'ltr';
}

/**
 * Returns whether or not the current device is an iOS device.
 *
 * @return {boolean} Device is an iOS device (i.e. iPod touch/iPhone/iPad).
 */
export function isIOS(): boolean {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
}

/**
 * Returns whether or not this is running in a browser context.
 *
 * @return {boolean} Running in a browser context.
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}
