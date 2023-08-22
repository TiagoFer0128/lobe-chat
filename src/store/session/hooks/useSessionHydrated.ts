import { useEffect, useState } from 'react';

import { useSessionStore } from '../store';

export const useSessionHydrated = () => {
  // 根据 sessions 是否有值来判断是否已经初始化
  const hasInited = !!Object.values(useSessionStore.getState().sessions).length;
  // 并且插件的 manifest 也准备完毕
  const manifestPrepared = useSessionStore((s) => s.manifestPrepared);
  const [isInit, setInit] = useState(hasInited);

  useEffect(() => {
    const hasRehydrated = useSessionStore.persist.hasHydrated();

    if (hasRehydrated && !isInit) {
      setInit(true);
    }
  }, []);

  return isInit && manifestPrepared;
};
