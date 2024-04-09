import * as React from 'react';
import { useRouter } from 'next/router';

import { markNewsAsSeen, shallRedirectToNews } from '../../apps/news/news.version';

import { navigateToNews, ROUTE_APP_CHAT } from '~/common/app.routes';
import { useNextLoadProgress } from '~/common/components/useNextLoadProgress';


export function ProviderBootstrapLogic(props: { children: React.ReactNode }) {

  // external state
  const { route, events } = useRouter();

  // wire-up the NextJS router to a loading bar to be displayed while routes change
  useNextLoadProgress(route, events);


  // F5키 입력시 뉴스로 re-route 되지 않도록 수정
  // const doRedirectToNews = (route === ROUTE_APP_CHAT) && shallRedirectToNews();


  // // redirect Chat -> News if fresh news
  // const isRedirecting = React.useMemo(() => {
  //   if (doRedirectToNews) {
  //     // the async is important (esp. on strict mode second pass)
  //     navigateToNews().then(() => markNewsAsSeen());
  //     return true;
  //   }
  //   return false;
  // }, [doRedirectToNews]);

  // return isRedirecting ? null : props.children;

  return props.children;

}