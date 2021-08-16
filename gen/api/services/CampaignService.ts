/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Campaign } from '../models/Campaign';
import type { CampaignCSP } from '../models/CampaignCSP';
import type { CampaignRecordSetCSP } from '../models/CampaignRecordSetCSP';
import type { CampaignRequest } from '../models/CampaignRequest';
import type { UpdateCampaign } from '../models/UpdateCampaign';
import { request as __request } from '../core/request';

export class CampaignService {

    /**
     * Create Campaign
     * Before creating a campaign, use the [Qualify By Usecase endpoint](https://developers.telnyx.com/docs/api/v2/10dlc/Campaign#qualify_by_usecase_campaignBuilder_brand__brand_id__usecase__usecase__get) to ensure that the brand you want to assign a new campaign to is qualified for the desired use case of that campaign. **Please note:** After campaign creation, you'll only be able to edit the campaign's sample messages. Creating a campaign will entail an upfront, non-refundable three month's cost that will depend on the campaign's use case ([see 10DLC Costs section for details](https://developers.telnyx.com/docs/api/v2/10dlc)).
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static async submitCampaignCampaignBuilderPost(
        requestBody: CampaignRequest,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/campaignBuilder`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * List My Campaigns
     * Retrieve a list of campaigns associated with a supplied `brandId`.
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
     * @throws ApiError
     */
    public static async listMyCampaignsCampaignGet(
        brandId: string,
        status?: string,
        usecase?: string,
        vertical?: string,
        resellerId?: string,
        autoRenewal?: boolean,
        upstreamCnpId?: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): Promise<CampaignRecordSetCSP> {
        const result = await __request({
            method: 'GET',
            path: `/campaign`,
            query: {
                'brandId': brandId,
                'status': status,
                'usecase': usecase,
                'vertical': vertical,
                'resellerId': resellerId,
                'autoRenewal': autoRenewal,
                'upstreamCnpId': upstreamCnpId,
                'page': page,
                'recordsPerPage': recordsPerPage,
            },
        });
        return result.body;
    }

    /**
     * Get My Campaign
     * Retrieve campaign details by `campaignId`.
     * @param campaignId
     * @returns CampaignCSP Successful Response
     * @throws ApiError
     */
    public static async getMyCampaignCampaignCampaignIdGet(
        campaignId: string,
    ): Promise<CampaignCSP> {
        const result = await __request({
            method: 'GET',
            path: `/campaign/${campaignId}`,
        });
        return result.body;
    }

    /**
     * Update My Campaign
     * Update a campaign's properties by `campaignId`. **Please note:** only sample messages are editable.
     * @param campaignId
     * @param requestBody
     * @returns Campaign Successful Response
     * @throws ApiError
     */
    public static async updateMyCampaignCampaignCampaignIdPut(
        campaignId: string,
        requestBody: UpdateCampaign,
    ): Promise<Campaign> {
        const result = await __request({
            method: 'PUT',
            path: `/campaign/${campaignId}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Deactivate My Campaign
     * Campaign deactivation is not currently available, but will be available soon.
     * @param campaignId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static async deactivateMyCampaignCampaignCampaignIdDelete(
        campaignId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/campaign/${campaignId}`,
        });
        return result.body;
    }

    /**
     * Get Campaign MNO Metadata
     * Retrieve a campaign's Mobile Network Operator (MNO) metadata.
     * @param campaignId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static async getMyCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet(
        campaignId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/campaign/${campaignId}/mnoMetadata`,
        });
        return result.body;
    }

    /**
     * Get Campaign's Operation Status
     * Retrieve campaign's operation status at MNO level.
     * @param campaignId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static async getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet(
        campaignId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/campaign/${campaignId}/operationStatus`,
        });
        return result.body;
    }

    /**
     * Qualify By Usecase
     * This endpoint allows you to see whether or not the supplied brand is suitable for your desired campaign use case.
     * @param usecase
     * @param brandId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static async qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet(
        usecase: string,
        brandId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/campaignBuilder/brand/${brandId}/usecase/${usecase}`,
        });
        return result.body;
    }

}