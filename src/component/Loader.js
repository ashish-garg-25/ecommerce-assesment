import React from "react";
import { StyleSheet , View ,Text,SafeAreaView, ActivityIndicator } from "react-native";

const Loader = () => {
    return (
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <ActivityIndicator
                    size="large"
                    color={"black"}
                    style={{ marginLeft: 6 }}
                  />
        </SafeAreaView>
    )
}

export default Loader