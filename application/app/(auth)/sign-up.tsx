import { ThemedText } from "@/components/ThemedText";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import Button from "@/components/ui/button";
import TextInput from "@/components/ui/text-input";
import { useSignUp } from "@clerk/clerk-expo";
import { ClerkAPIError } from "@clerk/types";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";

export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [errors, setErrors] = React.useState<ClerkAPIError[]>([]);
  const [code, setCode] = React.useState("");

  const onSignUpPress = () => {

  };

  const onVerifyPress = () => {
    
  };

  if (pendingVerification) {
    return (
      <BodyScrollView contentContainerStyle={{ padding: 16 }}>
        <TextInput
          value={code}
          label={`Enter the verification code we sent to ${emailAddress}`}
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
        />
        <Button
          onPress={onVerifyPress}
          disabled={!code || isLoading}
          loading={isLoading}
        >
          Verify
        </Button>
        {errors.map((error) => (
          <ThemedText key={error.longMessage} style={{ color: "red" }}>
            {error.longMessage}
          </ThemedText>
        ))}
      </BodyScrollView>
    );
  }

  return (
    <BodyScrollView
      contentContainerStyle={{
        padding: 16,
      }}
    >
       <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        keyboardType="email-address"
        onChangeText={(email) => setEmailAddress(email)}
      />
      <TextInput
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        onPress={onSignUpPress}
        disabled={!emailAddress || !password || isLoading}
        loading={isLoading}
      >
        Continue
      </Button>

      {errors.map((error) => (
        <ThemedText key={error.longMessage} style={{ color: "red" }}>
          {error.longMessage}
        </ThemedText>
      ))}
    </BodyScrollView>
  );
}
