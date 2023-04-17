import { StyleService } from "@ui-kitten/components";
import { Dimensions } from 'react-native';

export const LoginStyles = StyleService.create({
  InnerLayout: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Dimensions.get('window').height / 3,
    width: '90%',
  },
  RememberMeRowOuterWrapper: {
    width: '100%'
  },
  RememberMeRowInnerWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '40%',
    flexDirection: 'row'
  },
  RegistrationRefWRapper: {
    flexDirection: 'row',
    gap: 5
  },
  RegistrationRefLinkSpan:
  {
    color: 'rgb(255, 0, 97)',
    textDecorationLine: 'underline'
  },
});