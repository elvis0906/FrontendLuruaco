import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Product } from '../../entities/Product';
import { ProductRepositoryImpl } from '../../../Data/repositories/ProductRepository';
const { updateWithImage } = new ProductRepositoryImpl();

export const UpdateWithImageProductUseCase = async (product: Product, file: ImagePicker.ImageInfo) => {
  return await updateWithImage(product, file);
}
