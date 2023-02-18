import { CacheModule, CacheStore, Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/orm.config';
import { GameModule } from './game/game.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), GameModule, AuthModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }),CacheModule.register({ store: redisStore as unknown as CacheStore, host: 'localhost', port: 6379, }),
  ]
})
export class AppModule { }
