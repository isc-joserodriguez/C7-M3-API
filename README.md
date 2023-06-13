### Postman test - Guardar token en Env vars.

```js
const responseJson = pm.response.json();
var token = responseJson.detalles;
pm.environment.set("TOKEN", token);
```

