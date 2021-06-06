/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Brand } from '../models/Brand';
import type { BrandCSP } from '../models/BrandCSP';
import type { BrandRecordSetCSP } from '../models/BrandRecordSetCSP';
import type { ExternalVetting } from '../models/ExternalVetting';
import type { UpdateBrand } from '../models/UpdateBrand';
import { request as __request } from '../core/request';

export class BrandsService {

    /**
     * List Brands
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
     * Create Brand
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
     * Get Brand
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
     * Get list of valid external vetting record for a given brand
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
     * Order new external vetting for a brand
     * @param brandId
     * @param requestBody
     * @returns ExternalVetting Successful Response
     * @throws ApiError
     */
    public static async orderBrandExternalVettingBrandBrandIdExternalVettingPost(
        brandId: string,
        requestBody: ExternalVetting,
    ): Promise<ExternalVetting> {
        const result = await __request({
            method: 'POST',
            path: `/brand/${brandId}/externalVetting`,
            body: requestBody,
        });
        return result.body;
    }

}