import { IconCircle } from "@/components/IconCircle";
import ShoppingListItem from "@/components/ShoppingListItem";
import { ThemedText } from "@/components/ThemedText";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import Button from "@/components/ui/button";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { appleBlue, backgroundColors } from "@/constants/Colors";
import { useShoppingListIds } from "@/stores/ShoppingListsStore";
import { useClerk } from "@clerk/clerk-expo";
import { Link, router, Stack } from "expo-router";
import { FlatList, StyleSheet } from "react-native";
import { Platform, Pressable } from "react-native";

export default function Home() {
  const { signOut } = useClerk();
  const shoppingListIds = useShoppingListIds();

  const handleNewListPress = () => {
    
  };

  const handleProfilePress = () => {
    
  };


  const renderEmptyList = () => (
    <BodyScrollView contentContainerStyle={styles.emptyStateContainer}>
      <IconCircle
        emoji="🛒"
        backgroundColor={
          backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
        }
      />
      <Button onPress={handleNewListPress} variant="ghost">
        Create your first list
      </Button>
    </BodyScrollView>
  );

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
        <FlatList
          data={shoppingListIds}
          renderItem={({ item: listId }) => (
            <ShoppingListItem listId={listId} />
          )}  
          contentContainerStyle={styles.listContainer}
          contentInsetAdjustmentBehavior="automatic"
          ListEmptyComponent={renderEmptyList}
        />
      </BodyScrollView>
    </>
  );
}


const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 8,
  },
  emptyStateContainer: {
    alignItems: "center",
    gap: 8,
    paddingTop: 100,
  },
  headerButton: {
    padding: 8,
    paddingRight: 0,
    marginHorizontal: Platform.select({ web: 16, default: 0 }),
  },
  headerButtonLeft: {
    paddingLeft: 0,
  },
});
