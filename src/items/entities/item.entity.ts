import {
   Entity,
   Column,
   OneToOne,
   OneToMany,
   ManyToMany,
   JoinColumn,
   JoinTable,
} from 'typeorm';
import { Listing } from './listing.entity';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Comment } from './comment.entity';
import { Tag } from './tag.entity';

@Entity()
export class Item extends AbstractEntity<Item> {
   @Column()
   name: string;

   @Column({ default: true })
   public: boolean;

   @OneToOne(() => Listing, { cascade: true })
   @JoinColumn({ name: 'listing_id' })
   listing: Listing;

   @OneToMany(() => Comment, (comment) => comment.item, { cascade: true })
   comments: Comment[];

   @ManyToMany(() => Tag, { cascade: true })
   @JoinTable({
      joinColumn: { name: 'item_id' },
      inverseJoinColumn: { name: 'tag_id' },
   })
   tags: Tag[];
}
