/* eslint-disable */

import type { Brand } from '../models/Brand';
import type { BrandCSP } from '../models/BrandCSP';
import type { BrandRecordSetCSP } from '../models/BrandRecordSetCSP';
import type { ExternalVetting } from '../models/ExternalVetting';
import type { UpdateBrand } from '../models/UpdateBrand';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface BrandsService {

    /**
     * List Brands
     * @param displayName
     * @param entityType
     * @param state
     * @param country
     * @param page
     * @param recordsPerPage
     * @returns BrandRecordSetCSP Successful Response
     */
    listBrandsBrandGet(
        displayName?: string,
        entityType?: string,
        state?: string,
        country?: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): Promise<BrandRecordSetCSP>;

    /**
     * **used to get the request options without making a http request**
     * List Brands
     * @param displayName
     * @param entityType
     * @param state
     * @param country
     * @param page
     * @param recordsPerPage
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    listBrandsBrandGetApiRequestOptions(
        displayName?: string,
        entityType?: string,
        state?: string,
        country?: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): ApiRequestOptions;

    /**
     * Create Brand
     * @param requestBody
     * @returns Brand Successful Response
     */
    createBrandBrandPost(
        requestBody: Brand,
    ): Promise<Brand>;

    /**
     * **used to get the request options without making a http request**
     * Create Brand
     * @param requestBody
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    createBrandBrandPostApiRequestOptions(
        requestBody: Brand,
    ): ApiRequestOptions;

    /**
     * Get Brand
     * @param brandId
     * @returns BrandCSP Successful Response
     */
    getBrandBrandBrandIdGet(
        brandId: string,
    ): Promise<BrandCSP>;

    /**
     * **used to get the request options without making a http request**
     * Get Brand
     * @param brandId
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    getBrandBrandBrandIdGetApiRequestOptions(
        brandId: string,
    ): ApiRequestOptions;

    /**
     * Update Brand
     * @param brandId
     * @param requestBody
     * @returns Brand Successful Response
     */
    updateBrandBrandBrandIdPut(
        brandId: string,
        requestBody: UpdateBrand,
    ): Promise<Brand>;

    /**
     * **used to get the request options without making a http request**
     * Update Brand
     * @param brandId
     * @param requestBody
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    updateBrandBrandBrandIdPutApiRequestOptions(
        brandId: string,
        requestBody: UpdateBrand,
    ): ApiRequestOptions;

    /**
     * List External Vettings
     * Get list of valid external vetting record for a given brand
     * @param brandId
     * @returns ExternalVetting Successful Response
     */
    listExternalVettingsBrandBrandIdExternalVettingGet(
        brandId: string,
    ): Promise<Array<ExternalVetting>>;

    /**
     * **used to get the request options without making a http request**
     * List External Vettings
     * Get list of valid external vetting record for a given brand
     * @param brandId
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    listExternalVettingsBrandBrandIdExternalVettingGetApiRequestOptions(
        brandId: string,
    ): ApiRequestOptions;

    /**
     * Order Brand External Vetting
     * Order new external vetting for a brand
     * @param brandId
     * @param requestBody
     * @returns ExternalVetting Successful Response
     */
    orderBrandExternalVettingBrandBrandIdExternalVettingPost(
        brandId: string,
        requestBody: ExternalVetting,
    ): Promise<ExternalVetting>;

    /**
     * **used to get the request options without making a http request**
     * Order Brand External Vetting
     * Order new external vetting for a brand
     * @param brandId
     * @param requestBody
     * @returns ApiRequestOptions the request options to fulfill a http request
     */
    orderBrandExternalVettingBrandBrandIdExternalVettingPostApiRequestOptions(
        brandId: string,
        requestBody: ExternalVetting,
    ): ApiRequestOptions;

}