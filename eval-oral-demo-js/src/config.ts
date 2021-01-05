export enum AiCode {
  Eval = 'sa-call-eval',
}

export const Config = {
  [AiCode.Eval]: {
    appKey: 'appKey',
    secret: 'secret',
    path: {
      cn: 'servicePath',
      en: 'servicePath',
    },
  },
};
