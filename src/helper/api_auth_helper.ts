import { APIClient } from './api_helper';

import * as url from './url_helper';

export const updateProfile = (data: any) => APIClient.create(`${url.AUTH}/edit-user`, data);
