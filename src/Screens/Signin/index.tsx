import React from 'react';
import { Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import GoogleSvg from '../../assets/logo.svg';
import AppleSvg from '../../assets/logo.svg';
import LogoSvg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';

import { SignInSocialButton } from '../../components/SignInSocialButton';

import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper,
} from './styles';
export function SignIn() {
    const { signInWithGoogle } = useAuth();

    async function handleSignInWithGoogle() {
        try {
            await signInWithGoogle();

        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível conectar a conta Google');
        }
    }
    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />

                    <Title>
                        Controle suas {'\n'}
                        finanças de forma {'\n'}
                        muito simples
                    </Title>
                </TitleWrapper>
            <SignInTitle>
                Faça seu login com umas das contas abaixo
            </SignInTitle>
            </Header>

            <Footer>
                <FooterWrapper>
                    <SignInSocialButton
                        title="Entrar com Google"
                        svg={GoogleSvg}    
                        onPress={handleSignInWithGoogle}
                    />

                    <SignInSocialButton
                        title="Entrar com Apple"
                        svg={AppleSvg}    
                    />
                    
                </FooterWrapper>
            </Footer>
        </Container>
    )
}
