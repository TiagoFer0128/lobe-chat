'use client';

import { PropsWithChildren, ReactNode, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import FullscreenLoading from '@/components/FullscreenLoading';
import { useIsMobile } from '@/hooks/useIsMobile';

interface ServerResponsiveLayoutProps {
  Desktop: (props: PropsWithChildren) => ReactNode;
  Mobile: (props: PropsWithChildren) => ReactNode;
  children?: ReactNode;
}
const ResponsiveLayout = ({ children, Desktop, Mobile }: ServerResponsiveLayoutProps) => {
  const { t } = useTranslation();
  const mobile = useIsMobile();

  return (
    <Suspense fallback={<FullscreenLoading title={t('layoutInitializing', { ns: 'common' })} />}>
      {mobile ? <Mobile>{children}</Mobile> : <Desktop>{children}</Desktop>}
    </Suspense>
  );
};

export default ResponsiveLayout;
