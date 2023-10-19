interface ParamProps {
  paramType: string;
  paramValue: string | number;
}

interface ParamHelperProps {
  url: string;
  params: ParamProps[];
}

const paramHelper = ({ url, params }: ParamHelperProps) => {
  // FIXME :: 케이스에 따라 던져주는 데이터 구조가 일치하지 않아서 reduce 를 활용할 때 문제가 생기는 로직 예외처리
  if (params[0].paramType === 'offset') {
    return `${url}&${params[0].paramType}=${params[0].paramValue}`;
  }

  return params
    .filter((item) => item.paramValue !== '')
    .reduce(
      (acc, cur) =>
        acc
          ? `${acc}&${cur.paramType}=${cur.paramValue}`
          : `${url}?${cur.paramType}=${cur.paramValue}`,
      ''
    );
};

export type { ParamHelperProps, ParamProps };
export { paramHelper };
