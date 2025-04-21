export interface IssueResType {
  data: Issues[];
  page: number;
  success: boolean;
  total: number;
}

export interface Issues {
  id: number;
  number: number;
  title: string;
  labels: Label[];
  state: State;
  locked: boolean;
  comments: number;
  created_at: number;
  updated_at: number;
  closed_at: null;
  author_association: AuthorAssociation;
  user: User;
  avatar: string;
  pull_request?: PullRequest;
}

export enum AuthorAssociation {
  Contributor = 'CONTRIBUTOR',
  None = 'NONE',
}

export interface Label {
  name: Name;
  color: Color;
}

export enum Color {
  Default = 'default',
  Error = 'error',
  Processing = 'processing',
  Success = 'success',
}

export enum Name {
  Bug = 'bug',
  Dependencies = 'dependencies',
  InProgress = 'In Progress',
  Question = 'question',
}

export interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
}

export enum State {
  Open = 'open',
}

export enum User {
  Chenshuai2144 = 'chenshuai2144',
}
/* -------------------------------------------------------------------------- */
export enum ActionType {
  /** 设置issues列表 */
  SET_ISSUES = 'SET_ISSUES',
  /** 重置issues列表 */
  RESET_ISSUES = 'RESET_ISSUES',
}
export type Action =
  | { type: ActionType.SET_ISSUES; payload: Issues[] }
  | { type: ActionType.RESET_ISSUES };
