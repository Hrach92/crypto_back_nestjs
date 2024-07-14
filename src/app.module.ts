import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TokenModule } from './token/token.module';
import configuration from './config/configuration';
import { TokenService } from './token/token.service';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    TokenModule,
  ],
  controllers: [AppController],
  providers: [AppService, TokenService],
})
export class AppModule {}
