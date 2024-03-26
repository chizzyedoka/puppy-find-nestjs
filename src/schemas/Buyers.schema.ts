import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './User.schema';

@Schema()
export class Buyer extends User {}

export const BuyerSchema = SchemaFactory.createForClass(Buyer);
