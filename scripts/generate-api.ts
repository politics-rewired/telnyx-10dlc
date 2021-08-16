import * as OpenAPI from "openapi-typescript-codegen";

// Fetched 2021-08-16
const input =
  "https://assets.ctfassets.net/4b49ta6b3nwj/wPFfqv5zEYGYUQJb202Ec/0ffecd1c98f100c0d55da92e4ccc490e/telnyx_10dlc_api.json";

OpenAPI.generate({
  httpClient: OpenAPI.HttpClient.NODE,
  input,
  output: "./gen/api",
});
