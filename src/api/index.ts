import type { IssueResType } from '../store/modules/issues/types/index';
import client from '../utils/http';
export const fetchIssues = () => {
  return client.get<IssueResType>('/github/issues');
};
