import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1.5px solid ${({ theme })=> theme.colors.text};
    border-radius: 5px;

    padding: 16px 59px;
`;
export const Icon = styled(Feather)`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1.5px solid ${({ theme })=> theme.colors.text};
    border-radius: 5px;

    padding: 16px 59px;
`;
export const Title = styled.Text`
    font-family: ${({ theme })=> theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;