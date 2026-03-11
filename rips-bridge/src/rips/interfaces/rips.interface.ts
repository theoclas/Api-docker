import { IsString, IsArray, IsOptional, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class RipsUsuario {
  @IsString() tipoIdentificacion: string;
  @IsString() numIdentificacion: string;
  @IsString() tipoUsuario: string;
  @IsString() fechaNacimiento: string;
  @IsString() codSexo: string;
  @IsString() codPaisResidencia: string;
  @IsString() codMunicipioResidencia: string;
  @IsString() codZonaResidencia: string;
  @IsString() incapacidad: string;
  @IsString() codPaisOrigen: string;
}

export class RipsConsulta {
  @IsString() codPrestador: string;
  @IsString() fechaInicioAtencion: string;
  @IsOptional() @IsString() numAutorizacion?: string;
  @IsString() codConsulta: string;
  @IsString() modalidadGrupoServicio: string;
  @IsString() grupoServicios: string;
  @IsString() codServicio: string;
  @IsString() finalidadTecnologiaSalud: string;
  @IsString() causaExterna: string;
  @IsString() codDiagnosticoPrincipal: string;
  @IsOptional() @IsString() codDiagnosticoRelacionado1?: string;
  @IsOptional() @IsString() codDiagnosticoRelacionado2?: string;
  @IsOptional() @IsString() codDiagnosticoRelacionado3?: string;
  @IsString() tipoDiagnosticoPrincipal: string;
  @IsString() tipoIdentificacionUsuario: string;
  @IsString() numIdentificacionUsuario: string;
  @IsNumber() vlrVrServicio: number;
  @IsString() conceptorecaudo: string;
  @IsNumber() vlrCuotaModeradora: number;
  @IsString() numFechadeVentaOriginal: string;
}

export class RipsProcedimiento {
  @IsString() codPrestador: string;
  @IsString() fechaInicioAtencion: string;
  @IsString() idUsuario: string;
  @IsOptional() @IsString() numAutorizacion?: string;
  @IsString() codProcedimiento: string;
  @IsString() viaIngresoServicioSalud: string;
  @IsString() modalidadGrupoServicio: string;
  @IsString() grupoServicios: string;
  @IsString() codServicio: string;
  @IsString() finalidadTecnologiaSalud: string;
  @IsString() tipoIdentificacionPersonalSalud: string;
  @IsString() numIdentificacionPersonalSalud: string;
  @IsString() codDiagnosticoPrincipal: string;
  @IsOptional() @IsString() codDiagnosticoRelacionado?: string;
  @IsOptional() @IsString() codComplicacion?: string;
  @IsNumber() vrServicio: number;
  @IsString() tipoIdentificacionUsuario: string;
  @IsString() numIdentificacionUsuario: string;
  @IsString() numFechadeVentaOriginal: string;
}

export class RipsData {
  @IsString() numFactura: string;
  @IsOptional() @IsString() tipoNota?: string;
  @IsOptional() @IsString() numNota?: string;
  
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RipsUsuario)
  usuarios: RipsUsuario[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RipsConsulta)
  consultas?: RipsConsulta[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RipsProcedimiento)
  procedimientos?: RipsProcedimiento[];

  @IsOptional() @IsArray() urgencias?: any[];
  @IsOptional() @IsArray() hospitalizacion?: any[];
  @IsOptional() @IsArray() recienNacidos?: any[];
  @IsOptional() @IsArray() medicamentos?: any[];
  @IsOptional() @IsArray() otrosServicios?: any[];
}
