/**
 * Fixes a weird issue with font awesome where there is a flash of a giant icons on page load.
 * Must be included first at the top level layout file.
 */

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;