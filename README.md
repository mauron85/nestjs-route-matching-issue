Repo to reproduce [nestjs issue 1799](https://github.com/nestjs/nest/issues/1799)

Rationalle:

Middleware path to route matching should behave same for any request method (ALL, GET, POST, ...).

So following curl commands should log same output for both registered middlewares (AllLoggerMiddleware, GetLoggerMiddleware)

```
curl http://localhost:3000/hello/111
curl http://localhost:3000/hello

```


However `curl http://localhost:3000/hello` logs:

```
GetLoggerMiddleware: GET /hello
AllLoggerMiddleware GET /hello
```


And `curl http://localhost:3000/hello/111` logs:

```
AllLoggerMiddleware GET /hello/111
```