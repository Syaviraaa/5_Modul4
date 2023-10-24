import { useRef, useState } from "react";
import { DrawerLayoutAndroid, StatusBar } from "react-native";
import Header from "./components/header";
import Button from "./components/button";
import Separator from "./components/separator";
import List from "./screens/list";
import Article from "./screens/article";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, View } from "@gluestack-ui/themed";

// Functional Component
const App = () => {
  // State Declaration
  const [page, setPage] = useState("list");
  // Ref Declaration
  const drawer = useRef(null);

  // Arrow Function inside Functional Component
  const changePage = (drawer, pageName) => {
    // Close Drawer
    drawer.current.closeDrawer();
    // Change state value

    setPage(pageName);
  };

  // Arrow Function inside Functional Component
  const navigationView = () => (
    <GluestackUIProvider config={config}>
      <View padding={30} backgroundColor="#222222" flex={1}>
        <Button text="List" onPress={() => changePage(drawer, "list")} />
        <Separator height={30} />
        <Button text="Article" onPress={() => changePage(drawer, "article")} />
        <Separator height={30} />
        <Button text="Close" onPress={() => drawer.current.closeDrawer()} />
      </View>
    </GluestackUIProvider>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <StatusBar style="light" backgroundColor="#AA0002" />
      <View>
        <Header drawer={drawer} />
        {page == "list" ? <List /> : page == "article" ? <Article /> : null}
      </View>
    </DrawerLayoutAndroid>
  );
};

export default App;

