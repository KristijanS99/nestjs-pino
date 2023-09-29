import { Module } from '@nestjs/common';
import * as opentelemetry from '@opentelemetry/api';

import { LoggerModule } from '../src';

import { AppController } from './app.controller';
import { MyService } from './my.service';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: { level: process.env.LOG_LEVEL },
      getActiveSpan: opentelemetry.trace.getActiveSpan,
    }),
  ],
  controllers: [AppController],
  providers: [MyService],
})
export class AppModule {}
