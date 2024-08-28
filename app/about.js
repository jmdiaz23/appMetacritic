import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { styled } from "nativewind";

import { HomeIcon } from "../components/Icons";
import { Screen } from "../components/Screen";

const StyledPressable = styled(Pressable);
export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable className={"active:opacity-20"}>
            <HomeIcon />
          </StyledPressable>
        </Link>

        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>

        <Text className="text-white text-white/90 mb-4›">
          è un testo segnaposto utilizzato nel settore della tipografia e della
          stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal
          sedicesimo secolo, quando un anonimo tipografo prese una cassetta di
          caratteri e li assemblò per preparare un testo campione. È
          sopravvissuto non solo a più di cinque secoli, ma anche al passaggio
          alla videoimpaginazione, pervenendoci sostanzialmente inalterato.
        </Text>

        <Text className="text-white text-white/90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </Text>
        <Text className="text-white text-white/90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </Text>
        <Text className="text-white text-white/90 mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </Text>
      </ScrollView>
    </Screen>
  );
}
