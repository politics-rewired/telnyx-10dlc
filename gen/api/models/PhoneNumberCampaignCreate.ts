/* eslint-disable */


export type PhoneNumberCampaignCreate = {
    /**
     * The phone number you want to link to a specified campaign.
     */
    phoneNumber: string;
    /**
     * The ID of the campaign you want to link to the specified phone number.
     */
    campaignId: string;
}

export namespace PhoneNumberCampaignCreate {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'PhoneNumberCampaignCreate';


}