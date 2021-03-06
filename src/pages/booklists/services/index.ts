import request from '../../../utils/http';
import { QueryBooklistsParams } from '../data';

export const queryBooklists = (params: QueryBooklistsParams) => {
  return request.get('/v2/articles', { params });
};
