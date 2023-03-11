import { Module } from '@nestjs/common';
import { WebsocketController } from './controllers/websocket.controller';
import { SocketService } from './services/socket.service';
import { SocketGateway } from './services/socket.gateway';

@Module({
  controllers: [WebsocketController],
  providers: [SocketService, SocketGateway],
})
export class WebsocketModule {}
