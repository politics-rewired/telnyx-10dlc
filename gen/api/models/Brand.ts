/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AltBusinessIdType1 } from './AltBusinessIdType1';
import type { BrandRelationship1 } from './BrandRelationship1';
import type { EntityType1 } from './EntityType1';
import type { StockExchange1 } from './StockExchange1';

export type Brand = {
    /**
     * Entity type behind the brand. This is the form of business establishment.
     */
    entityType: EntityType1;
    /**
     * Unique identifier assigned to the csp by the registry.
     */
    cspId?: string;
    /**
     * Unique identifier assigned to the brand by the registry.
     */
    brandId?: string;
    /**
     * Display or marketing name of the brand.
     */
    displayName: string;
    /**
     * (Required for Non-profit/private/public) Legal company name.
     */
    companyName?: string;
    /**
     * (Required for Non-profit) Government assigned corporate tax ID. EIN is 9-digits in U.S.
     */
    ein?: string;
    /**
     * Valid phone number in e.164 international format.
     */
    phone?: string;
    /**
     * Street number and name.
     */
    street?: string;
    /**
     * City name
     */
    city?: string;
    /**
     * State. Must be 2 letters code for United States.
     */
    state?: string;
    /**
     * Postal codes. Use 5 digit zipcode for United States
     */
    postalCode?: string;
    /**
     * ISO2 2 characters country code. Example: US - United States
     */
    country: string;
    /**
     * Valid email address of brand support contact.
     */
    email: string;
    /**
     * (Required for public company) stock symbol.
     */
    stockSymbol?: string;
    /**
     * (Required for public company) stock exchange.
     */
    stockExchange?: StockExchange1;
    /**
     * IP address of the browser requesting to create brand identity.
     */
    ipAddress?: string;
    /**
     * Brand website URL.
     */
    website?: string;
    /**
     * Brand relationship to the CSP
     */
    brandRelationship: BrandRelationship1;
    /**
     * Vertical or industry segment of the brand.
     */
    vertical: string;
    /**
     * Alternate business identifier such as DUNS, LEI, or GIIN
     */
    altBusinessId?: string;
    altBusinessIdType?: AltBusinessIdType1;
    /**
     * Universal EIN of Brand, Read Only.
     */
    universalEin?: string;
}
