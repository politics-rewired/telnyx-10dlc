/* eslint-disable */


export type OrderExternalVetting = {
    /**
     * External vetting provider ID for the brand.
     */
    evpId: string;
}

export namespace OrderExternalVetting {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'OrderExternalVetting';


}