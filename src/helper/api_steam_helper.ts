import { APIClient } from './api_helper';

import * as url from './url_helper';

// Login Method
export const aiAnswer = (data: any) => APIClient.create(`${url.AI_ANSWER}/get-answer`, data);

export const saveQA = (data: any) => APIClient.create(`${url.AI_ANSWER}/save-qa`, data);
export const getQA = (data: any) => APIClient.create(`${url.AI_ANSWER}/get-qa`, data);
