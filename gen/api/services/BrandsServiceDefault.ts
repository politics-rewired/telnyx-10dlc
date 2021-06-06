/* eslint-disable */

import type { Brand } from '../models/Brand';
import type { BrandCSP } from '../models/BrandCSP';
import type { BrandRecordSetCSP } from '../models/BrandRecordSetCSP';
import type { ExternalVetting } from '../models/ExternalVetting';
import type { UpdateBrand } from '../models/UpdateBrand';
import type { BrandsService } from './BrandsService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class BrandsServiceDefault implements BrandsService {

    private readonly config: ApiOptions;

    /**
     * creates a new service
     * @param config the configuration to use
     */
    public constructor(config: ApiOptions) {
        this.config = config;
    }

    public async listBrandsBrandGet(
        displayName?: string,
        entityType?: string,
        state?: string,
        country?: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): Promise<BrandRecordSetCSP> {
        const options = this.listBrandsBrandGetApiRequestOptions(
            displayName,
            entityType,
            state,
            country,
            page,
            recordsPerPage,
        );
        const result = await __request(options);
        return result.body;
    }

    public listBrandsBrandGetApiRequestOptions(
        displayName?: string,
        entityType?: string,
        state?: string,
        country?: string,
        page: number = 1,
        recordsPerPage: number = 10,
    ): ApiRequestOptions {
        return {
            ...this.config,
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
        };
    }

    public async createBrandBrandPost(
        requestBody: Brand,
    ): Promise<Brand> {
        const options = this.createBrandBrandPostApiRequestOptions(
            requestBody,
        );
        const result = await __request(options);
        return result.body;
    }

    public createBrandBrandPostApiRequestOptions(
        requestBody: Brand,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'POST',
            path: `/brand`,
            body: requestBody,
            mediaType: 'application/json',
        };
    }

    public async getBrandBrandBrandIdGet(
        brandId: string,
    ): Promise<BrandCSP> {
        const options = this.getBrandBrandBrandIdGetApiRequestOptions(
            brandId,
        );
        const result = await __request(options);
        return result.body;
    }

    public getBrandBrandBrandIdGetApiRequestOptions(
        brandId: string,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/brand/${brandId}`,
        };
    }

    public async updateBrandBrandBrandIdPut(
        brandId: string,
        requestBody: UpdateBrand,
    ): Promise<Brand> {
        const options = this.updateBrandBrandBrandIdPutApiRequestOptions(
            brandId,
            requestBody,
        );
        const result = await __request(options);
        return result.body;
    }

    public updateBrandBrandBrandIdPutApiRequestOptions(
        brandId: string,
        requestBody: UpdateBrand,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'PUT',
            path: `/brand/${brandId}`,
            body: requestBody,
            mediaType: 'application/json',
        };
    }

    public async listExternalVettingsBrandBrandIdExternalVettingGet(
        brandId: string,
    ): Promise<Array<ExternalVetting>> {
        const options = this.listExternalVettingsBrandBrandIdExternalVettingGetApiRequestOptions(
            brandId,
        );
        const result = await __request(options);
        return result.body;
    }

    public listExternalVettingsBrandBrandIdExternalVettingGetApiRequestOptions(
        brandId: string,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'GET',
            path: `/brand/${brandId}/externalVetting`,
        };
    }

    public async orderBrandExternalVettingBrandBrandIdExternalVettingPost(
        brandId: string,
        requestBody: ExternalVetting,
    ): Promise<ExternalVetting> {
        const options = this.orderBrandExternalVettingBrandBrandIdExternalVettingPostApiRequestOptions(
            brandId,
            requestBody,
        );
        const result = await __request(options);
        return result.body;
    }

    public orderBrandExternalVettingBrandBrandIdExternalVettingPostApiRequestOptions(
        brandId: string,
        requestBody: ExternalVetting,
    ): ApiRequestOptions {
        return {
            ...this.config,
            method: 'POST',
            path: `/brand/${brandId}/externalVetting`,
            body: requestBody,
            mediaType: 'application/json',
        };
    }

}