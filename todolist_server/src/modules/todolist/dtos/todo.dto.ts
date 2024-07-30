import { IsBoolean, IsString } from 'class-validator';

export class TodoDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  isChecked: boolean;
}
