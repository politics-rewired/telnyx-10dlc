/* eslint-disable */


export type AssignProfileToCampaignResponse = {
    /**
     * The ID of the messaging profile that you want to link to the specified campaign.
     */
    messagingProfileId: string;
    /**
     * The ID of the campaign you want to link to the specified messaging profile.
     */
    campaignId: string;
    /**
     * The ID of the task associated with assigning a messaging profile to a campaign.
     */
    taskId: string;
}

export namespace AssignProfileToCampaignResponse {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'AssignProfileToCampaignResponse';


}