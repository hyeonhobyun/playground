import { ParamProps } from '@playground/feature/src/lib/helper/paramHelper';

type BridgeAction = {
  id: string;
  redirectUrl: string;
  dataTrackingProperties?: [
    {
      adjustTrackerID: string;
      mixpanelEventName: string;
      mixpanelEventData: {
        [key: string]: string;
      };
    }
  ];
};

type NextImageImport = {
  blurDataURL: string;
  height: number;
  src: string;
  width: number;
};

type DecodedJWT = {
  data: {
    sequenceID: string;
    status: string;
  };
  iss: string;
  aud: string;
  sub: string;
  exp: number;
  iat: number;
  nbf: number;
};

type CertificateCompanyCodeValidCheck = {
  companyName: boolean;
  registerCode: boolean;
};

type CertificateCompanyCodeState = {
  companyName: string;
  registerCode: string;
};

interface B2BSignUpState {
  email: string;
  nickname: string;
  password: string;
  reEnterPassword: string;
}

interface B2BSignUpValidCheck {
  email: boolean;
  nickname: boolean;
  password: boolean;
  reEnterPassword: boolean;
  authPhoneNumber: boolean;
  checkedOverAge: boolean;
  checkedTermsOfService: boolean;
  checkedPrivacyPolicy: boolean;
}

type ReactHookFormFieldKeyState =
  | keyof CertificateCompanyCodeState
  | keyof B2BSignUpState
  | keyof SuggestMarketingState;

interface SuggestMarketingState {
  marketingPush: boolean;
  marketingEmail: boolean;
  isAgreeMarketingMessage: boolean;
  isAgreeMarketingNightPush: boolean;
}

type TabType = '홈' | '오늘' | '감정마켓';

interface Coupon {
  isActive: boolean;
  isPointPaymentCoupon: boolean;
  generatedAt: string;
  partnerID: string;
  service: string;
  type: string;
  subType: string;
  couponID: string;
  discountPercent: number;
  title: string;
  subTitle: string;
  paymentDescription: string;
  description: string;
  subDescription: string;
  counselingType: string;
  discountPrices: any; // 어떤 타입을 내려줄까요, {}로 데이터를 내려 주어서 추측이 안 됩니다ㅜㅜ
  referer: string;
  finishedAt: string;
  noticeGuide: string;
  warningGuide: string;
  availableSolutions: string[];
}

interface CounselorParamProps {
  orderType: ParamProps;
  searchType: ParamProps;
  counselingType: ParamProps;
  limit: ParamProps;
  partnerLevel: ParamProps;
  partnerGender: ParamProps;
  partnerAwards: ParamProps;
  workSchedule: ParamProps;
  partnerCertification: ParamProps;
}

declare type SafeNumber = number | `${number}`;

export type {
  BridgeAction,
  NextImageImport,
  DecodedJWT,
  CertificateCompanyCodeState,
  ReactHookFormFieldKeyState,
  CertificateCompanyCodeValidCheck,
  B2BSignUpState,
  B2BSignUpValidCheck,
  SuggestMarketingState,
  TabType,
  Coupon,
  CounselorParamProps,
  SafeNumber,
};
