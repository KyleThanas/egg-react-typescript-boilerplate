import * as path from 'path'
import * as fs from 'fs'
import { EggAppConfig } from 'egg'

const isProd = process.env.NODE_ENV === 'production'
const pathDir = isProd ? 'inspire' : 'public'
const publicPath = isProd ? '/inspire/' : '/public/'

export default function (app: EggAppConfig) {
  const exports: any = {}

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(
      path.join(app.baseDir, 'app/web/asset/images/favicon.ico')
    ),
  }

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs'),
  }

  exports.static = {
    prefix: publicPath,
    dir: path.join(app.baseDir, pathDir),
  }

  exports.output = { path: pathDir, publicPath: publicPath }

  exports.keys = '123456'

  exports.middleware = [
    'locals',
    // 'access'
  ]

  exports.reactssr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
  }

  return exports
}
