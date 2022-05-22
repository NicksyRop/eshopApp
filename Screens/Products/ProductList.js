import React from 'react'
import { View ,Text ,TouchableOpacity , Dimensions } from 'react-native'
import { ProductCard } from './ProductCard'


var {width } = Dimensions.get('window').width

export const ProductList = (props) => {

    const {item} = props
    
  return (
   <TouchableOpacity style={{ width : Dimensions.get("window").width/2 - 4}}>
       
           <ProductCard  {...item}/>
       

   </TouchableOpacity>
  )
}