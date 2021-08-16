/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Brand } from '../models/Brand';
import type { BrandCSP } from '../models/BrandCSP';
import type { BrandRecordSetCSP } from '../models/BrandRecordSetCSP';
import type { ExternalVetting } from '../models/ExternalVetting';
import type { OrderExternalVetting } from '../models/OrderExternalVetting';
import type { UpdateBrand } from '../models/UpdateBrand';
import { request as __request } from '../core/request';

export class BrandsService {

    /**
     * Create Brand
     * This endpoint is used to create a new brand. A brand is an entity created by The Campaign Registry (TCR) that represents an organization or a company. It is this entity that TCR created campaigns will be associated with. Each brand creation will entail an upfront, non-refundable $4 expense.
     * @param requestBody
     * @returns Brand Successful Response
     * @throws ApiError
     */
    public static async createBrandBrandPost(
        requestBody: Brand,
    ): Promise<Brand> {
        const result = await __request({
            method: 'POST',
            path: `/brand`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * List Brands
     * This endpoint is used to list all brands associated with your organization.
     * @param displayName
     * @param entityType
     * @param state
     * @param country
     * @param page
     * @param recordsPerPage
     * @returns BrandRecordSetCSP Successful Response
     * @throws ApiError
     */
    public static async listBrandsBrandGet(
        displayName?: string,
        entityType?: string,
        state?: string,
        country?: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): Promise<BrandRecordSetCSP> {
        const result = await __request({
            method: 'GET',
            path: `/brand`,
            query: {
                'displayName': displayName,
                'entityType': entityType,
                'state': state,
                'country': country,
                'page': page,
                'recordsPerPage': recordsPerPage,
            },
        });
        return result.body;
    }

    /**
     * Get Brand
     * Retrieve a brand by `brandId`.
     * @param brandId
     * @returns BrandCSP Successful Response
     * @throws ApiError
     */
    public static async getBrandBrandBrandIdGet(
        brandId: string,
    ): Promise<BrandCSP> {
        const result = await __request({
            method: 'GET',
            path: `/brand/${brandId}`,
        });
        return result.body;
    }

    /**
     * Update Brand
     * Update a brand's attributes by `brandId`.
     * @param brandId
     * @param requestBody
     * @returns Brand Successful Response
     * @throws ApiError
     */
    public static async updateBrandBrandBrandIdPut(
        brandId: string,
        requestBody: UpdateBrand,
    ): Promise<Brand> {
        const result = await __request({
            method: 'PUT',
            path: `/brand/${brandId}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * List External Vettings
     * Retrieve a list of valid external vetting records for a supplied brand.
     * @param brandId
     * @returns ExternalVetting Successful Response
     * @throws ApiError
     */
    public static async listExternalVettingsBrandBrandIdExternalVettingGet(
        brandId: string,
    ): Promise<Array<ExternalVetting>> {
        const result = await __request({
            method: 'GET',
            path: `/brand/${brandId}/externalVetting`,
        });
        return result.body;
    }

    /**
     * Order Brand External Vetting
     * This endpoint allows you to order external vetting for a brand. Brand vetting is optional, but it is highly recommended. In essence, brand vetting is a way of letting The Campaign Registry (TCR) know that a given brand is legitimate. Carrier rate limits and daily message limits are determined by a "brand score", which is a score that TCR assigns to given brand in an attempt to measure brand credibility. Brand vetting will entail an upfront, non-refundable $40 expense.
     * @param brandId
     * @param requestBody
     * @returns ExternalVetting Successful Response
     * @throws ApiError
     */
    public static async orderBrandExternalVettingBrandBrandIdExternalVettingPost(
        brandId: string,
        requestBody: OrderExternalVetting,
    ): Promise<ExternalVetting> {
        const result = await __request({
            method: 'POST',
            path: `/brand/${brandId}/externalVetting`,
            body: requestBody,
        });
        return result.body;
    }

}