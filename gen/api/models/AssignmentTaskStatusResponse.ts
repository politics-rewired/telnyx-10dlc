/* eslint-disable */


import type { TaskStatus } from './TaskStatus';

export type AssignmentTaskStatusResponse = {
    taskId: string;
    /**
     * The status of the task associated with assigning a messaging profile to a campaign.
     */
    status: TaskStatus;
    createdAt?: string;
    updatedAt?: string;
}

export namespace AssignmentTaskStatusResponse {

    /**
     * the discriminator for the model if required for more complex api's
     */
    export const discriminator = 'AssignmentTaskStatusResponse';


}