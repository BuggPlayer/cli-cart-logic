import React, {useEffect, useState} from 'react';
import AddToCart from '../Screens/addtocart';
import {MaterialCommunityIcons,Fontisto,AntDesign} from '../Constants/Icons';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  Pressable,
  ScrollView,
} from 'react-native';
import {products} from './../data';
import {CartButton} from '../Componets/UI/CartButton';
import ModelBtn from '../Componets/UI/ModelBtn';
import {DataTable} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import RazorPay from '../RazorPay';
const CartScreen = (props) => {
  // const refRBSheet = useRef();
  // const btnsheet = () => {
  //   refRBSheet.current.open();
  // };
  const Cart = useSelector((state) => state.reducer.addedItems);
  const totalPrice = useSelector((state) => state.reducer.total);

  const dispatch = useDispatch();
  function _onAdd(id) {
    dispatch({
      type: 'ADD_QUANTITY',
      id: id,
    });
  }
  function _onSub(id) {
    dispatch({
      type: 'SUB_QUANTITY',
      id: id,
    });
  }
  const [orderId, setorderId] = useState('');
  var checkoutPrice = totalPrice * 10000000;

  useEffect(() => {
    axios({
      method: 'POST',
      url: 'https://api.razorpay.com/v1/orders',
      headers: {
        'content-type': 'application/json',
        authorization:
          'Basic cnpwX3Rlc3RfUjM1Y3dNMlo1aUhqdmI6d0NZUUdtN3ZNZWZHdmtSckFGb05lUWQw',
      },

      data: JSON.stringify({
        amount: totalPrice * 100,
        currency: 'INR',
        receipt: 'receipt81',
        payment_capture: 1,
      }),
    })
      .then((res) => {
        console.log('sucess', res);
        setorderId(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [totalPrice]);

  return (
    <>
      {Cart.length<1 && (
        <View>
  <TouchableOpacity onPress={()=>props.navigation.goBack()}><Text>click me to back</Text></TouchableOpacity>
 
        </View>
      )

      }
        <ScrollView>
               <View
      
       >
          {Cart.map((data, i) => {
            return (
              <View  style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#ddd',
                
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 2,
                margin: 5,
              }}>
              <View style={{flexDirection: 'row', padding: 20}}>
                <Image
                  style={{height: 100, width: 80}}
                  source={{uri: data.image}}
                />
                <View style={{marginLeft:20}} >
                  <Text>{data.title}</Text>
                  <Text>{'Price' + data.price}</Text>
                  <Text>total for this:{data.price * data.quantity}</Text>
                  <AddToCart
                    onPress={(id) => _onAdd(data.id)}
                    onSub={(id) => _onSub(data.id)}
                    quantity={data.quantity}
                  />
                </View>

                <TouchableOpacity
                  onPress={() => {
                    dispatch({
                      type: 'REMOVE_ITEM',
                      id: data.id,
                    });
                  }}
                  style={{
                  
                    marginTop: 30,
                    marginLeft: 20,
                  
                   
                  }}>
                  <AntDesign name="delete" color={"red"} size={20} />
                </TouchableOpacity>
              </View>
              </View>
            );
          })}
          </View>
        </ScrollView>
      
      <View 

      style={{ borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        
        shadowColor: '#000',
        
       
        shadowRadius: 2,

        elevation: 0.9,}}
      >

      
      <View
        style={{
         flexDirection:'row',
         justifyContent:'space-between',
        padding:10
        }}>
          <View >
          <Text>TotalPrice:</Text>
        <Text>SubTotalTotal:</Text>
        <Text>essential Tex:</Text>
        <Text>Delivery </Text>
          </View>
          <View style={{marginRight:10}}>
          <Text >{totalPrice}</Text>
          <View style={{marginLeft:20}}>
          <Text>00</Text>
        <Text>No</Text>
        <Text>Free</Text>
          </View>
       
          </View>
        
      </View>


      <RazorPay
        amount={totalPrice}
        name="MrRoom" // The Company name will appear on the payment page
        contact_name="Ali" // Payer name
        email="irizviali@gmail.com" // Payer email id
        contact="9598151582" // Payer mobile Number
        orderId={orderId}
      />
      </View>
    </>
  );
};

export default CartScreen;
