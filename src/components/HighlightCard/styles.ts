import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import theme from "../../Global/Styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};

    width: ${RFValue(300)}px;
    border-radius: 5px;

    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
`

export const Header = styled.View``
export const Title = styled.TextInput``
export const Icon = styled(Feather)``
export const Footer = styled.View``
export const Amount = styled.Text``
export const LastTransaction = styled.Text``

