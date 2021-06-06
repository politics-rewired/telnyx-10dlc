/* eslint-disable */


export type PhoneNumberCampaign = {
    phoneNumber: string;
    campaignId: string;
    createdAt: string;
    updatedAt: string;
}

export namespace PhoneNumberCampaign {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'PhoneNumberCampaign';


}