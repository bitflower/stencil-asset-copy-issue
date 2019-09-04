# Stencil Demo showcasing copy bug

Once you specify a copy task for `www` with target `assets` the internal asset copy task is not being executed resulting in missing files in `www/assets`.

The result of this demo's `www/assets` is this:
![alt text](https://github.com/bitflower/stencil-asset-copy-issue/raw/master/err.png "Logo Title Text 1")

To try it yourself:

```bash
npm start
```
