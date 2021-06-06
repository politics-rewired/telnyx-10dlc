/* eslint-disable */


export type AssignProfileToCampaignRequest = {
    /**
     * The ID of the messaging profile that you want to link to the specified campaign.
     */
    messagingProfileId: string;
    /**
     * The ID of the campaign you want to link to the specified messaging profile.
     */
    campaignId: string;
}

export namespace AssignProfileToCampaignRequest {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'AssignProfileToCampaignRequest';


}