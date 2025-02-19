import * as UiReact from "tinybase/ui-react/with-schemas";
import { NoValuesSchema } from "tinybase/store";
import { useUser } from "@clerk/clerk-expo";
import { createMergeableStore } from "tinybase/with-schemas";
import { useCreateClientPersisterAndStart } from "./persistence/useCreateClientPersisterAndStart";
import { useCreateServerSynchronizerAndStart } from "./synchronization/useCreateServerSynchronizerAndStart";
import ShoppingListStore from "./ShoppingListStore";

const STORE_ID_PREFIX = "shoppingListsStore-";

const TABLES_SCHEMA = {
  lists: {
    id: { type: "string" },
    initialContentJson: { type: "string" }
  },
} as const;

const {
  useCreateMergeableStore,
  useDelRowCallback,
  useProvideStore,
  useRowIds,
  useSortedRowIds,
  useStore,
  useTable,
} = UiReact as UiReact.WithSchemas<[typeof TABLES_SCHEMA, NoValuesSchema]>;

const useStoreId = () => STORE_ID_PREFIX + useUser().user.id;

export default function ShoppingListsStore() {
  const storeId = useStoreId();
  const store = useCreateMergeableStore(() =>
    createMergeableStore().setTablesSchema(TABLES_SCHEMA)
  );
  useCreateClientPersisterAndStart(storeId, store);
  useCreateServerSynchronizerAndStart(storeId, store);
  useProvideStore(storeId, store);
  const currentUserLists = useTable("lists", storeId);

  return Object.entries(currentUserLists).map(([listId, { initialContentJson }]) => (
    <ShoppingListStore
      listId={listId}
      key={listId}
      initialContentJson={initialContentJson}
    />
  ));
}
