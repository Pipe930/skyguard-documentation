import{j as e}from"./index-CVLVyqCr.js";import{C as o}from"./CodeBlock-DqpFqFhe.js";import{T as r}from"./Table-DJtjEYSg.js";import"./copy-1r-K9xfu.js";import"./createLucideIcon-Ie-Bw47j.js";const s=`import { NotFoundError InternalServerError } from "skyguard-js";

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
});`,t=[{header:"Excepción",accessor:"exception",emphasis:!0},{header:"Status",accessor:"statusCode",width:"110px"},{header:"Code",accessor:"code",width:"260px"},{header:"¿Qué representa?",accessor:"description"}],n=[{exception:"BadRequestError",statusCode:400,code:"BAD_REQUEST",description:"La solicitud es inválida o tiene datos mal formados."},{exception:"UnauthorizedError",statusCode:401,code:"UNAUTHORIZED",description:"Faltan credenciales o son inválidas."},{exception:"ForbiddenError",statusCode:403,code:"FORBIDDEN",description:"El cliente está autenticado, pero no tiene permisos."},{exception:"NotFoundError",statusCode:404,code:"NOT_FOUND",description:"No existe el recurso solicitado."},{exception:"RequestTimeoutError",statusCode:408,code:"REQUEST_TIMEOUT",description:"La solicitud tardó demasiado y expiró."},{exception:"ConflictError",statusCode:409,code:"CONFLICT",description:"Hay conflicto con el estado actual del recurso."},{exception:"UnsopportedMediaTypeError",statusCode:415,code:"UNSOPPORTED_MEDIA_TYPE",description:"El tipo de contenido enviado no es soportado."},{exception:"UnprocessableContentError",statusCode:422,code:"UNPROCESSABLE_CONTENT",description:"El contenido es válido sintácticamente, pero no procesable."},{exception:"TooManyRequestsError",statusCode:429,code:"TOO_MANY_REQUESTS",description:"Se superó el límite de solicitudes permitidas."},{exception:"InternalServerError",statusCode:500,code:"INTERNAL_SERVER_ERROR",description:"Error interno inesperado del servidor."},{exception:"NotImplementedError",statusCode:501,code:"NOT_IMPLEMENTED",description:"La funcionalidad solicitada no está implementada."},{exception:"BadGatewayError",statusCode:502,code:"BAD_GATEWAY",description:"El servidor recibió una respuesta inválida de un upstream."},{exception:"ServiceUnavailableError",statusCode:503,code:"SERVICE_UNAVAILABLE",description:"El servicio no está disponible temporalmente."},{exception:"GatewayTimeoutError",statusCode:504,code:"GATEWAY_TIMEOUT",description:"Un upstream tardó demasiado en responder."}];function u(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"exceptions",className:"docs-section",children:[e.jsx("h1",{children:"Excepciones"}),e.jsx("p",{children:"El framework provee un conjunto de excepciones HTTP integradas que puedes lanzar desde handlers de rutas o middlewares. Cuando se lanza una excepción, el framework la detecta y responde automáticamente con el código de estado y el mensaje que definiste en la clase."})]}),e.jsx("hr",{}),e.jsxs("section",{id:"exceptions-usage",className:"docs-section",children:[e.jsx("h2",{children:"Ejemplo de uso"}),e.jsx("p",{children:"Puedes lanzar excepciones de forma explícita para errores de negocio (por ejemplo, recurso no encontrado) y envolver errores inesperados con una excepción 500 para mantener respuestas consistentes."}),e.jsx(o,{code:s})]}),e.jsxs("section",{id:"exceptions-types",className:"docs-section",children:[e.jsx("h2",{children:"Tipos de Excepciones"}),e.jsx("p",{children:"Estas son las excepciones HTTP soportadas por SkyguardJS y lo que representa cada una."}),e.jsx(r,{columns:t,data:n})]})]})}export{u as default};
