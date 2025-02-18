import { useSignIn } from "@clerk/clerk-expo";
import { ThemedText } from "@/components/ThemedText";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import Button from "@/components/ui/button";
import TextInput from "@/components/ui/text-input";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import { View } from "react-native";

export default function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const onSignInPress = () => {

  };

  return (
    <BodyScrollView contentContainerStyle={{
      padding: 16,
    }}>
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

      <View style={{ marginTop: 16, alignItems: "center" }}>
        <ThemedText>Don't have an account?</ThemedText>
        <Button onPress={() => router.push("/sign-up")} variant="ghost">
          Sign up
        </Button>
      </View>
      <View style={{ marginTop: 16, alignItems: "center" }}>
        <ThemedText>Forgot password?</ThemedText>
        <Button
          onPress={() => router.push("/reset-password")}
          variant="ghost"
        >
          Reset password
        </Button>
      </View>
    </BodyScrollView>
  );
}
