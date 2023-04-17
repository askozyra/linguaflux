import { StyleService } from "@ui-kitten/components";
import { Dimensions } from 'react-native';

export const RegistrationStyles = StyleService.create({
  InnerLayout: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Dimensions.get('window').height / 2,
    width: '90%',
  },
  LoginRefWRapper: {
    flexDirection: 'row',
    gap: 5
  },
  LoginRefLinkSpan:
  {
    color: 'rgb(255, 0, 97)',
    textDecorationLine: 'underline'
  },
});