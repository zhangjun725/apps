// Copyright 2017-2020 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useTranslation as useTranslationBase } from 'react-i18next';

type Result = (key: string, options?: any) => string;

export function useTranslation (ns: string): Result {
  const { t } = useTranslationBase(ns);

  return (key: string, options?: any) => t<string>(key, options);
}
