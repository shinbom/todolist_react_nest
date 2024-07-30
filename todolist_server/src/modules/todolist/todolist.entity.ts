import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'list' })
export class TodoEntity {
  @PrimaryGeneratedColumn()
  no: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  isChecked: boolean;
}
