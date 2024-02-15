import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, } from "react-native";
import HeaderComponent from "../component/HeaderComponent";
import ProductComponent from "../component/ProductComponent";
import Loader from "../component/Loader";
import Preferences from "../component/LocalStorage";

const ProductListingScreen = () => {
  const [list, setList] = useState([])
  const [cart, setCart] = useState([])
  const [switchLanguage, setSwitchLanguage] = useState(true)
  const [loading, setLoading] = useState(true)
  const [totalProduct, setTotalProduct] = useState(0)
  const [paginatedProduct, setPaginatedProduct] = useState([])
  const [paginationLoader, setPaginationLoader] = useState(false)

  useEffect(() => {
    Preferences.getItem('count').then((response) => {
      setCart(JSON.parse(response))
    })
    Preferences.getItem('languages').then((response) => {
      console.log("local data===", JSON.parse(response))
      setSwitchLanguage(JSON.parse(response))
    })

    if (switchLanguage === true) {
      getListApi('en')
    } else {
      getListApi('ar')
    }

  }, [])

  const getListApi = (language) => {
    setLoading(true)
    return fetch(`https://shopifyapptst1.bma.ae/react-native-exercise/?lang=${language}`)
      .then(response => response.json())
      .then(json => {
        setLoading(false)
        setList(json.data.products)
        setPaginatedProduct([...json.data.products].slice(0, 8))
        setTotalProduct(item?.data?.total_product)

      })
      .catch(error => {
        console.error(error);
      });
  };

  loadMoreProduct = () => {
    if (paginatedProduct.length != 16) {
      setPaginatedProduct([...list].slice(0,paginatedProduct.length+4))
    }
  }


  const addToCard = (item) => {
    let newArray = [...cart]

    newArray.push(item)
    setCart(newArray)
    Preferences.setItem('count', JSON.stringify(cart))
    console.log("item ===", cart.length)

  }
  languageSwitch = () => {
    setSwitchLanguage(!switchLanguage)
  }


  useEffect(() => {
    if (switchLanguage) {
      getListApi('en')
      Preferences.setItem("languages", JSON.stringify(switchLanguage))
    } else {
      getListApi('ar')
      Preferences.setItem("languages", JSON.stringify(switchLanguage))
    }
  }, [switchLanguage])



  return (
    <SafeAreaView style={{ flex: 1 }}>
      {
        loading ? (<Loader />) : (
          <>
            <HeaderComponent
              count={cart.length}
              switchs={switchLanguage}
              languageSwitch={() => languageSwitch()}
              totalProduct={paginatedProduct.length}
            />
            <FlatList
              data={paginatedProduct}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <ProductComponent
                    item={item}
                    onPressbag={() => addToCard(item)}
                    switchs={switchLanguage}
                  />
                )
              }}
              style={{ alignSelf: 'center' }}
              numColumns={2}
              onEndReachedThreshold={0.5}
              onEndReached={() => loadMoreProduct()}
            />
          </>
        )
      }
    </SafeAreaView>
  )
}

export default ProductListingScreen