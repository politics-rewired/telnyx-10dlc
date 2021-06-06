/* eslint-disable */


import type { Exchange } from './Exchange';

export type PublicCompany = {
    symbol?: string;
    exchange?: Exchange;
    iso2?: string;
    isin?: string;
    displayName?: string;
}

export namespace PublicCompany {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'PublicCompany';


}