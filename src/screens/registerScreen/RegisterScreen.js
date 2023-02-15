import React, {useEffect, useState} from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {useNavigation} from '@react-navigation/core';
import BackroundWithLogo from '../../components/backroundWithLogo/BackroundWithLogo';
import {apiService} from '../../serivces/business/apiService';
import {errorChecker} from '../../serivces/generic/errorChecker';
import {Alert} from 'react-native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [registerInfo, setRegisterInfo] = useState({
    nickname: '',
    email: '',
    password: '',
  });
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const register = async () => {
    if (registerInfo.password !== repeatedPassword) {
      Alert.alert('Password and repeated passsword must be the same');
    }
    const response = await apiService.register(registerInfo);
    if (response.data.isRegistered) {
      navigation.navigate('Login');
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRegisterInfo({email: '', password: ''});
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <BackroundWithLogo>
      <Input
        placeHolder="Nickname"
        isSecureTextEntryNeeded={false}
        text={registerInfo.nickname}
        handleTextChange={text =>
          setRegisterInfo({...registerInfo, nickname: text})
        }
      />
      <Input
        placeHolder="Email"
        isSecureTextEntryNeeded={false}
        text={registerInfo.email}
        handleTextChange={text =>
          setRegisterInfo({...registerInfo, email: text})
        }
      />
      <Input
        placeHolder="Password"
        isSecureTextEntryNeeded={true}
        text={registerInfo.password}
        handleTextChange={text =>
          setRegisterInfo({...registerInfo, password: text})
        }
      />
      <Input
        placeHolder="Repeat password"
        isSecureTextEntryNeeded={true}
        text={repeatedPassword}
        handleTextChange={setRepeatedPassword}
      />
      <Button
        buttonText="Register"
        onClickAction={() => errorChecker(register)}
      />
    </BackroundWithLogo>
  );
};

export default RegisterScreen;
