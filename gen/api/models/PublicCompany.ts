/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Exchange } from './Exchange';

export type PublicCompany = {
    symbol?: string;
    exchange?: Exchange;
    iso2?: string;
    isin?: string;
    displayName?: string;
}
