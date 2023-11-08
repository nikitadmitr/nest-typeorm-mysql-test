import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Item } from './item.entity';

@Entity()
export class Comment extends AbstractEntity<Comment> {
   @Column()
   content: string;

   @ManyToOne(() => Item, (item) => item.comments)
   @JoinColumn({ name: 'item_id' })
   item: Item;
}
