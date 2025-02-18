import { useSignIn } from "@clerk/clerk-expo";
import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import Button from "@/components/ui/button";
import TextInput from "@/components/ui/text-input";

export default function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState("");

  return (
    <View>
      <ThemedText type="title">Sign In</ThemedText>
      <Link href="/sign-up">Go to sign up</Link>
      <TextInput label="hello"/>
      <Button>Hello</Button>
    </View>
  );
}
