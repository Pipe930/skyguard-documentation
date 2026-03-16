import type { TableColumn } from "../interfaces/table.interface";

interface ExceptionRow {
  exception: string;
  statusCode: number;
  code: string;
  description: string;
}

export const codeExampleExceptionsUsage = `import { NotFoundError InternalServerError } from "skyguard-js";

const listResources = ["1", "2", "3"];

app.get("/resource/{id}", (ctx) => {
  const resource = ctx.params["id"];

  if (!listResources.includes(resource)) {
    throw new NotFoundError("Resource not found");
  }

  return ctx.json(resource);
});

app.get("/divide", (ctx) => {
  try {
    const { a, b } = ctx.query;
    const result = Number(a) / Number(b);

    if (!Number.isFinite(result)) {
      throw new Error("Invalid operation");
    }

    return ctx.json({ result });
  } catch {
    throw new InternalServerError(
      "An error occurred while processing your request",
    );
  }
});`;

export const exceptionTypesColumns: TableColumn<ExceptionRow>[] = [
  { header: "Excepción", accessor: "exception", emphasis: true },
  { header: "Status", accessor: "statusCode", width: "110px" },
  { header: "Code", accessor: "code", width: "260px" },
  { header: "¿Qué representa?", accessor: "description" },
];

export const exceptionTypesData: ExceptionRow[] = [
  {
    exception: "BadRequestError",
    statusCode: 400,
    code: "BAD_REQUEST",
    description: "La solicitud es inválida o tiene datos mal formados.",
  },
  {
    exception: "UnauthorizedError",
    statusCode: 401,
    code: "UNAUTHORIZED",
    description: "Faltan credenciales o son inválidas.",
  },
  {
    exception: "ForbiddenError",
    statusCode: 403,
    code: "FORBIDDEN",
    description: "El cliente está autenticado, pero no tiene permisos.",
  },
  {
    exception: "NotFoundError",
    statusCode: 404,
    code: "NOT_FOUND",
    description: "No existe el recurso solicitado.",
  },
  {
    exception: "RequestTimeoutError",
    statusCode: 408,
    code: "REQUEST_TIMEOUT",
    description: "La solicitud tardó demasiado y expiró.",
  },
  {
    exception: "ConflictError",
    statusCode: 409,
    code: "CONFLICT",
    description: "Hay conflicto con el estado actual del recurso.",
  },
  {
    exception: "UnsopportedMediaTypeError",
    statusCode: 415,
    code: "UNSOPPORTED_MEDIA_TYPE",
    description: "El tipo de contenido enviado no es soportado.",
  },
  {
    exception: "UnprocessableContentError",
    statusCode: 422,
    code: "UNPROCESSABLE_CONTENT",
    description: "El contenido es válido sintácticamente, pero no procesable.",
  },
  {
    exception: "TooManyRequestsError",
    statusCode: 429,
    code: "TOO_MANY_REQUESTS",
    description: "Se superó el límite de solicitudes permitidas.",
  },
  {
    exception: "InternalServerError",
    statusCode: 500,
    code: "INTERNAL_SERVER_ERROR",
    description: "Error interno inesperado del servidor.",
  },
  {
    exception: "NotImplementedError",
    statusCode: 501,
    code: "NOT_IMPLEMENTED",
    description: "La funcionalidad solicitada no está implementada.",
  },
  {
    exception: "BadGatewayError",
    statusCode: 502,
    code: "BAD_GATEWAY",
    description: "El servidor recibió una respuesta inválida de un upstream.",
  },
  {
    exception: "ServiceUnavailableError",
    statusCode: 503,
    code: "SERVICE_UNAVAILABLE",
    description: "El servicio no está disponible temporalmente.",
  },
  {
    exception: "GatewayTimeoutError",
    statusCode: 504,
    code: "GATEWAY_TIMEOUT",
    description: "Un upstream tardó demasiado en responder.",
  },
];
