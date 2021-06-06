/* eslint-disable */


export type ExtVettingProvider = {
    evpId?: string;
    displayName?: string;
    tcrBillable?: boolean;
    vettingClasses?: Array<string>;
    vettingInstruction?: string;
}

export namespace ExtVettingProvider {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'ExtVettingProvider';


}