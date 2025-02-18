import { Stack } from "expo-router";

export default function HomeLayout() {
    return (
        <Stack
              screenOptions={{
                ...(process.env.EXPO_OS !== "ios"
                  ? {}
                  : {
                      headerLargeTitle: true,
                      headerTransparent: true,
                      headerBlurEffect: "systemChromeMaterial",
                      headerLargeTitleShadowVisible: false,
                      headerShadowVisible: true,
                      headerLargeStyle: {
                        backgroundColor: "transparent",
                      },
                    }),
              }}
            >
            <Stack.Screen name="index" options={{ headerTitle: "Shopping Lists" }}/>
        </Stack>
    )
}