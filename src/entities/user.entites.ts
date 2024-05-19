import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class Register{
    @PrimaryGeneratedColumn()
    id :number
    @Column()
    name:string
    @Column()
    email:string
    @Column()
    password:string
    @Column()
    confirm_password:string
    @Column()
    mobile_number:number
    @Column()
    gender:string



}
