import { ThemedText } from "@/components/ThemedText";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import Button from "@/components/ui/button";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { appleBlue } from "@/constants/Colors";
import { useClerk } from "@clerk/clerk-expo";
import { router, Stack } from "expo-router";
import { Platform, Pressable } from "react-native";

export default function Home() {
  const { signOut } = useClerk();

  const renderHeaderRight = () => (
    <Pressable
      onPress={() => router.push("/list/new")}
    //   style={styles.headerButton}
    >
      <IconSymbol name="plus" color={appleBlue} />
    </Pressable>
  );

  const renderHeaderLeft = () => (
    <Pressable
      // work around for https://github.com/software-mansion/react-native-screens/issues/2219
      // onPress={handleProfilePress}
      onPress={() => router.push("/profile")}
    //   style={[styles.headerButton, styles.headerButtonLeft]}
    >
      <IconSymbol
        name="gear"
        color={appleBlue}
        style={{ marginRight: Platform.select({ default: 0, android: 8 }) }}
      />
    </Pressable>
  );

  return (
    <>
      <Stack.Screen
        options={{
          title: "Shopping lists",
          headerRight: renderHeaderRight,
          headerLeft: renderHeaderLeft,
        }}
      />
      <BodyScrollView contentContainerStyle={{ padding: 16 }}>
        <ThemedText type="title">Home</ThemedText>
        <Button onPress={signOut}>Sign out</Button>
      </BodyScrollView>
    </>
  );
}
