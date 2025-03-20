import { APIClient } from './api_helper';

import * as url from './url_helper';

export const purchasePlan = (data: any) => APIClient.create(`${url.PLAN}/purchase-plan`, data);

export const cancelPlan = (data: any) => APIClient.create(`${url.PLAN}/cancel-plan`, data);
