import { useSignIn } from "@clerk/clerk-expo";
import { ThemedText } from "@/components/ThemedText";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import Button from "@/components/ui/button";
import TextInput from "@/components/ui/text-input";
import { BodyScrollView } from "@/components/ui/BodyScrollView";

export default function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState("");

  return (
    <BodyScrollView>
      <TextInput label=""/>
      <Button>Hello</Button>
    </BodyScrollView>
  );
}
