import { createHistory } from '@reach/router';
export const history = createHistory(window as any);
export const { navigate } = history;
