import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { RipsData } from './interfaces/rips.interface';
import * as https from 'https';

@Injectable()
export class RipsService {
  private readonly logger = new Logger(RipsService.name);
  private readonly httpsAgent = new https.Agent({
    rejectUnauthorized: false, // Requerido para el validador local de MinSalud
  });

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async validateRips(data: RipsData) {
    const url = `${this.configService.get('MINSALUD_URL')}/api/Validador/Validar`;
    const user = this.configService.get('MINSALUD_USER');
    const pass = this.configService.get('MINSALUD_PASS');

    this.logger.log(`Iniciando validación de RIPS para factura: ${data.numFactura}`);

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, data, {
          httpsAgent: this.httpsAgent,
          headers: {
            'Authorization': `Basic ${Buffer.from(`${user}:${pass}`).toString('base64')}`,
            'Content-Type': 'application/json',
          },
        }),
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error validando RIPS: ${error.message}`);
      throw error;
    }
  }

  async sendRips(data: RipsData) {
    const url = `${this.configService.get('MINSALUD_URL')}/api/Validador/Enviar`;
    const user = this.configService.get('MINSALUD_USER');
    const pass = this.configService.get('MINSALUD_PASS');

    this.logger.log(`Enviando RIPS para factura: ${data.numFactura}`);

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, data, {
          httpsAgent: this.httpsAgent,
          headers: {
            'Authorization': `Basic ${Buffer.from(`${user}:${pass}`).toString('base64')}`,
            'Content-Type': 'application/json',
          },
        }),
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error enviando RIPS: ${error.message}`);
      throw error;
    }
  }
}
