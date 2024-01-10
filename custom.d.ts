// Reference: https://velog.io/@xmun74/TS%EC%97%90%EC%84%9C-svg-import-%EC%95%88%EB%90%A0-%EB%95%8C

declare module "*.svg" {
  const content: any;
  export default content;
}
