import { useNavigation } from '@react-navigation/core';

export function OnNavigate(screen:any, {...props}) {
  const navigation = useNavigation()
  return navigation.navigate(screen, props);
}