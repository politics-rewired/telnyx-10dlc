/* eslint-disable */


export type VettingClass = {
    id?: string;
    enabled?: boolean;
    displayName?: string;
    description?: string;
    validityMonths?: number;
}

export namespace VettingClass {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'VettingClass';


}