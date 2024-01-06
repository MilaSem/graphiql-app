import React, {
  type FC,
  type ReactNode,
  createContext,
  useState,
  type Dispatch,
} from 'react';
import { Lang } from '../model/enums';
import en from './en.json';
import ru from './ru.json';

interface ContextProps {
  children: ReactNode
}

interface Translate {
  language: Lang
  dictionary: typeof en | typeof ru
  setLanguage: Dispatch<React.SetStateAction<Lang>>
}

const dictionaryList = { en, ru };

export const LangContext = createContext<Translate>({
  language: Lang.en,
  dictionary: dictionaryList.en,
  setLanguage: () => {},
});

export const LangProvider: FC<ContextProps> = ({ children }) => {
  const [language, setLanguage] = useState(Lang.en);

  const provider = {
    language,
    setLanguage,
    dictionary: dictionaryList[language],
  };

  return (
    <LangContext.Provider value={provider}>{children}</LangContext.Provider>
  );
};
