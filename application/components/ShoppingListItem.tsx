import React from "react";
import { ThemedText } from "./ThemedText";
import { useShoppingListProductCount, useShoppingListUserNicknames, useShoppingListValue } from "@/stores/ShoppingListStore";
import { useDelShoppingListCallback } from "@/stores/ShoppingListsStore";
import { StyleSheet } from "react-native";
import { appleRed, borderColor } from "@/constants/Colors";

export default function ShoppingListItem({ listId }: { listId: string }) {

  const [name] = useShoppingListValue(listId, "name");
  const [emoji] = useShoppingListValue(listId, "emoji");
  const [color] = useShoppingListValue(listId, "color");
  const productCount = useShoppingListProductCount(listId);
  const userNicknames = useShoppingListUserNicknames(listId);

  const deleteCallback = useDelShoppingListCallback(listId);

  return (
    <>
      <ThemedText>{emoji} {name}</ThemedText>
    </>
  );
}

const styles = StyleSheet.create({
  rightAction: {
    width: 200,
    height: 65,
    backgroundColor: appleRed,
    alignItems: "center",
    justifyContent: "center",
  },
  swipeable: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: borderColor,
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flexShrink: 1,
  },
  textContent: {
    flexShrink: 1,
  },
  productCount: {
    fontSize: 12,
    color: "gray",
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  nicknameContainer: {
    flexDirection: "row",
    marginRight: 4,
  },
  nicknameCircle: {
    fontSize: 12,
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 16,
    padding: 1,
    width: 24,
    height: 24,
    textAlign: "center",
    lineHeight: 20,
  },
  ellipsisCircle: {
    lineHeight: 0,
    marginLeft: -6,
  },
});