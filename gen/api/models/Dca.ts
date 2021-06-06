/* eslint-disable */


export type Dca = {
    /**
     * Unique identifier of the direct connect aggregator
     */
    id: string;
    /**
     * Display name of the direct connect aggregator.
     */
    displayName: string;
}

export namespace Dca {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'Dca';


}