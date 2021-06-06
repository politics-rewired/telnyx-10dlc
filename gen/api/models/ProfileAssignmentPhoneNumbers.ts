/* eslint-disable */


export type ProfileAssignmentPhoneNumbers = {
    /**
     * The ID of the task associated with the phone number.
     */
    taskId: string;
    /**
     * The phone number that the status is being checked for.
     */
    phoneNumber: string;
    /**
     * The status of the associated phone number assignment.
     */
    status: string;
}

export namespace ProfileAssignmentPhoneNumbers {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'ProfileAssignmentPhoneNumbers';


}