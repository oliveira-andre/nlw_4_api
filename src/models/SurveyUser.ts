import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("surveys_users")
class SurveyUser {
  @PrimaryColumn('uuid')
  readonly id: String;

  @Column()
  user_id: String;

  @Column()
  survey_id: String;

  @Column()
  value: Number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { SurveyUser };
