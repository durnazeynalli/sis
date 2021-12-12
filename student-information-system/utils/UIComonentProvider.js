import React from 'react';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';

//a provider for UI kitten so we can use its comonents and cons
export const UIComonentProvider = ({ children }) => (
   <>
      {/* installing icons */}
      <IconRegistry icons={EvaIconsPack}/>
      {/* provider for comonents */}
      <ApplicationProvider theme={eva.light} {...eva}>
         {children}
      </ApplicationProvider>
   </>
);
