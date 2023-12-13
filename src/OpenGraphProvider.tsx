//@ts-ignore
import React, { FC, type PropsWithChildren, createContext } from 'react';
import { OpenGraphHeadProps } from './OpenGraphHead';

export const OpenGraphContext = createContext<OpenGraphHeadProps>({});

export interface OpenGraphProviderProps
  extends OpenGraphHeadProps,
    PropsWithChildren {
  head?: any;
}

export const OpenGraphProvider: FC<OpenGraphProviderProps> = function (props) {
  const { children, head, ...rest } = props;

  return (
    <OpenGraphContext.Provider value={rest}>
      {children}
    </OpenGraphContext.Provider>
  );
};
