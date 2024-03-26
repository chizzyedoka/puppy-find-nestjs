import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './User.schema';

@Schema()
export class Seller extends User {}

export const SellerSchema = SchemaFactory.createForClass(Seller);
