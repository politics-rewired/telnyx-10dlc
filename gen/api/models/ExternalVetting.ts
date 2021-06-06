/* eslint-disable */


export type ExternalVetting = {
    /**
     * External vetting provider ID for the brand.
     */
    evpId?: string;
    /**
     * Identifies the vetting classification.
     */
    vettingClass?: string;
}

export namespace ExternalVetting {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'ExternalVetting';


}