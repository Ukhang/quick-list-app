import { isClerkAPIResponseError, useSignIn } from "@clerk/clerk-expo";
import { ThemedText } from "@/components/ThemedText";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import Button from "@/components/ui/button";
import TextInput from "@/components/ui/text-input";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import { View, Image } from "react-native";
import { ClerkAPIError } from "@clerk/types";

export default function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errors, setErrors] = React.useState<ClerkAPIError[]>([]);

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) return;

    setIsSigningIn(true);

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(index)");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      if (isClerkAPIResponseError(err)) setErrors(err.errors);
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setIsSigningIn(false);
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <BodyScrollView
      contentContainerStyle={{
        padding: 16,
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 40,
          paddingBottom: 40
        }}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 100, height: 100, }}
        />
      </View>

      <TextInput
        label="Email"
        value={emailAddress}
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
      />
      <TextInput
        value={password}
        label="Password"
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        onPress={onSignInPress}
        loading={isSigningIn}
        disabled={!emailAddress || !password || isSigningIn}
      >
        Sign in
      </Button>
      {errors.map((error) => (
        <ThemedText key={error.longMessage} style={{ color: "red" }}>
          {error.longMessage}
        </ThemedText>
      ))}

      <View style={{ marginTop: 16, alignItems: "center" }}>
        <ThemedText>Don't have an account?</ThemedText>
        <Button onPress={() => router.push("/sign-up")} variant="ghost">
          Sign up
        </Button>
      </View>
      <View style={{ marginTop: 16, alignItems: "center" }}>
        <ThemedText>Forgot password?</ThemedText>
        <Button onPress={() => router.push("/reset-password")} variant="ghost">
          Reset password
        </Button>
      </View>
    </BodyScrollView>
  );
}
