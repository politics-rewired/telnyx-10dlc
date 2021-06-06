/* eslint-disable */

import type { Campaign } from '../models/Campaign';
import type { CampaignCSP } from '../models/CampaignCSP';
import type { CampaignRecordSetCSP } from '../models/CampaignRecordSetCSP';
import type { CampaignRequest } from '../models/CampaignRequest';
import type { UpdateCampaign } from '../models/UpdateCampaign';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface CampaignService {

    /**
     * List My Campaigns
     * Search my campaigns
     * @param brandId
     * @param status
     * @param usecase
     * @param vertical
     * @param resellerId
     * @param autoRenewal
     * @param upstreamCnpId
     * @param page
     * @param recordsPerPage
     * @returns CampaignRecordSetCSP Successful Response
     */
    listMyCampaignsCampaignGet(
        brandId?: string,
        status?: string,
        usecase?: string,
        vertical?: string,
        resellerId?: string,
        autoRenewal?: boolean,
        upstreamCnpId?: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): Promise<CampaignRecordSetCSP>;

    /**
     * **used to get the request options without making a http request**
     * List My Campaigns
     * Search my campaigns
     * @param brandId
     * @param status
     * @param usecase
     * @param vertical
     * @param resellerId
     * @param autoRenewal
     * @param upstreamCnpId
     * @param page
     * @param recordsPerPage
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    listMyCampaignsCampaignGetApiRequestOptions(
        brandId?: string,
        status?: string,
        usecase?: string,
        vertical?: string,
        resellerId?: string,
        autoRenewal?: boolean,
        upstreamCnpId?: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): ApiRequestOptions;

    /**
     * Get My Campaign
     * Get my campaign details
     * @param campaignId
     * @returns CampaignCSP Successful Response
     */
    getMyCampaignCampaignCampaignIdGet(
        campaignId: string,
    ): Promise<CampaignCSP>;

    /**
     * **used to get the request options without making a http request**
     * Get My Campaign
     * Get my campaign details
     * @param campaignId
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getMyCampaignCampaignCampaignIdGetApiRequestOptions(
        campaignId: string,
    ): ApiRequestOptions;

    /**
     * Update My Campaign
     * Update my campaign properties
     * @param campaignId
     * @param requestBody
     * @returns Campaign Successful Response
     */
    updateMyCampaignCampaignCampaignIdPut(
        campaignId: string,
        requestBody: UpdateCampaign,
    ): Promise<Campaign>;

    /**
     * **used to get the request options without making a http request**
     * Update My Campaign
     * Update my campaign properties
     * @param campaignId
     * @param requestBody
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    updateMyCampaignCampaignCampaignIdPutApiRequestOptions(
        campaignId: string,
        requestBody: UpdateCampaign,
    ): ApiRequestOptions;

    /**
     * Deactivate My Campaign
     * Deactivate my campaign
     * @param campaignId
     * @returns any Successful Response
     */
    deactivateMyCampaignCampaignCampaignIdDelete(
        campaignId: string,
    ): Promise<any>;

    /**
     * **used to get the request options without making a http request**
     * Deactivate My Campaign
     * Deactivate my campaign
     * @param campaignId
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    deactivateMyCampaignCampaignCampaignIdDeleteApiRequestOptions(
        campaignId: string,
    ): ApiRequestOptions;

    /**
     * Get My Campaign Mno Metadata
     * Get my campaign MNO metadata
     * @param campaignId
     * @returns any Successful Response
     */
    getMyCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet(
        campaignId: string,
    ): Promise<any>;

    /**
     * **used to get the request options without making a http request**
     * Get My Campaign Mno Metadata
     * Get my campaign MNO metadata
     * @param campaignId
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getMyCampaignMnoMetadataCampaignCampaignIdMnoMetadataGetApiRequestOptions(
        campaignId: string,
    ): ApiRequestOptions;

    /**
     * Get My Campaign Operation Status
     * Get campaign operation status at MNO level
     * @param campaignId
     * @returns any Successful Response
     */
    getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet(
        campaignId: string,
    ): Promise<any>;

    /**
     * **used to get the request options without making a http request**
     * Get My Campaign Operation Status
     * Get campaign operation status at MNO level
     * @param campaignId
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGetApiRequestOptions(
        campaignId: string,
    ): ApiRequestOptions;

    /**
     * Submit Campaign
     * Campaign builder Step 2: Create new campaign
     * @param requestBody
     * @returns any Successful Response
     */
    submitCampaignCampaignBuilderPost(
        requestBody: CampaignRequest,
    ): Promise<any>;

    /**
     * **used to get the request options without making a http request**
     * Submit Campaign
     * Campaign builder Step 2: Create new campaign
     * @param requestBody
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    submitCampaignCampaignBuilderPostApiRequestOptions(
        requestBody: CampaignRequest,
    ): ApiRequestOptions;

    /**
     * Qualify By Usecase
     * @param usecase
     * @param brandId
     * @returns any Successful Response
     */
    qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet(
        usecase: string,
        brandId: string,
    ): Promise<any>;

    /**
     * **used to get the request options without making a http request**
     * Qualify By Usecase
     * @param usecase
     * @param brandId
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGetApiRequestOptions(
        usecase: string,
        brandId: string,
    ): ApiRequestOptions;

}