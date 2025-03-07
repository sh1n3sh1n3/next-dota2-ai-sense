import { APIClient } from './api_helper';

import * as url from './url_helper';

const api = new APIClient();

// Login Method
export const aiAnswer = (data: any) => api.create(`${url.AI_ANSWER}/get-answer`, data);
