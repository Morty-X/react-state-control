import type { IssueResType } from '../store/modules/issues/types/index';
import client from '../utils/http';

export const fetchIssues = () => {
  return client.get<IssueResType>('/github/issues');
};

export interface loginByQrResType {
  code: number;
  msg: string;
  data: Data;
}

export interface Data {
  url: string;
  qrcode_key: string;
}

/**
 * 通过二维码登录
 *
 * 此函数发起一个POST请求到/login/apply/qrcode端点，以获取登录二维码
 * 它没有参数，也没有返回值
 */
export const loginByQr = () => {
  return client.post<loginByQrResType>('/login/apply/qrcode');
};
/* -------------------------------------------------------------------------- */

export interface checkStatusResType {
  code: number;
  msg: string;
  data: QRStatusData;
  cookie: string;
}

export interface QRStatusData {
  url: string;
  refresh_token: string;
  timestamp: number;
  code: number;
  message: string;
}

/**
 * 检查登录二维码的状态
 *
 * 该函数通过发送POST请求到指定的接口，来检查登录二维码的当前状态它用于验证用户是否已经通过扫描二维码登录
 *
 * @param key 用于标识二维码的唯一键值，通过该键值来查询二维码的状态
 * @returns 返回一个Promise对象，解析后包含二维码状态的相关信息
 */
export const checkStatus = (key: string) => {
  return client.post<checkStatusResType>(
    '/login/qrcode',
    {},
    { params: { key } }
  );
};

export interface UserInfo {
  code: number;
  msg: string;
  data: UserInfoData;
}

export interface UserInfoData {
  mid: number;
  name: string;
  sex: string;
  face: string;
  sign: string;
  rank: number;
  level: number;
  jointime: number;
  moral: number;
  silence: number;
  email_status: number;
  tel_status: number;
  identification: number;
  vip: Vip;
  pendant: Pendant;
  nameplate: Nameplate;
  official: ExpertInfo;
  birthday: number;
  is_tourist: number;
  is_fake_account: number;
  pin_prompting: number;
  is_deleted: number;
  in_reg_audit: number;
  is_rip_user: boolean;
  profession: Profession;
  face_nft: number;
  face_nft_new: number;
  is_senior_member: number;
  honours: Honours;
  digital_id: string;
  digital_type: number;
  attestation: Attestation;
  expert_info: ExpertInfo;
  name_render: null;
  country_code: string;
  level_exp: LevelExp;
  coins: number;
  following: number;
  follower: number;
}

export interface Attestation {
  type: number;
  common_info: CommonInfo;
  splice_info: SpliceInfo;
  icon: string;
  desc: string;
}

export interface CommonInfo {
  title: string;
  prefix: string;
  prefix_title: string;
}

export interface SpliceInfo {
  title: string;
}

export interface ExpertInfo {
  title: string;
  state?: number;
  type: number;
  desc: string;
  role?: number;
}

export interface Honours {
  mid: number;
  colour: Colour;
  tags: null;
  is_latest_100honour: number;
}

export interface Colour {
  dark: string;
  normal: string;
}

export interface LevelExp {
  current_level: number;
  current_min: number;
  current_exp: number;
  next_exp: number;
  level_up: number;
}

export interface Nameplate {
  nid: number;
  name: string;
  image: string;
  image_small: string;
  level: string;
  condition: string;
}

export interface Pendant {
  pid: number;
  name: string;
  image: string;
  expire: number;
  image_enhance: string;
  image_enhance_frame: string;
  n_pid: number;
}

export interface Profession {
  id: number;
  name: string;
  show_name: string;
  is_show: number;
  category_one: string;
  realname: string;
  title: string;
  department: string;
  certificate_no: string;
  certificate_show: boolean;
}

export interface Vip {
  type: number;
  status: number;
  due_date: number;
  vip_pay_type: number;
  theme_type: number;
  label: Label;
  avatar_subscript: number;
  nickname_color: string;
  role: number;
  avatar_subscript_url: string;
  tv_vip_status: number;
  tv_vip_pay_type: number;
  tv_due_date: number;
  avatar_icon: AvatarIcon;
}

export interface AvatarIcon {
  icon_type: number;
  icon_resource: IconResource;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IconResource {}

export interface Label {
  path: string;
  text: string;
  label_theme: string;
  text_color: string;
  bg_style: number;
  bg_color: string;
  border_color: string;
  use_img_label: boolean;
  img_label_uri_hans: string;
  img_label_uri_hant: string;
  img_label_uri_hans_static: string;
  img_label_uri_hant_static: string;
}
/** 获取用户信息 */
export const getUserInfo = () => {
  return client.post<UserInfo>('/get/info');
};
