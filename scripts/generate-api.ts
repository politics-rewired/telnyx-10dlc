import * as OpenAPI from "openapi-typescript-codegen";

// Fetched 2021-06-06
const input =
  "https://assets.ctfassets.net/4b49ta6b3nwj/wPFfqv5zEYGYUQJb202Ec/0b37c4ff05d67b939717d7054eaf3c58/telnyx_10dlc_api.json";

OpenAPI.generate({
  httpClient: OpenAPI.HttpClient.NODE,
  input,
  output: "./gen/api",
});
