import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

let newCartId: number;
describe('API endpoints testing (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('product endpoint testing', () => {
    it('/product (GET)', async () => {
      const res = await request(app.getHttpServer()).get('/product').send();
      expect(res.status).toBe(200);
      expect(res.body.length).toEqual(6);
    });

    it('/product (GET) get with type query param', async () => {
      const res = await request(app.getHttpServer())
        .get('/product?type=Clear')
        .send();
      expect(res.status).toBe(200);
      expect(res.body.length).toEqual(2);
    });

    it('/product/1 (GET)', async () => {
      const res = await request(app.getHttpServer()).get('/product/1').send();
      expect(res.status).toBe(200);
      expect(res.body.id).toEqual(1);
    });

    it('/product/10 (GET) if product none existing should return 404', async () => {
      const res = await request(app.getHttpServer()).get('/product/10').send();
      expect(res.status).toBe(404);
    });
  });

  describe('cart endpoint testing', () => {
    it('/cart (PUT) add a new cart', async () => {
      const res = await request(app.getHttpServer()).put('/cart').send({
        productId: '1',
      });
      newCartId = res.body.id;
      expect(res.status).toBe(200);
      expect(res.body.productId).toEqual('1');
    });

    it('/cart (PUT) add a 1 to existing cart', async () => {
      const res = await request(app.getHttpServer()).put('/cart').send({
        productId: '1',
      });
      expect(res.status).toBe(200);
      expect(res.body.qty).toEqual(2);
    });

    it('/cart (PUT) if product none existing should return 404', async () => {
      const res = await request(app.getHttpServer()).put('/cart').send({
        productId: 50,
      });
      expect(res.status).toBe(404);
    });

    it(`/cart/${newCartId} (PATCH) add a 5 to existing cart`, async () => {
      const res = await request(app.getHttpServer())
        .patch(`/cart/${newCartId}`)
        .send({
          newQty: 5,
        });
      expect(res.status).toBe(200);
      expect(res.body.qty).toEqual(5);
    });
  });
});
