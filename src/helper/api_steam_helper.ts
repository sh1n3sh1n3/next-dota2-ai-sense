import { APIClient } from './api_helper';

import * as url from './url_helper';

// Login Method
export const aiAnswer = (data: any) => APIClient.create(`${url.AI_ANSWER}/get-answer`, data);

export const saveQA = (data: any) => APIClient.create(`${url.AI_ANSWER}/save-qa`, data);

export const getQA = (data: any) => APIClient.create(`${url.AI_ANSWER}/get-qa`, data);

export const saveActionLog = (data: any) =>
  APIClient.create(`${url.AI_ANSWER}/save-actionlog`, data);

export const savePreQuestion = (data: any) =>
  APIClient.create(`${url.AI_ANSWER}/save-prequestion`, data);

export const getPreQuestion = () => APIClient.get(`${url.AI_ANSWER}/get-prequestion`, {});

export const editPreQuestion = (data: any) =>
  APIClient.create(`${url.AI_ANSWER}/edit-prequestion`, data);

export const deletePrequestion = (data: any) =>
  APIClient.create(`${url.AI_ANSWER}/delete-prequestion`, { data });
