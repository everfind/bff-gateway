import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

const graphqlGatewayModule = GraphQLGatewayModule.forRootAsync({
  useFactory: async () => ({
    server: {
      path: '/graphql',
    },
    gateway: {
      serviceList: [
        {
          name: 'goods',
          url: 'http://localhost:3001/goods/graphql',
        },
        {
          name: 'order',
          url: 'http://localhost:3002/order/graphql',
        },
      ],
    },
  }),
});

@Module({
  imports: [graphqlGatewayModule],
})
export class AppModule {}
