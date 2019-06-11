export interface IReactNavigationPage {
  navigation: { navigate: (route: string) => void };
  children?: React.ReactNode;
}
